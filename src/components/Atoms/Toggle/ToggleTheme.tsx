"use client";

import { StarsIcon } from "@/components/icons/StarsIcon";
import { useThemeAssets } from "@/theme/useThemeAssets";
import "./Toggle.scss";

export function ThemeSwitch() {
  const { mode, toggleTheme } = useThemeAssets();
  const isDark = mode === "dark";

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <div className="theme-switch__container">
        <div className="theme-switch__clouds" />
        <div className="theme-switch__stars-container">
          <StarsIcon />
        </div>
        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot" />
              <div className="theme-switch__spot" />
              <div className="theme-switch__spot" />
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
