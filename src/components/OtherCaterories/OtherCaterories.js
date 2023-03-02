import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './OtherCaterories.styled';

const modalRoot = document.querySelector('#modal-root');

const OtherCaterories = ({ catagories, position, handlerOnCloseModal }) => {
  const handlerOnClickModal = event => {
    // * Close modal
    if (event.currentTarget === event.target) handlerOnCloseModal();
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

  console.log('positionOther', position);

  return createPortal(
    <Overlay className="overlay" onClick={handlerOnClickModal}>
      <ModalWindow
        className="modal"
        style={{
          top: position.bottom,
          left: position.left,
        }}
      >
        {/* <img src={src} alt={alt} /> */}
        <p>Other categories</p>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

// OtherCaterories.propTypes = {
//   modalInfo: PropTypes.exact({
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//   }),
// };

export default OtherCaterories;
