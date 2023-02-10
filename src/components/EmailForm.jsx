import emailjs from "@emailjs/browser";
import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context";

const EmailForm = () => {
  const form = useRef();
  const example = useRef(null);
  const theme = useContext(ThemeContext);
  const textColor = theme === "light" ? "#f8f8f8" : "#212121";
  const submitButtonColor = theme === "light" ? "#212121" : "#f8f8f8";
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current[0].value !== "" && form.current[1].value !== "" && form.current[2].value !== "") {
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_KEY).then(
        (result) => {
          if (result.status === 200) {
            setShow(true);
            setSuccess(true);
            setTimeout(() => {
              setShow(false);
            }, 5000);
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          } else {
          }
        },
        (error) => {
          setShow(true);
          setSuccess(false);
          setTimeout(() => {
            setShow(false);
          }, 5000);
        }
      );
    }
  };

  return (
    <div className="">
      <form
        className=" flex flex-col justify-center items-center"
        ref={form}
        onSubmit={sendEmail}>
        {/* <!-- name --> */}
        <div class=" border-b-2 my-5 w-80 h-10 pl-2 flex justify-between">
          <input
            type="name"
            className="p-2 mb-2 w-80"
            name="name"
            id="name"
            placeholder="Name"
            style={{ backgroundColor: textColor }}
          />
        </div>

        {/* <!-- email --> */}
        <div class=" border-b-2 my-5 w-80 h-10 pl-2 flex justify-between">
          <input
            type="email"
            className="p-2 mb-2 w-80"
            name="email"
            id="email"
            placeholder="Email"
            style={{ backgroundColor: textColor }}
          />
        </div>

        {/* <!-- subject --> */}
        <div class=" border-b-2 my-5 w-80 h-10 pl-2 flex justify-between">
          <input
            type="text"
            className="p-2 mb-2 w-80"
            name="subject"
            id="subject"
            placeholder="Subject"
            style={{ backgroundColor: textColor }}
          />
        </div>

        <div class=" border-b-2 my-5 w-80  pl-2 flex justify-between">
          <textarea
            id="email_body"
            className="p-2 mb-2 w-80 h-32 "
            rows="5"
            name="message"
            placeholder="Description"
            style={{ backgroundColor: textColor }}
          />
        </div>
        <input
          type="text"
          ref={example}
        />

        <button
          className="cursor-pointer text-xs lg:text-lg py-1 lg:py-2 px-3 lg:px-6 rounded-lg w-[100%]"
          style={{ color: submitButtonColor, border: `1px solid ${submitButtonColor}` }}>
          Submit
        </button>
      </form>

      {show && success && <p className="text-center py-2">Thankyou for connecting</p>}
      {show && !success && <p className="text-center py-2">Something Went wrong</p>}
    </div>
  );
};

export default EmailForm;
