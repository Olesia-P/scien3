export const setCookie = (key: string, value: string, days: number) => {
  const validValues = ['uk', 'en'];

  if (!validValues.includes(value)) {
    // eslint-disable-next-line no-console
    console.error(`Invalid value for cookie: ${value}`);

    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    return;
  }

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
};

export const getCookie = (key: string): string | null => {
  return (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      ?.split('=')[1] || null
  );
};
