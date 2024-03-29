import React, {useEffect, useState} from "react";
import {Modal, Input, Button, Space} from "antd";
import getdata from "./ChatbotData";
import MessageElement from "@/components/ui/MessageElement";
import MessageElementMap from "@/components/ui/MessageElementMap";
import axios from "axios";

type Props = {
    isOpen: boolean;
    setIsOpen:(value: boolean) => void
};
const ModalChatbot = ({isOpen, setIsOpen}: Props) => {
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
    const requestMessage = async (message: any) => {
        let url_base='https://ia-chat-bot-api.vercel.app'
        // console.log(url_base)
        let url = url_base + '/query-openai';
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
                let temp = userMessages
                temp.push({"User": "ChatBot", "Message": res.data.data})
                setUserMessages(temp)
                console.log(temp)
                localStorage.setItem("exchange", JSON.stringify(temp));
                setLoading(false)
            }
        ).catch(
            (error) => {
                console.log('error to post an travel');
                console.log(error)
                setLoading(false)

            }
        )
    }
    const [userMessages, setUserMessages] = useState<any>(getMessagesFromLocal);
    const [question, setQuestion] = useState<any>(null);
    const [state, setState] = useState<any>(false)
    const [loading, setLoading] = useState<any>(false);


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
            setLoading(true)
            let temp = userMessages
            temp.push({"User": "User", "Message": question})
            setUserMessages(temp)
            console.log(temp)
            localStorage.setItem("exchange", JSON.stringify(temp));
        }
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
                    <MessageElementMap messages={userMessages} loading={loading}/>
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

// Exportation du composant ModalChatbot en tant que composant par défaut
export default ModalChatbot;
