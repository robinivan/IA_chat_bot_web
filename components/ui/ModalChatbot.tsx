import React, { useState } from "react";
import { Modal, Input, Button, Space } from "antd";
import getdata from "./ChatbotData";

const ModalChatbot = ({ isOpen, setIsOpen }) => {
  const [userMessages, setUserMessages] = useState([]);

  const sendMessage = (userQuestion) => {
    const chatbotResponse = getdata().find((item) =>
      userQuestion.toLowerCase().includes(item.Message.toLowerCase())
    );

    if (chatbotResponse) {
      const chatbotMessage =
        chatbotResponse.User + ": " + chatbotResponse.Message;
      console.log("Requête JSON:", chatbotResponse);
      console.log("Réponse du Chatbot:", chatbotMessage);
      setUserMessages([...userMessages, chatbotMessage]);
    } else {
      const chatbotMessage =
        "Je suis désolé, je ne peux pas vous aider avec cela.";
      setUserMessages([...userMessages, chatbotMessage]);
    }
  };

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      sendMessage(e.target.value);
      e.target.value = "";
    }
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
        <div className="bot-message">Bienvenue ! Posez-moi vos questions.</div>
        <div className="Modalwindowbody">
          <div className="messageblock">
            {userMessages.map((message, index) => (
              <div key={index} className="user-message">
                {message}
              </div>
            ))}
          </div>
          <div className="inputblock">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue="Posez votre question ici"
                className="inputstyles"
                onKeyPress={handleInputChange}
              />
              <Button
                type="primary"
                className="inputbutton"
                onClick={() => sendMessage("Posez votre question ici")}
              >
                Envoyer
              </Button>
            </Space.Compact>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalChatbot;
