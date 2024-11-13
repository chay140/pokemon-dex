import "./App.css";
import Router from "./shared/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={2000} // 자동 off 시간
        hideProgressBar={true} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
      />
    </>
  );
}

export default App;
