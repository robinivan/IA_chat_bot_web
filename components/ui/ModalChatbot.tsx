import React, {useEffect, useState} from "react";
import {Modal, Input, Button, Space} from "antd";
import getdata from "./ChatbotData";
import MessageElement from "@/components/ui/MessageElement";
import MessageElementMap from "@/components/ui/MessageElementMap";
import axios from "axios";

const ModalChatbot = ({isOpen, setIsOpen}) => {
    const getMessagesFromLocal = () => {
        if (typeof window !== 'undefined') {
            let temp = localStorage.getItem("exchange")
            console.log(temp)
            if (temp) {
                console.log(JSON.parse(temp))

                return JSON.parse(temp)

            } else {
                return []
            }
        } else {
            return []
        }

    }
    const requestMessage = async (message) => {
        let url = 'https://ia-chat-bot-api.vercel.app/post-message';
        let headers = {
            'Accept': 'application/json',
        }
        let data = {
            "user_input": message
        }
        console.log(data);
        const request = await axios.post(
            url,
            data,
            {headers: headers},
        ).then(
            res => {
                console.log('post message');
                console.log(res.data);
            }
        ).catch(
            (error) => {
                console.log('error to post an travel');
                console.log(error)
            }
        )
    }
    const [userMessages, setUserMessages] = useState(getMessagesFromLocal);
    const [question, setQuestion] = useState(null);
    const [state, setState] = useState(false)

    useEffect(() => {
        if (state) {
            setState(false)
            sendMessage();
            requestMessage(question)
            emptyInput()
        }
    }, [state])

    const emptyInput = () => {
        setQuestion(null)
    }
    const sendMessage = () => {
        if (question) {
            let temp = userMessages
            temp.push({"User": "User", "Message": question})
            setUserMessages(temp)
            console.log(temp)
            localStorage.setItem("exchange", JSON.stringify(temp));
        }
    };

    const handleInputChange = (e) => {
        setQuestion(e);
        console.log(e)
    };

    return (
        <>
            <Modal
                title="Art IA Chat"
                centered
                width={1000}
                style={{height: 500}}
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                footer={null}
            >
                {/*<div className="bot-message">Bienvenue ! Posez-moi vos questions.</div>*/}
                <div className="Modalwindowbody">
                    <MessageElementMap messages={userMessages}/>
                    <div className="inputblock">
                        <Space.Compact style={{width: "100%"}}>
                            <Input
                                onChange={(e) => {
                                    setQuestion(e.target.value)
                                }}
                                placeholder='Poser votre question'
                                className="inputstyles"
                                value={question}
                            />
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

export default ModalChatbot;
