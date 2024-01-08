import React, { useState } from "react";
import "./EditModal.css";
// import Modal from "react-modal";
import { API_URL } from "../../config/contansts";
import axios from "axios";

const EditModal = ({
  setIsModalOpen,
  close_modal,
  roomInfo,
  selectedLodging,
  modalClassChange,
}) => {
  // console.log("props: ", props.setIsModalOpen);
  const [name, setName] = useState(selectedLodging.name);
  const [address, setAddress] = useState(selectedLodging.location);
  const [description, setDescription] = useState(selectedLodging.description);
  const [image, setImage] = useState(selectedLodging.image);

  const save_modal = async (e) => {
    e.preventDefault();
    console.log("e.target : ", e.target);
    const fc1 = e.target.edit_name.value;
    const fc2 = e.target.edit_address.value;
    const fc3 = e.target.edit_description.value;
    const fc4 = e.target.edit_image.value;
    // const key = "fc";
    console.log("fc1: ", fc1);
    console.log("fc2: ", fc2);
    console.log("fc3: ", fc3);
    console.log("fc4: ", fc4);
    const object = {};
    console.log("roomInfo: ", roomInfo);

    for (let i = 0; i < roomInfo.length; i++) {
      const r = "e.target.r" + i + ".value";
      const cake = "roomInfo[" + i + "].room_id";
      eval(cake);

      console.log("r eval: ", eval(r));
      console.log("r: ", r);
      console.log("cake eval: ", eval(cake));
      console.log("cake: ", cake);
      object[`variable${i}`] = eval(r);
      await axios.patch(`${API_URL}/rooms/detail`, { object });
    }
    console.log("object: ", object);

    await axios.patch(`${API_URL}/lodging/detail`, { fc1, fc2, fc3, fc4 });
  };
  return (
    <>
      {/* <Modal
        isOpen={isModalOpen}
        bodyOpenClassName="modal-open"
        onRequestClose={() => {
          setIsModalOpen(false);
          setZindex(1);
        }}
      > */}
        <div className="modal_Container">
          <div className='modal_Bg'></div>
          <div className="modal_content">
            <h3>{selectedLodging.name}</h3>
            <form className="edit_modal_form" onSubmit={save_modal}>
              <table className="edit_table">
                <tr>
                  <td className="edit_front_td">이름</td>
                  <td>
                    <input
                      type="text"
                      defaultValue={name}
                      className="edit_input"
                      id="edit_name"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="edit_front_td">주소</td>
                  <td>
                    <input
                      type="text"
                      defaultValue={address}
                      className="edit_input"
                      id="edit_address"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="edit_front_td">한마디</td>
                  <td>
                    <input
                      type="text"
                      defaultValue={description}
                      className="edit_input"
                      id="edit_description"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="edit_front_td">이미지</td>
                  <td>
                    <input type="file" id="edit_image" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h4 className="room_info_txt">방 정보</h4>
                  </td>
                </tr>
                {roomInfo.map((b, i) => {
                  console.log("b.room_id: ", b.room_id);
                  return (
                    <tr>
                      <td>{b.type}</td>
                      <td>
                        1박 당 가격
                        <input
                          type="text"
                          defaultValue={b.price}
                          className="price_input"
                          id={"r" + i}
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* <button>
                추가
              </button> */}
              </table>
              <div className="modal_btn_section">
                <button
                  className="modal_close"
                  onClick={() => {
                    close_modal();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="modal_save"
                  onClick={() => {
                    // close_modal()
                  }}
                >
                  {" "}
                  Save{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default EditModal;
