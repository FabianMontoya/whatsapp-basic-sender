export const getStaticAssetUrl = (path: string): string => new URL(`../../assets/${path}`, import.meta.url).href;
export default {};
