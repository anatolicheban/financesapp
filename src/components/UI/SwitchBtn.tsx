import React from "react";
import Switch from "react-switch";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

type SwitchBtnProps = {
  onChange: (value: boolean) => void;
  checked: boolean;
};

const SwitchBtn = ({ onChange, checked }: SwitchBtnProps) => {
  const iconsStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <Switch
      onChange={(checked) => onChange(checked)}
      uncheckedHandleIcon={
        <div style={iconsStyles}>
          <HiOutlineSun />
        </div>
      }
      handleDiameter={22}
      onColor={"#F26C6C"}
      offColor={"#aaa"}
      checkedHandleIcon={
        <div style={iconsStyles}>
          <HiOutlineMoon />
        </div>
      }
      uncheckedIcon
      checkedIcon
      checked={checked}
    />
  );
};

export default SwitchBtn;
