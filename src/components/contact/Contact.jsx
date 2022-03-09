import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdEmail } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { FaHouseUser } from 'react-icons/fa';



const Contact = () => {
  const formRef = useRef();
  const [done, setdone] = useState(false)

  const handle = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_3mz2mq6",
        "template_b6q1gpo",
        formRef.current,
        "CwlGI9qMrJ7-S3NO9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrap">
          <div className="c-left">
            <h1 className="c-title">lets discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                
               <i><ImPhone className='icon'/></i>  7780925035
              </div>
              <div className="c-info-item">
               
                <MdEmail className='icon'/> darjamsheed52@gmail.com
              </div>
              <div className="c-info-item">
               
                 <FaHouseUser className='icon'/>Baramulla Jammu and Kashmir
              </div>
            </div>
          </div>
          <div className="c-right">
            <div className="c-desc">
              <p>
                <b>what's your story</b> get in touch, by just one email
              </p></div>
              <div>

              <form ref={formRef} onSubmit={handle}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && 'Thank you...'}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
