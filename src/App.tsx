import { Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;list-style:none;text-decoration:none;box-sizing:border-box;}
a{color:inherit;}
body{color:${props => props.theme.white.darker};background:#000;}
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
