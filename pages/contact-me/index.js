import axios from 'axios';
import { useRef, useState } from "react";
import style from "./contact.module.css";

const ContactPage = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const locationRef = useRef(null);
    const messageRef = useRef(null);
    
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            location: locationRef.current.value,
            message: messageRef.current.value,
        };

        setIsLoading(true); 

        try {
            await axios.post('/api/send-message', formData);
            setIsLoading(false); 
            setMessage('Message sent successfully!');
        } catch (error) {
            setIsLoading(false); 
            console.error('Error sending message:', error);
            setMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <main className={style.contact_page}>
        <h1>Please send your warm messages and get in touch</h1>
            {/* <h1>Contact Us</h1> */}
            <form onSubmit={handleSubmit} className={style.contact_form}>
                <div className={style.form_group}>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameRef}
                        className={style.form_input}
                        required
                    />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailRef}
                        className={style.form_input}
                        required
                    />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        ref={phoneRef}
                        className={style.form_input}
                        required
                    />
                </div>
                {/* <div className={style.form_group}>
                    <label htmlFor="location" className="form-label">Where are you from:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        ref={locationRef}
                        className={style.form_input}
                        required
                    />
                </div> */}
                <div className={style.form_group}>
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        className={style.form_input}
                        required
                    />
                </div>
                <div className={style.buttons}>
                <button type="submit" className={style.submit_button}>Send Message</button>
                {/* <button type="submit" className={style.submit_button}>Send Message</button> */}

                </div>
                {isLoading && <p>Sending your message...</p>}
                {message && !isLoading && <p>{message}</p>}
            </form>
        </main>
    );
};

export default ContactPage;
