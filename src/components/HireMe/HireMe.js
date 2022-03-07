import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


const HireMe = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [website, setWebsite] = useState('')
    const [message, setMessage] = useState('')
    const [state, handleSubmit] = useForm('mzbogkal');

    // eslint-disable-next-line no-unused-vars
    function ContactForm() {
        if (state.succeeded) {
            return <div>Thank you for signing up!</div>;
        }
    }

    const formSubmit = () => {
        fetch("http://localhost:3000/contract/contract", {
            method: "POST",
            body: JSON.stringify({
                contracts: {
                    firstname: firstname,
                    lastname: lastname,
                    company: company,
                    email: email,
                    phone: phone,
                    website: website,
                    message: message
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json"

            }),
        });
    };
    return (
        <div className="hire">
            <div className='ResponsiveTable'>
                <table className='darkTable'>
                    <tbody>
                        <tr>
                            <td>Pages</td>
                            <td>HTML</td>
                            <td>CSS</td>
                            <td>JavaScript</td>
                            <td>Database*</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>$50</td>
                            <td>$75</td>
                            <td>$100</td>
                            <td>$175</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>$75</td>
                            <td>$100</td>
                            <td>$125</td>
                            <td>$200</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>$100</td>
                            <td>$125</td>
                            <td>$150</td>
                            <td>$225</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>$125</td>
                            <td>$150</td>
                            <td>$175</td>
                            <td>$250</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>* Database tables include the cost to host the database and provide a custom domain name. $50/month will also be required for database and domain maintenance.</strong></p>
            </div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='firstname'>First Name:</label>
                <input
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
                <br />
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
                <label htmlFor='website'> Site Needs:</label>
                <textarea
                    id="website"
                    name="website"
                    type="textarea"
                    value={website}
                    placeholder="Tell me what it is you need from your site."
                    onChange={(e) => setWebsite(e.target.value)} />
                <ValidationError
                    prefix="website"
                    field="website"
                    errors={state.errors}
                />
                <br />
                <label htmlFor='message'> Your message:</label>
                <textarea
                    id="message"
                    name="message"
                    type="textarea"
                    value={message}
                    placeholder="Any additional notes."
                    onChange={(e) => setMessage(e.target.value)} />
                <ValidationError
                    prefix="message"
                    field="message"
                    errors={state.errors}
                />
                <br />
                <h1><button type="submit" onClick={formSubmit} disabled={state.submitting}>Send</button></h1>
            </form>
        </div>
    )
    
}

export default HireMe;