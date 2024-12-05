/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Modals can be stackable.
When hiding stacked modals the top-most one will go out first.(LIFO)
Show/hide functionality will be handled via a custom hook. (check modalHooks)
Modals will blur the backgrounds. Clicking on the background won't close the modal.

Edit below component to change these beaviours. Make sure to consult an SSE or above rank before making changes.
*/

import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./modal-container.scss";
import { ModalContext } from "../../providers/ModalProvider";

// register modals here.
const modalContent: { [key: string]: React.FC<any> } = {};

export default function ModalContainer() {
  const { modalProps, modalTypes, hideModal } = useContext(ModalContext);

  React.useEffect(() => {
    if (modalTypes.length) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalTypes]);

  const handleClose = async () => {
    hideModal();
  };

  return (
    <AnimatePresence>
      {modalTypes.map((modalType, idx) => {
        const CurrModalContent = modalContent[modalType];
        const currModalProps = { ...modalProps[modalType] };
        if (currModalProps && !currModalProps.closeModal) {
          currModalProps.closeModal = handleClose;
        }

        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={`${modalType}-${idx}`}
            className="modal-container"
            aria-labelledby="modalContent"
            aria-hidden="true"
          >
            <CurrModalContent {...currModalProps} />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
