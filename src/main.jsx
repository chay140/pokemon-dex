import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/configStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 리덕스 스토어 연결 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
