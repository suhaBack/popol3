import React from "react";
import axios from 'axios';

function InfoEdit() {
  const getUser = async () => {
    const user_DB = await axios.get('/user')
    console.log(user_DB);
  }
  return (
    <div className="mylist_change">
      <div>내 정보 변경</div>

    </div>
  );
}

export default InfoEdit;
