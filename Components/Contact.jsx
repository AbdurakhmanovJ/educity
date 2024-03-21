import Message from '../images/msg-icon.png'
import Mail from '../images/mail.png'
import Maps from '../images/map.png'
import Phone from '../images/phone.png'
import Arrow from '../images/white-arrow.png'
import React from 'react'
function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd9eb174-029e-4d5d-a8bb-8a7c4b25bd71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='contact' >
            <div className="contact-col">
                <h3 className='contact-col-title'>Send us a message <img src={Message} alt="" className="contact__img" /></h3>
                <p className="contact-col-text">Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={Mail} alt="" className="contact-col-icon" />contact@gmail.com</li>
                    <li><img src={Phone} alt="" className="contact-col-icon" />+123123122</li>
                    <li><img src={Maps} alt="" className="contact-col-icon" />77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form className='contact__form' onSubmit={onSubmit}>
                    <label>Your name is </label>
                        <input type="text" name='name' placeholder='Enter your name'required/>
                        <label>Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter your mobile number'required/>
                        <label>Your Email</label>
                        <input type="mail" name='mail' placeholder='Enter your email id'required/>
                        <label>Write your messages here</label>
                        <textarea className='textarea' name="message" id="" cols="30" rows="6" placeholder='Enter your message' required></textarea>
                        <button className="btn dark-btn" type='submit'>Submit now <img className='cospus-img' src={Arrow} alt="" /></button>
                </form>
                <span className="send">{result}</span>
            </div>
        </div>
    )
}

export default Contact