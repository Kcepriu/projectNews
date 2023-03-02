import { Link } from 'react-router-dom';
import ImgNew from 'components/ImgNew/ImgNew';
import { formatDate } from 'helpers/formatDate';
import {
  Card,
  WrapImg,
  WrapContent,
  FooterCard,
  Section,
  Title,
  ContentNew,
  DatePublication,
} from './CardNew.styled';
import { useContextStorage } from 'components/ContextUseStorage/ContextUseStorage';
import ButtonFavorite from 'components/ButtonFavorite/ButtonFavorite';
import IconToButton from 'components/IconToButton/IconToButton';
import { useState } from 'react';
// import { ReactComponent as IconAdd } from '../../images/icons.svg'; //#icon-add_favorite';

const CardNew = ({ article }) => {
  const { isFavorite, addToFavorite, deleteFromFavorite, addToRead } =
    useContextStorage();

  const { abstract, published_date, section, title, url, images } = article;

  const [articleRead, setArticleRead] = useState(() => isFavorite(article));

  const handlerClickFavorite = event => {
    //Не можу винести в UseEffect бо зациклюється

    if (articleRead) {
      deleteFromFavorite(article);
    } else {
      addToFavorite(article);
    }

    setArticleRead(prev => !prev);
  };

  const handlerClickRead = () => {
    const startDate = new Date();
    addToRead({ ...article, dateRead: startDate.setHours(0, 0, 0, 0) });
  };

  const newAbstract =
    abstract.length > 150 ? abstract.slice(0, 150) + '...' : abstract;

  return (
    <Card>
      <WrapImg>
        <ImgNew imageInformation={images} alt={title} />
      </WrapImg>

      <WrapContent>
        <Title>{title}</Title>
        <ContentNew>{newAbstract}</ContentNew>

        <FooterCard>
          <DatePublication>{formatDate(published_date)}</DatePublication>
          <Link target="_blank" to={url} onClick={handlerClickRead}>
            Read more
          </Link>
        </FooterCard>
      </WrapContent>

      <Section>{section}</Section>

      <ButtonFavorite
        id="ChangeStatus"
        onClickButton={handlerClickFavorite}
        className="Favorite"
      >
        {articleRead ? 'Remove from favorite' : 'Add to favorite'}
        <IconToButton
          nameIcon={articleRead ? 'icon-remove_favorite' : 'icon-add_favorite'}
          className="iconButtonFavorite"
        />
      </ButtonFavorite>
    </Card>
  );
};

export default CardNew;
