import "./App.css";
import Card from "./components/Card";
import Main from "./containers/main";
import { ThemeBtn } from "./styledComponents/styles";
import { useDispatch, useSelector } from "react-redux";
import { SetDark, SetLight } from "./Store/actions";

function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state);
  const { theme } = themeState;

  function handleThemeChange() {
    if (theme === "light") {
      dispatch(SetDark());
    } else {
      dispatch(SetLight());
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
