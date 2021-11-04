import React from "react";
import { THEME_TYPE } from "../constants";
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './../store/actions'
const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on redux state
  const themeMode = useSelector(state => state.theme);
  const dispatch = useDispatch()

  const handleThemeChange = (e) => {
    console.log("davlavkav", e)
    if (themeMode === THEME_TYPE.DARK) {
      dispatch(setTheme(THEME_TYPE.LIGHT))
      return 1
    }
    dispatch(setTheme(THEME_TYPE.DARK))


  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
