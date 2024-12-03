export const createHeaderTag = (headerSize: number) => {
  if (headerSize >= 1 && headerSize <= 5) {
    return `h${headerSize}` as keyof JSX.IntrinsicElements;
  }
  throw new Error('headerType must be between 1 and 5');
};
