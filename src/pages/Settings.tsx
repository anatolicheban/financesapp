import React, { useState } from "react";
import ChangePwd from "../components/ChangePwd";
import ChangeUsername from "../components/ChangeUsername";
import SwitchBtn from "../components/UI/SwitchBtn";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/pages/Settings.sass";

type SettingsProps = {
  onChangeMode: (value: boolean) => void;
  isDarkMode: boolean;
};

const Settings = ({ onChangeMode, isDarkMode }: SettingsProps) => {
  return (
    <div className="settings">
      <h1 className="settings__title">Settings</h1>
      <div className="settings__change-un">
        <ChangeUsername />
      </div>
      <div className="settings__change-pwd">
        <ChangePwd />
      </div>
      <div className="settings__color-mode">
        <span>Color mode:</span>
        <SwitchBtn checked={isDarkMode} onChange={(value) => onChangeMode(value)} />
      </div>
    </div>
  );
};

export default Settings;
