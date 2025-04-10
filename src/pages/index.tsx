import { GetServerSideProps } from 'next';
import { setCookieHeader } from '@/utils/cookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie || '';
  // regular expression matching process with a capture group
  const match = cookie.match(/language=(ua|en)/);
  const lang = match?.[1] || 'ua';

  if (match === null) {
    context.res.setHeader('Set-Cookie', setCookieHeader('language', 'ua', 3));
  }

  return {
    redirect: {
      destination: `/${lang}`,
      permanent: false,
    },
  };
};

export default function HomeRedirect() {
  return null;
}
