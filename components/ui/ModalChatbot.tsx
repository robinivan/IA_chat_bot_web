import React, { useEffect, useState } from "react";
import { Modal, Input, Button, Space } from "antd";
import getdata from "./ChatbotData";
import MessageElement from "@/components/ui/MessageElement";
import MessageElementMap from "@/components/ui/MessageElementMap";

// Déclaration du composant ModalChatbot en tant que fonction composant React
const ModalChatbot = ({ isOpen, setIsOpen }) => {

  // Fonction pour récupérer les messages locaux depuis le localStorage
  const getMessagesFromLocal = () => {
    let temp = localStorage.getItem("exchange");
    console.log(temp);
    if (temp) {
      console.log(JSON.parse(temp));
      return JSON.parse(temp);
    } else {
      return [];
    }
  };

  // Utilisation de useState pour gérer l'état des messages de l'utilisateur, la question, et l'état de l'envoi
  const [userMessages, setUserMessages] = useState(getMessagesFromLocal);
  const [question, setQuestion] = useState(null);
  const [state, setState] = useState(false);

  // Effet useEffect pour gérer l'envoi de message et la réinitialisation de l'entrée utilisateur
  useEffect(() => {
    if (state) {
      setState(false);
      sendMessage();
      emptyInput();
    }
  }, [state]);

  // Fonction pour réinitialiser l'entrée utilisateur
  const emptyInput = () => {
    setQuestion(null);
  };

  // Fonction pour envoyer un message de l'utilisateur
  const sendMessage = () => {
    if (question) {
      let temp = userMessages.slice(); // Utiliser slice pour créer une copie du tableau
      temp.push({ "User": "User", "Message": question });
      setUserMessages(temp);
      console.log(temp);
      localStorage.setItem("exchange", JSON.stringify(temp));
    }
  };

  // Gestion du changement dans l'entrée utilisateur
  const handleInputChange = (e) => {
    setQuestion(e.target.value);
    console.log(e);
  };

  // Rendu du composant Modal d'Ant Design
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
        {/* Bienvenue ! Posez-moi vos questions. (commenté pour le moment) */}
        <div className="Modalwindowbody">
          {/* Composant MessageElementMap pour afficher l'historique des messages */}
          <MessageElementMap messages={userMessages} />
          {/* Bloc d'entrée utilisateur */}
          <div className="inputblock">
            <Space.Compact style={{ width: "100%" }}>
              {/* Input pour l'entrée utilisateur avec gestion du changement et valeur contrôlée */}
              <Input
                onChange={(e) => { setQuestion(e.target.value) }}
                placeholder='Poser votre question'
                className="inputstyles"
                value={question}
              />
              {/* Bouton d'envoi avec gestion de l'état pour déclencher l'envoi */}
              <Button
                type="primary"
                className="inputbutton"
                onClick={() => setState(true)}
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

// Exportation du composant ModalChatbot en tant que composant par défaut
export default ModalChatbot;
