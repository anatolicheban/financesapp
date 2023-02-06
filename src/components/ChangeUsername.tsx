import React from "react";
import Input from "./UI/Input";
import { MdDone } from "react-icons/md";
import "../styles/components/ChangeUsername.sass";

const ChangeUsername = () => {
  return (
    <div className="change-un">
      <h3 className="change-un__title">Change username</h3>
      <div className="change-un__inputs">
        <Input id="change-userame" label="New username" value="" onChange={() => {}} />
        <Input
          id="change-userame-pwd"
          type={"password"}
          label="Password"
          value="f"
          onChange={() => {}}
        />
        <button>
          <MdDone />
        </button>
      </div>
    </div>
  );
};

export default ChangeUsername;
