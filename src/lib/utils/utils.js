export const getImageSrc = (file) => {
	return new URL(`../../assets/${file}`, import.meta.url).href;
};
