import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie || '';
  const match = cookie.match(/language=(uk|en)/);
  const lang = match?.[1] || 'uk';

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
