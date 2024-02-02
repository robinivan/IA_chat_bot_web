import React, { useState } from "react";

// Composant MessageElement qui affiche un message utilisateur ou du chatbot
export default function MessageElement({ message }) {
  // Vérifie si le message provient de l'utilisateur
  if (message?.User === "User") {
    return (
      // Affichage du message utilisateur avec une classe CSS spécifique
      <div className="user-message-2">
        {message?.Message}
      </div>
    );
  } else if (message?.User === "ChatBot") {
    return (
      // Affichage du message du chatbot avec une classe CSS spécifique
      <div className="bot-message-2">
        {message?.Message}
      </div>
    );
  }
}
