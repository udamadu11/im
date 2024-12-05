import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ModalProvider from "./providers/ModalProvider";
import RoutesRenderer from "./components/routing/RoutesRenderer";
import GoogleTranslateElement from "./components/GoogleTranslateElement/GoogleTranslateElement";
import BackToTopButton from "./components/Buttons/BackToTopButton/BackToTopButton";

import routeConfig from "./routes";

import store from "@/store";

import "./custom.scss";

function App() {
  return (
    <StoreProvider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <GoogleTranslateElement />
          <BackToTopButton />
          <RoutesRenderer routes={routeConfig} />
        </BrowserRouter>
      </ModalProvider>
    </StoreProvider>
  );
}

export default App;
