import React from "react";
import Input from "./UI/Input";
import { MdDone } from "react-icons/md";
import "../styles/components/ChangePwd.sass";

const ChangePwd = () => {
  return (
    <div className="change-pwd">
      <h3 className="change-pwd__title">Change password</h3>
      <div className="change-pwd__inputs">
        <Input
          type={"password"}
          id="change-pwd-old"
          label="Old password"
          value=""
          onChange={() => {}}
        />
        <Input
          id="change-pwd-new"
          type={"password"}
          label="New password"
          value=""
          onChange={() => {}}
        />
        <Input
          id="change-pwd-dupl"
          type={"password"}
          label="Repeat new password"
          value=""
          onChange={() => {}}
        />
        <button>
          <MdDone />
        </button>
      </div>
    </div>
  );
};

export default ChangePwd;
