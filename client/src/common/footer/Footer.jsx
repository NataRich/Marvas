import { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import Search from "../search/SearchBar";
import Logo from "../asset/img/marvas.jpg";
import GitHub from "../asset/img/github.png";
import Facebook from "../asset/img/facebook.png";
import Instagram from "../asset/img/instagram.png";

import { categories, emails } from "../dummy/dummy"
import "./custom.css"

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false)

    const navigate = useNavigate();

    const handleSend = () => {
        setSending(true)

        setTimeout(() => {
            setSending(false);
        }, 2000)
    }

    return (
        <div className="w-full h-[600px] bg-primary-100 flex flex-col justify-center items-center font-sans">
            <div className="flex justify-start items-start mb-[30px]">
                <div className="flex flex-col justify-center items-center mr-[50px]">
                    <div className="w-[375px] h-[40px] mb-[50px]">
                        <Search />
                    </div>
                    <div className="w-[200px] h-[200px] rounded-full mb-[40px]">
                        <img className="w-full h-full object-cover rounded-full" src={Logo} alt="" />
                    </div>
                    <div className="flex space-x-[50px]">
                        <a 
                            className="w-[32px] h-[32px] rounded-full" 
                            href="https://github.com/NataRich/Marvas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="w-[32px] h-[32px] object-cover rounded-full" src={GitHub} alt="" />
                        </a>
                        <a 
                            className="w-[32px] h-[32px] rounded-full" 
                            href="https://www.facebook.com/profile.php?id=100073432252190"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="w-[32px] h-[32px] object-cover rounded-full" src={Facebook} alt="" />
                        </a>
                        <a 
                            className="w-[32px] h-[32px]" 
                            href="https://www.instagram.com/yifeng_1012/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="w-[32px] h-[32px] object-cover" src={Instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="h-full flex justify-center items-center mr-[50px]">
                    <div className="flex flex-col justify-center items-start">
                        <p 
                            className="text-xl text-neutral-800 mb-[20px] cursor-pointer"
                            onClick={() => {navigate("/marketplace")}}
                        >
                            Marketplace
                        </p>
                        {
                            categories.map((cat, key) => {
                                return (
                                    <p 
                                        className="text-lg text-neutral-600 mb-[20px] cursor-pointer hover:underline" 
                                        key={key}
                                        onClick={() => {navigate(`/marketplace?cats=${cat.toLowerCase()}`)}}
                                    >
                                        {cat}
                                    </p>
                            )})
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center mr-[50px]">
                    <div className="mb-[50px]">
                        <p 
                            className="text-xl text-neutral-800 mb-[20px] cursor-pointer"
                            onClick={() => {navigate("/list")}}
                        >
                            List
                        </p>
                        <p 
                            className="text-lg text-neutral-600 mb-[20px] cursor-pointer hover:underline" 
                            onClick={() => {navigate('/list')}}
                        >
                            Go to your list
                        </p>
                    </div>
                    <div>
                        <p className="text-xl text-neutral-800 mb-[20px]">Contact</p>
                        {
                            emails.map((e, key) => {
                                return (
                                    <p 
                                        className="text-lg text-neutral-600 mb-[20px]" 
                                        key={key}
                                    >
                                        {e}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-xl text-neutral-800 mb-[20px]">Leave us a message</p>
                    <div className="w-[350px] mb-[20px]">
                        <Input 
                            
                            placeholder="Preferred name"
                            size="large"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="w-[350px] mb-[20px]">
                        <Input 
                            placeholder="Email"
                            size="large"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="w-[350px] textarea-no-resize">
                        <Input.TextArea 
                            placeholder="Message"
                            size="large"
                            value={message}
                            maxLength={150}
                            rows={5}
                            showCount
                            allowClear
                            onChange={(e) => setMessage(e.currentTarget.value)}
                            style={{resize: "none"}}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Button 
                            className={sending ? "pointer-events-none" : ""}
                            size="large"
                            type="primary"
                            loading={sending}
                            onClick={handleSend}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg text-neutral-900 mb-[20px]">JAM Inc. | Marvas © 2020 - 2022. All rights reserved. </p>
                <p className="w-[500px] h-fit text-sm text-neutral-400  whitespace-normal mb-0">This site is published by JAM Inc., which is solely responsible for its contents. This website is intended for visitors from the U.S. This site contains links to websites to which our Privacy Policy does not apply. We encourage you to read the privacy policy of every website you visit.</p>
            </div>
        </div>
    )
}

export default Footer;