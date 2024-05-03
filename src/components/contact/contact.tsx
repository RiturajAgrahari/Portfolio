import { useState } from "react"
import "./contact.css"

const Contact = () => {

    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [popupMessage, setPopupMessage] = useState("")
    const [showPopup, setShowPopup] = useState(false)

    const send_me_mail = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://myapi.rituraj-agrahari.com/api/portfolio_contact_me/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: subject,
                    email: email,
                    message: message
                })
            });
            if (!response.ok) {
                throw new Error("failed to send data!"); 
            } else {
                const responseData = await response.json();
                console.log(responseData)
                setPopupMessage(responseData.message)
                setShowPopup(true)
                setTimeout(function(){
                    setShowPopup(false)
                }, 5000);
            }
        } catch (error) {
            console.error("error sending data", error);
        }
    }

    return (
        <div id="Contact">
            <div className="project-header">
                <div className="section-heading">
                        <div><h1>Contact me</h1></div>
                        <div className="fl"></div>
                </div>
            </div>  
            <div className="contact">
                <form className="contact-form" onSubmit={send_me_mail}>
                    <label>Your Subject</label>
                    <input type="text" name="subject" placeholder="Subject" autoComplete="off" onChange={(event) => setSubject(event.target.value)} required/>
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" onChange={(event) => setEmail(event.target.value)} required/>
                    <label>Your Message</label>
                    <textarea name="message" className="textAria" cols={5} rows={8} placeholder="Message" onChange={(event) => setMessage(event.target.value)} required></textarea>
                    <button type="submit">SEND</button>
                </form>
                <div className="disco">
                    
                </div>
                <div className="contact-response" style={{transform: showPopup ? "translateX(0)": "translateX(100px)", visibility: showPopup ? "visible": "hidden", opacity: showPopup ? "1" : "0"}}>
                    {popupMessage}
                </div>
            </div>
        </div>
    )
}

export default Contact;