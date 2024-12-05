/*
Current modal layout logic is as follows.

Modal Layout has three sections; Header, Body, Footer
Make sure to include them within the ModalLayout Component in the correct order. (check one of the example modals)
You can render anything within those sections.
Modal layout takes the full screen hieght available while leaving padding on the top and bottom.
Within the Layout, Modal Header and Footer has fixed heights. 
Modal Boday takes up the full height avaialble regardless of the content height.
If the content within the Body compoent is too long, body component will be internally scrollable to view everything. (check ExampleModalOne)

Alternatively you can use just the Modal Layout without thoese three components if you need flexibility.

You can change these behaviours according the UI/UX design of the project. Plan these changes behaviors beforehand. 
Make sure that the changes are consistant across project and works well in any screen.
Do not change these components without consulting senior frontend engineers (someone equal or above SSE)
*/

import { useModal } from "../../hooks/modalsHooks";
import Icon from "../Icon";

interface ModalLayoutProps {
  children: React.ReactNode;
  disablePadding?: boolean;
  hideCloseBtn?: boolean;
  variant?: "xl" | "lg" | "sm" | "lg-1000";
}
interface ModalLayoutHeaderProps {
  children: React.ReactNode;
}
interface ModalLayoutBodyProps {
  children: React.ReactNode;
}
interface ModalLayoutFooterProps {
  children: React.ReactNode;
}

function ModalLayout({
  children,
  disablePadding,
  hideCloseBtn = false,
  variant = "xl",
}: ModalLayoutProps) {
  const { hideModal } = useModal();
  return (
    <div
      className={`modal-dialog bg-white rounded shadow ${
        disablePadding ? "" : "p-2"
      } ${variant ? `modal-${variant}` : ""}`}
    >
      <div className="modal-content h-100 rounded">
        {!hideCloseBtn && (
          <button
            className="position-absolute z-1 top-0 end-0 p-0 m-2 bg-transparent border-0"
            onClick={hideModal}
          >
            <Icon icon="/icons/close-outline.svg" size={20} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

ModalLayout.Header = function Header({ children }: ModalLayoutHeaderProps) {
  return (
    <div className="modal-header">
      <h5 className="modal-title w-100">{children}</h5>
    </div>
  );
};

ModalLayout.Body = function Body({ children }: ModalLayoutBodyProps) {
  return <div className="modal-body">{children}</div>;
};

ModalLayout.Footer = function Footer({ children }: ModalLayoutFooterProps) {
  return <div className="modal-footer">{children}</div>;
};

export default ModalLayout;
