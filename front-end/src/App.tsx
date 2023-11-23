import { ToastContainer } from "react-toastify";
import { MainRouter } from "./routes/MainRouter";
import { GlobalStyle } from "./style/globalStyle";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <MainRouter />
    </>
  )
}

export default App
