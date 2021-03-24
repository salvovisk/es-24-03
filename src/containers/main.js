import { MainSec } from "../styledComponents/styles";

function Main({ theme, children }) {
  return <MainSec theme={theme}>{children}</MainSec>;
}

export default Main;
