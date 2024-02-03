import React, {useEffect, useState} from "react";
import MessageElement from "@/components/ui/MessageElement";

interface message {
    User: string,
    Message: string
}
type Props = {
    messages: message[];
    loading: any;
};
export default function MessageElementMap({messages, loading}:Props) {
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
    const MessageListLoad = () => {
        return (
            <div className="messageblock">
                {
                    messages.map(userMessage => (
                        <MessageElement message={userMessage}/>
                    ))
                }
                <span className="loader"></span>
            </div>

        )
    }
    if (loading){
        if (messages) {
            return (<MessageListLoad/>)
        } else {
            return (
                <div className="messageblock">
                    <span className="loader"></span>
                </div>
            )
        }
    } else {
        if (messages) {
            return (<MessageList/>)
        } else {
            return (
                <div className="messageblock"/>
            )
        }
    }

}