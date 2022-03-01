import React, {useState} from 'react';


const ContactForm = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const formSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/contact/contact", {
            method: "POST",
            body: JSON.stringify({
                contacts: {
                    firstname: firstname,
                    lastname: lastname,
                    company: company,
                    email: email,
                    phone: phone,
                    message: message
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json"

            }),
        });
    };

    return (
        <div>
            <section className="contact">
                    <h1>Contact Me</h1>
                    <center><p>Interested in reaching me? I can be reached using the links in the footer on specific social media or you may email me using this contact form. Please include how you wish to be contacted because, unless I know you are calling I will not answer.</p> </center>
                <form action="https://formspree.io/f/mbjwyojo" method="POST">
                        <label>First Name: <input type="text" 
                        value={firstname}onChange={(e) => setFirstName(e.target.value)}/> </label>
                    <label>Last Name: <input type="text"
                    value={lastname} 
                    onChange={(e)=>setLastName(e.target.value)}/></label>
                        <label>Company: <input type="text
                        "value={company} 
                        onChange={(e)=>setCompany(e.target.value)}/></label>
                        <label>
                            Your email:
                            <input type="email" name="_replyto"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label>Your Phone: <input type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                        </label>
                            <label>Call? <input type="checkbox"/></label>
                            <label>Text? <input type="checkbox"/></label>
                            <label>Email? <input type="checkbox"/></label>
                            <label>
                                Your message:
                                <textarea name="message"
                                type="textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                            </label>
                            <button type="submit" onClick={formSubmit}>Send</button>
                    </form>
                    </section>
        </div>
    )
}

export default ContactForm;