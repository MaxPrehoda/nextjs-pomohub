import React, { useState } from "react";


const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit = { handleSubmit } >

        <div className="relative w-[800px] h-[450px] bg-neutral-800 rounded-lg p">
        <label className="text-3xl font-semibold leading-8 pl-12 pb-1 mt-12 absolute text-white">Get in touch</label>
        <p className="absolute pt-12 w-[40%] ml-12 mt-12 font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaqu ratione.</p>
            <div className="bg-neutral-700 p-4 rounded-md w-[35%] h-[80%] right-0 absolute mt-10 mr-12">
                <div className="relative mt-4 gap-6 space-y-8 sm:flex-row md:flex-col lg:flex-row">
                    <div className="relative ml-9">
                        <label className="absolute top-0 text-md font-thin leading-8 text-white -mt-5">Name </label>
                        <input className="rounded-sm mt-2 text-base leading-7" type = "text" id = "name" required />
                    </div>
                    <div className="relative ml-9">
                        <label className="absolute top-0 text-md font-thin leading-8 text-white -mt-5">Email </label>
                        <input className="rounded-sm mt-2 text-base leading-7" type = "text" id = "email" required />
                    </div>
                    <div className="relative ml-9">
                        <label className="absolute top-0 text-md font-thin leading-8 text-white -mt-5">Message </label>
                        <textarea className="rounded-sm mt-2 text-base leading-7" id = "message" required />
                    </div>
                <button className="rounded-sm text-lg pl-14 pr-14 ml-9 mr-10 bg-pink-400 font-semibold leading-8 text-white" type = "submit" > { status } </button>
                </div>
                </div>
        </div>

        </form >
    );
};

export default ContactForm;