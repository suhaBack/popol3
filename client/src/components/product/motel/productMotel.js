import { useEffect, useState } from "react";
import "./productmotel.css";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

function ProductMotel(){
  const [itemList,setItemList] = useState([]);
  useEffect(()=>{
    const getList = async () => {
      await axios.get(`${API_URL}/lodging`)
      .then((result)=>{
        const items = result.data
        console.log("items",items);
        setItemList(items)
      })
      .catch((e)=>{
        console.log(e);
      })
      
    }
    getList();
  },[]);
  console.log(itemList);
  return (
    <>
      <p>모텔</p>
      {itemList.map((item)=>{
        return(
          <div>
            <p>{item.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default ProductMotel;