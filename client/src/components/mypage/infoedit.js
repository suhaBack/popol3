import React from "react";
import axios from 'axios';
import { API_URL } from "../../config/contansts";

function InfoEdit() {
  const getUser = async () => {
    const user_DB = await axios.get(`${API_URL}/user`)
    console.log(user_DB);
  }
  return (
    <div className="mylist_change">
      <div>내 정보 변경</div>

    </div>
  );
}

export default InfoEdit;
