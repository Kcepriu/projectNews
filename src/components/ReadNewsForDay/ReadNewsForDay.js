import { useState } from 'react';
import { formatDate } from '../../helpers/formatDate';
import { TopLine, ButtonDate } from './ReadNewsForDay.styled';
import IconToButton from 'components/IconToButton/IconToButton';

const ReadNewsForDay = ({ dateNews, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerClickDate = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <TopLine>
        <ButtonDate onClick={handlerClickDate}>
          {formatDate(dateNews)}
          <IconToButton nameIcon={isOpen ? 'icon-up' : 'icon-down'} />
        </ButtonDate>
      </TopLine>

      {isOpen && children}
    </>
  );
};

export default ReadNewsForDay;
