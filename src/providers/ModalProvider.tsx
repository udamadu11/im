/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type ShowModalParams = {
  modalType: string;
  modalProps?: any;
};

type ModalContextValues = {
  modalTypes: string[];
  modalProps: any;
  showModal: (params: ShowModalParams) => void;
  hideModal: () => void;
  hideAllModals: () => void;
};

const initialContext: ModalContextValues = {
  modalTypes: [],
  modalProps: {},
  showModal: () => {},
  hideModal: () => {},
  hideAllModals: () => {},
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext(initialContext);

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modalTypes, setModalTypes] = React.useState<string[]>([]);
  const [modalPropsByModalType, setModalPropsByModalType] = React.useState<any>(
    {}
  );

  const showModal = ({ modalType, modalProps }: ShowModalParams) => {
    const modifiedModalProps = { ...modalPropsByModalType };
    const modifiedModalTypes = [...modalTypes];
    modifiedModalProps[modalType] = modalProps;
    modifiedModalTypes.push(modalType);
    setModalPropsByModalType(modifiedModalProps);
    setModalTypes(modifiedModalTypes);
  };

  const hideModal = () => {
    setModalTypes((prevModalTypes) => {
      const modifiedModalTypes = [...prevModalTypes];
      modifiedModalTypes.pop();
      return modifiedModalTypes;
    });
  };

  const hideAllModals = () => {
    setModalPropsByModalType({});
    setModalTypes([]);
  };
  return (
    <ModalContext.Provider
      value={{
        modalTypes,
        modalProps: modalPropsByModalType,
        showModal,
        hideModal,
        hideAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
