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

        <div >
        <label className="text-3xl font-semibold leading-8 pl-2 text-white">Contact Us</label>
            <div className="relative gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div>
                    <label className="text-lg font-semibold leading-8 pl-2 text-white">Name </label>
                    <input className="mt-2 text-base leading-7" type = "text" id = "name" required />
                </div>
                <div>
                    <label className="text-lg font-semibold leading-8 pl-2 text-white">Email </label>
                    <input className="mt-2 text-base leading-7" type = "text" id = "email" required />
                </div>
                <div>
                    <label className="text-lg font-semibold leading-8 text-white">Message </label>
                    <textarea className="mt-2 text-base leading-7" id = "message" required />
                </div>
            <button className="text-lg border-solid border-2 pl-14 pr-14 ml-10 mr-10 border-indigo-600 font-semibold leading-8 text-white" type = "submit" > { status } </button>
            </div>
            </div>

        </form >
    );
};

export default ContactForm;