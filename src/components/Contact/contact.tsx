import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import YButton from "../Elemets/YButton";
//import toast from "react-hot-toast";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(event.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const apiKeyId = import.meta.env.VITE_USR_ID;
    const data = {
      from_name: username,
      from_email: email,
      from_msg: message,
    };
    emailjs.send(serviceId, templateId, data, apiKeyId).then(
      () => {
        toast.success("Email sent successfully!", { duration: 3000 });
      },
      (error) => {
        console.log("FAILED...", error.text);
        toast.error("Email sending FAILED!", { duration: 3000 });
      }
    );
  };
  //
  return (
    <>
      <div className="grid justify-center items-center mb-5 sm:mx-auto mx-5">
        <div className="flex flex-col bg-neutral-50 p-6 w-full mt-10 md:w-80 border rounded-md border-orange-800">
          <form method="Post" onSubmit={onSubmit}>
            <input
              className="border-solid mb-4 w-full border rounded-md p-3 text-orange-800"
              placeholder="Your Name..."
              type="text"
              name="usrName"
              id="usrName"
              property="usrName"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleUsernameChange}
            />
            <input
              className="mx-auto border-solid mb-4 w-full border rounded-md text-orange-800 p-3"
              placeholder="Your Email..."
              type="email"
              name="email"
              id="email"
              required
              property="email"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleEmailChange}
            />
            <textarea
              className="border-solid mb-4 w-full border rounded-md p-3 h-32 resize-none text-orange-800"
              placeholder="Your Message..."
              name="msg"
              maxLength={120}
              id="msg"
              property="msg"
              autoComplete="off" // Set autocomplete to "off"
              onChange={handleMessageChange}
              required
            />
            <div className="text-center">
              <YButton>Send</YButton>
            </div>
          </form>
        </div>
      </div>
      <p>
        *OR SEND AN EMAIL TO:{" "}
        <span className="text-orange-900">
          <a href="mailto:yahyabaqer@proton.me">yahyabaqer@proton.me</a>
        </span>
      </p>
    </>
  );
}
