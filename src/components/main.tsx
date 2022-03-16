import { BrowserRouter } from "react-router-dom";
import { MainContainer } from "./main-container/main-container";
import { Navigation } from "./navigation/navigation";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../state";

export const Main = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Navigation />
          <MainContainer />
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
};