import { createGlobalStyle } from "styled-components";
import { MovieShop } from "./Components/MovieShop/MovieShop";
import { ReactContext } from "./Components/Utils/ReactContext";
import { ResponsivePage } from "./Components/Utils/ResponsivePage";
import { ReactRef } from "./Components/Utils/ReactRef";
import { TopDownAction } from "./Components/Unity/TopDownAction";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GmarketSansMedium;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TopDownAction />
    </>
  );
}

export default App;
