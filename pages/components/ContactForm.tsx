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
        <p className="absolute pt-12 w-[40%] ml-12 mt-12 font-thin">
We value your feedback, so please don&apos;t hesitate to reach out to us with any questions, comments, or suggestions you might have about our app. We&apos;d love to hear from you!
If you need technical support, please include as much information about your system/enviroment as possible when submitting a ticket.
We look forward to hearing from you!</p>
        <div className="bg-transparent left-12 top-72 border-[1px] border-pink-300 rounded-md w-[17.5%] h[2%] text-zinc-50 absolute invisible hover:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 inline w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>NaN
</div>
        <div className="bg-transparent left-12 top-72 border-[1px] border-pink-300 p-3 rounded-md w-[17.5%] h[2%] text-zinc-50 absolute hover:invisible hover:-z-20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 inline w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>Live Chat
</div><div className="left-12 top-48 border-[1px] border-pink-300 bg-pink-400 bg-opacity-30 p-4 rounded-md w-[17.5%] h[2%] text-zinc-50 absolute hover:bg-opacity-40"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline mr-2 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
Email
</div><div className="bg-neutral-700 p-4 rounded-md w-[35%] h-[80%] right-0 absolute mt-10 mr-12">
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