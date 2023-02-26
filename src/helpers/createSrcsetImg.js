const createSrcsetImg = imageInformation => {
  let srcset = '';
  let src = '';

  for (const key in imageInformation) {
    srcset = srcset + ` ${imageInformation[key]} ${key}w,`;
    src = imageInformation[key];
  }

  if (src) return { srcset, src };

  return '';
};

export default createSrcsetImg;
