import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import ContactConformation from "./ContactConformation";



const Contacts = () => {

  const [msgStatus, setMsgStatus] = useState("no-msg");
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;
  // console.log(serviceID, templateID, userID);

  const onSubmit = (data, r) => {

    sendEmail(serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset();
  }
  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setMsgStatus("success-message");
      }).catch(error => setMsgStatus("fail-message"));
  }
  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fillout the form and describe your project needs. I will
          contact you as soon as possible.
        </p>
        <ContactConformation status={msgStatus} />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-12">
              {/* name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", { required: "Please enter your name", maxLength: { value: 20, message: "enter name with max length 20" } })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* phone no */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  {...register("phone", { required: "Please enter your phone number" })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* email no */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", { required: "Please enter your Email", pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[A-Za-z]{2,}$/, message: "Please enter valid email id!" } })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* subject */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject", { required: "Please enter your message subject!" })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-12">
              {/* Description  */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe your project..."
                  {...register("description", { required: "please provide your project needs!" })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts
