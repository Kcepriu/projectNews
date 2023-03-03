import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  ModalWindow,
  Overlay,
  WrapCategories,
  ButtonCategorie,
} from './FilterMenu.styled';
import { useParams } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const FilterMenu = ({
  categories,
  position,
  handlerOnCloseModal,
  handlerClickCategory,
}) => {
  const { categoryId } = useParams();

  const handlerOnClickModal = event => {
    // * Close modal
    if (event.currentTarget === event.target) handlerOnCloseModal();
  };

  const onClickCategoty = event => {
    console.log('Click category');

    handlerOnCloseModal();
    handlerClickCategory(event);
  };

  useEffect(() => {
    const handlerKeyDownESC = event => {
      // key press esc Close modal
      if (event.key === 'Escape') handlerOnCloseModal();
    };

    window.addEventListener('keydown', handlerKeyDownESC);

    return () => {
      window.removeEventListener('keydown', handlerKeyDownESC);
    };
  }, [handlerOnCloseModal]);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return createPortal(
    <Overlay className="overlay" onClick={handlerOnClickModal}>
      <ModalWindow
        className="modal"
        style={{
          top: position.bottom,
          left: position.left,
        }}
      >
        <WrapCategories>
          {categories.map(({ section, display_name }) => {
            return (
              <li key={section}>
                <ButtonCategorie
                  type="button"
                  name={section}
                  onClick={onClickCategoty}
                  className={categoryId === section ? 'Active' : ''}
                >
                  {display_name}
                </ButtonCategorie>
              </li>
            );
          })}
        </WrapCategories>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

FilterMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      section: PropTypes.string.isRequired,
      display_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlerOnCloseModal: PropTypes.func.isRequired,
  handlerClickCategory: PropTypes.func.isRequired,
  position: PropTypes.exact({
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
};

export default FilterMenu;
