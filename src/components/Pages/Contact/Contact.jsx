import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    textMessage: "",
  });

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3dc6ee8e-ba06-49b7-8a6a-2fb8caf9e1a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({ name: "", phone: "", textMessage: "" });
      //   i think this is not working for me !
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div >
      <div className="contact width-space">
        <div className="contact-items">
          <h2>
            Sends me a message!
            
          </h2>
          <p>
            If you have any questions or feedback feel free to reach out.
          </p>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlfor="name">Your name:</label>
              <input
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={handleFormData}
                value={formData.name}
                 className={formData.name ? "filled-filed" : "empty-filed"}
              />
            </div>

            <div className="form-group">
              <label htmlfor="phone">Phone Number:</label>
              <input
                name="phone"
                id="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                onChange={handleFormData}
                className={formData.phone ? "filled-filed" : "empty-filed"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="textMessage">Enter your message here:</label>
              <textarea
                id="textMessage"
                name="textMessage"
                placeholder="Enter your message..."
                rows={10}
                value={formData.textMessage}
                onChange={handleFormData}
                className={formData.textMessage ? "filled-filed" : "empty-filed"}
              ></textarea>
              <div>
                <button className="btn dark-btn" type="submit">
                  Submit Now
                </button>
              </div>
              <span>{result}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  }

export default Contact