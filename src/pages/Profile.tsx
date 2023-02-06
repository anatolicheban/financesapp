import React from "react";
import "../styles/pages/Profile.sass";
import { MdAccountCircle } from "react-icons/md";
import { formatNum } from "../utils/formatNum";

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Profile</h1>
      <div className="profile__image">
        <MdAccountCircle />
      </div>
      <h3 className="profile__name">Anatoli Cheban</h3>
      <p className="profile__registration-date">
        Registered at <span>24.01.2023</span>
      </p>
      <div className="profile__info">
        <p>
          Total incomes: <span>235 $</span>
        </p>
        <p>
          Total expences: <span>235 $</span>
        </p>
        <p>
          Incomes per month: <span>{formatNum(2746222) + " $"}</span>
        </p>
        <p>
          Expences per month: <span>235 $</span>
        </p>
        <p>
          Biggest expence: <span>235 $</span>
        </p>
        <p>
          Biggest income: <span>235 $</span>
        </p>
        <p>
          E/N Ratio: <span>1.23</span>
        </p>
        <button>Reset stats</button>
      </div>
    </div>
  );
};

export default Profile;
