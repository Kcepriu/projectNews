import noImage from '../../images/no_image.png';
import createSrcsetImg from 'helpers/createSrcsetImg';
import { ImageNews } from './ImgNew.styled';

const ImgNew = ({ imageInformation, alt }) => {
  const srcsetImg = createSrcsetImg(imageInformation);

  if (srcsetImg) {
    return (
      <ImageNews
        srcset={srcsetImg.srcset}
        src={srcsetImg.src}
        alt={alt}
        sizes="394"
      />
    );
  }
  return (
    <ImageNews src={noImage} aria-hidden alt="Not found image" width="394" />
  );
};

export default ImgNew;
