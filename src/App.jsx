import React from "react";
import { Helmet } from "react-helmet";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { THEME_TYPE } from "./constants";
import Styles from "./data/Styles";
import { useSelector } from "react-redux";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on redux state

const StyleTag = ({themes}) => {

  const themeMode = themes?.theme;
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

function App() {
  const state = useSelector(state => state)

  return (
    <>
      <StyleTag themes={state} />
      <NameBox />
      <ThemeSwitcher />
    </>
  );
}

export default App;
