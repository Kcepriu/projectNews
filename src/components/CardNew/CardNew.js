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

const CardNew = ({ article }) => {
  const { abstract, published_date, section, title, url, images } = article;
  return (
    <Card>
      <WrapImg>
        <ImgNew imageInformation={images} alt={title} />
      </WrapImg>
      <WrapContent>
        <Title>{title}</Title>
        <ContentNew>{abstract}</ContentNew>

        <Section>{section}</Section>
        <FooterCard>
          <DatePublication>{formatDate(published_date)}</DatePublication>
          <Link target="_blank" to={url}>
            Read more
          </Link>
        </FooterCard>
      </WrapContent>
    </Card>
  );
};

export default CardNew;
