import React, { HTMLAttributes, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText: string;
}

const Modal: React.FC<IProps> = ({ isShown, hide, modalContent, headerText }) => {
  const modal = (
    <>
      <div className={'fixed w-full h-full top-0 left-0 bg-black/90 z-10'} onClick={hide} />
      <div
        className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-auto outline-0'}
        aria-modal
        aria-labelledby={headerText}
        tabIndex={-1}
        role="dialog"
      >
        {modalContent}
      </div>
    </>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export { Modal };
