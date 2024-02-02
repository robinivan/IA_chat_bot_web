import React, {useEffect, useState} from "react";
import MessageElement from "@/components/ui/MessageElement";

type Props = {
    messages: object;
};
export default function MessageElementMap({messages}:Props) {
    const MessageList = () => {
        return (
            <div className="messageblock">
                {
                    messages.map(userMessage => (
                        <MessageElement message={userMessage}/>
                    ))
                }
            </div>

        )
    }
    if (messages) {
        return (<MessageList/>)
    } else {
        return (
            <div className="messageblock"/>
        )
    }
}