import React from 'react';
import cx from 'classnames';
import css from './contacts-card.module.scss';
import { textContactInfo } from '@/texts/text-contact-info';
import useMediaQuery from '@/hooks/use-media-query';
import SingleContact from './single-contact/single-contact';
import SocialMedia from '@/components/ui/contacts-card/social-media/social-media';
import useCopyAndToast from '@/hooks/use-copy-and-toast';
import { useLanguage } from '@/hooks/use-language';

type ContactsCardProps = {
  option: 'vertical' | 'horizontal';
};

export default function ContactsCard({
  option = 'vertical',
}: ContactsCardProps) {
  const language = useLanguage();

  const {
    phone,
    email,
    workingHours,
    location,
    socialMedia,
    clickToCopyBtnTitle,
    contactsCardDescription,
  } = textContactInfo[language];

  const contactsList = [location, workingHours];

  const isLargeScreen = useMediaQuery(1024);

  const copyText = useCopyAndToast();

  return (
    <article
      className={cx(
        css.container,
        option === 'horizontal' && css.horizontalView,
      )}
    >
      <div className={css.description}>
        {contactsCardDescription.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className={css.mainContent}>
        <ul className={css.contactsList}>
          {/* email */}
          <li
            className={css.singleContactWrap}
            onClick={() => copyText(email.text, email.toastMessageCopied)}
            title={clickToCopyBtnTitle}
          >
            <button type="button">
              <SingleContact
                title={email.title}
                text={email.text}
                isLink={false}
                isBlue
                icon={email.icon}
              />
            </button>
          </li>

          {/* phone */}
          <li className={css.singleContactWrap}>
            <SingleContact
              title={phone.title}
              text={phone.text}
              isLink={!isLargeScreen}
              link={`tel:${phone.number}`}
              icon={phone.icon}
            />
          </li>

          {/* rest of the contacts */}
          {contactsList.map((contact) => (
            <li className={css.singleContactWrap} key={contact.icon}>
              <SingleContact
                title={contact.title}
                text={contact.text}
                isLink={false}
                icon={contact.icon}
              />
            </li>
          ))}

          {/* social media */}
          <li className={css.socialMediaBlock}>
            <SocialMedia header={socialMedia.header} list={socialMedia.list} />
          </li>
        </ul>

        {/* google map */}
        <div className={css.googleMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2408474741346!2d30.640858442955004!3d50.455239594386555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4dab204119163%3A0x524030c9896f2f8a!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1744987089255!5m2!1suk!2sua"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
      </section>
    </article>
  );
}
