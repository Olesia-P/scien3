import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie || '';
  const match = cookie.match(/language=(ua|en)/);
  const lang = match?.[1] || 'ua';

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
