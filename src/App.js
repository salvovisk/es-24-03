import "./App.css";
import Card from "./components/Card";
import Main from "./containers/main";
import { ThemeBtn } from "./styledComponents/styles";
import { useContext } from "react";

import { ThemeChangerContext } from "./Context/ThemeProvider";

// import { useDispatch, useSelector } from "react-redux";
// import { SetDark, SetLight } from "./Store/actions";

function App() {
  const {
    state: { theme },
    SetDark,
    SetLight,
  } = useContext(ThemeChangerContext);

  // const theme = state.theme;

  // const dispatch = useDispatch();
  // const themeState = useSelector((state) => state);
  // const { theme } = themeState;

  function handleThemeChange() {
    if (theme === "light") {
      SetDark();
    } else {
      SetLight();
    }
  }

  return (
    <Main theme={theme}>
      <Card theme={theme} />
      <ThemeBtn theme={theme} onClick={handleThemeChange}>
        {theme === "light" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </ThemeBtn>
    </Main>
  );
}

export default App;
