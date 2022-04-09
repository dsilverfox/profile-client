import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import APIURL from '../../helpers/environment'
import {Link} from 'react-router-dom'

const HireMe = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [website, setWebsite] = useState('')
    const [message, setMessage] = useState('')
    const [state, handleSubmit] = useForm('mzbogkal');

    const formSubmit = () => {
        fetch(`${APIURL}/contract/contract`, {
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
        console.log("Form Submitted");
    };

   function stateReset(){
        setFirstName('');
        setLastName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setWebsite('');
        setMessage('');
    };

    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    
    return (
        <div className="hire">
            <div className='examples'>
                <h1><Link to="/Glass" style={{ textDecoration: 'none', color: '#fff' }}>Glass</Link></h1>
                <h1><Link to="/Parallax" style={{ textDecoration: 'none', color: '#fff' }}>Parallax</Link></h1>

            </div>
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
                <h1><button onClick={stateReset}>Reset</button></h1>
                <p><strong>All content on created sites remains the sole property of the site owner. All code remains sole property of Devon Silverfox-Patchett</strong></p>
           
        </div>
    )
    
}

export default HireMe;