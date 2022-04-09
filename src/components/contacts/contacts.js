import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import APIURL from '../../helpers/environment'


const ContactForm = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')
    const [state, handleSubmit] = useForm('mbjwyojo');

    const formSubmit = () => {
        fetch(`${APIURL}/contact/contact`, {
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
        console.log("Form Submitted");
    };

    function stateReset() {
        setFirstName('');
        setLastName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    
    return (
        <div className="contacts">
                <form onSubmit={handleSubmit}>
                    
                    <label htmlFor='firstname'>First Name:</label>
                    <input
                    autoFocus
                        id="firstname"
                        name="firstname"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <ValidationError
                        prefix="firstname"
                        field="firstname"
                        errors={state.errors}
                    />
                        <br/>
                    <label htmlFor='lastname'>Last Name:</label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)} />
                    <ValidationError
                        prefix="lastname"
                        field="lastname"
                        errors={state.errors}
                    />

                <br />
                    <label htmlFor='company'>Company:</label> 
                    <input 
                    id="company"
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} />
                    <ValidationError
                    prefix="company"
                    field="company"
                    errors={state.errors}
                    />
                <br />
                    <label htmlFor='email'>Your email:</label>
                    <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <ValidationError
                    prefix="email"
                    field="email"
                    errors={state.errors}
                    />
                <br />
                    <label htmlFor='phone'>Your Phone:</label>
                    <input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                    <ValidationError
                    prefix="phone"
                    field="phone"
                    errors={state.errors}
                    />

                <br />
                    <label htmlFor='message'> Your message:</label>
                    <textarea
                    id="message" 
                    name="message"
                    type="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                    <ValidationError
                    prefix="message"
                    field="message"
                    errors={state.errors}
                    />
                <br />
                    <h1><button type="submit" onClick={formSubmit} disabled={state.submitting}>Send</button></h1>
                </form>
            <h1><button onClick={stateReset}>Reset</button></h1>
        </div>
    )
}

export default ContactForm;