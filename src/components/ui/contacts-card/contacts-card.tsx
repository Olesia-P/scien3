import React from 'react';
import cx from 'classnames';
import css from './contacts-card.module.scss';
import { textContactInfo } from '@/utils/texts/text-contact-info';
// import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cssIconUrlVariable } from '@/utils/functions';
import SingleContact from './single-contact/single-contact';
import SocialMedia from '@/components/ui/contacts-card/social-media/social-media';

type ContactsCardProps = {
  option: 'vertical' | 'horizontal';
};

export default function ContactsCard({
  option = 'vertical',
}: ContactsCardProps) {
  const language = 'ua';
  const {
    phone,
    email,
    workingHours,
    location,
    socialMedia,
    clickToCopyMessage,
    contactsCardDescription,
  } = textContactInfo[language];

  const contactsList = [location, workingHours];

  // const { handleCopyClick, Popup } = useCopyTextWithPopup(
  //   email.text,
  //   email.onCopyPopupText,
  // );

  const isLargeScreen = useMediaQuery(1024);

  return (
    <article
      className={cx(
        css.container,
        option === 'horizontal' && css.horizontalView,
      )}
    >
      {/* <Popup /> */}

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
            style={cssIconUrlVariable(email.icon)}
            // onClick={handleCopyClick}
            title={clickToCopyMessage}
          >
            <SingleContact
              title={email.title}
              text={email.text}
              isLink={false}
              isBlue
            />
          </li>

          {/* phone */}
          <li
            className={css.singleContactWrap}
            style={cssIconUrlVariable(phone.icon)}
          >
            <SingleContact
              title={phone.title}
              text={phone.text}
              isLink={!isLargeScreen}
              link={`tel:${phone.number}`}
            />
          </li>

          {/* rest of the contacts */}
          {contactsList.map((contact) => (
            <li
              className={css.singleContactWrap}
              key={contact.icon}
              style={cssIconUrlVariable(contact.icon)}
            >
              <SingleContact
                title={contact.title}
                text={contact.text}
                isLink={false}
              />
            </li>
          ))}
          <li className={css.socialMediaBlock}>
            <SocialMedia header={socialMedia.header} list={socialMedia.list} />
          </li>
        </ul>

        {/* google map */}
        <div className={css.googleMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
      </section>
    </article>
  );
}
