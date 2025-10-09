export const decodeHtmlResponse = (html: string): string => {
  const txt = new DOMParser().parseFromString(html, 'text/html');
  return txt.documentElement.textContent || '';
};
