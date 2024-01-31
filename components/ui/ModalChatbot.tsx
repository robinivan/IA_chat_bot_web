import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ModalChatbot({ isOpen, setIsOpen }) {
  const handleOpenModal = () => {
    setIsOpen(!isOpen); // Inverser la valeur de isOpen lors du clic sur le bouton
  };
  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        width={1000}
        style={{ height: 500 }}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        <div className="Modalwindowbody"></div>
      </Modal>
    </>
  );
}
