import React, { useState } from "react";

export default function MessageElement({message}){
    if (message?.User==="User"){
        return (
            <div className="user-message-2">
                {message?.Message}
            </div>
        )
    } else if (message?.User==="ChatBot"){
        return (
            <div className="bot-message-2">
                {message?.Message}
            </div>
        )
    }
}