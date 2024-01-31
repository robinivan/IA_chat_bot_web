import React, { useState } from "react";
import { Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";

export default function ModalChatbot({ isOpen, setIsOpen }) {
  const handleOpenModal = () => {
    setIsOpen(!isOpen); // Inverser la valeur de isOpen lors du clic sur le bouton
  };
  return (
    <>
      <Modal
        title="Art IA Chat"
        centered
        width={1000}
        style={{ height: 500 }}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        <div className="Modalwindowbody">
          <div className="messageblock"></div>
          <div className="inputblock">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue="Combine input and button"
                className="inputstyles"
              />
              <Button type="primary" className="inputbutton">
                Submit
              </Button>
            </Space.Compact>
          </div>
        </div>
      </Modal>
    </>
  );
}
