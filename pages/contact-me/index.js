import axios from 'axios';
import { useRef, useState } from "react";
import style from "./contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
const ContactPage = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const locationRef = useRef(null);
    const messageRef = useRef(null);
    
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic form validation
        if (!nameRef.current.value || !emailRef.current.value || !phoneRef.current.value || !locationRef.current.value || !messageRef.current.value) {
            setErrors({ message: 'Please fill out all fields.' });
            return;
        }

        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            location: locationRef.current.value,
            message: messageRef.current.value,
        };

        setIsLoading(true); 
        setErrors({}); 

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
        <>
        <main className={style.contact_page}>
            <h1 className={style.contact_heading}>Please send your warm messages and get in touch</h1>
            <form onSubmit={handleSubmit} className={style.contact_form}>
                <div className={style.form_group}>
                    <label htmlFor="name" className={style.form_label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameRef}
                        className={`${style.form_input} ${errors.name && style.input_error}`}
                        placeholder='Enter Your Name'
                        required
                    />
                    {errors.name && <p className={style.error_message}>{errors.name}</p>}
                </div>
                <div className={style.form_group}>
                    <label htmlFor="email" className={style.form_label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailRef}
                        className={`${style.form_input} ${errors.email && style.input_error}`}
                        placeholder='Enter Your Email'
                        required
                    />
                    {errors.email && <p className={style.error_message}>{errors.email}</p>}
                </div>
                <div className={style.form_group}>
                    <label htmlFor="phone" className={style.form_label}>Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        ref={phoneRef}
                        className={`${style.form_input} ${errors.phone && style.input_error}`}
                        placeholder='Enter Your Phone No.'
                        required
                    />
                    {errors.phone && <p className={style.error_message}>{errors.phone}</p>}
                </div>
                <div className={style.form_group}>
                    <label htmlFor="location" className={style.form_label}>Where are you from:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        ref={locationRef}
                        className={`${style.form_input} ${errors.location && style.input_error}`}
                        placeholder='Address'
                        required
                    />
                    {errors.location && <p className={style.error_message}>{errors.location}</p>}
                </div>
                <div className={style.form_group}>
                    <label htmlFor="message" className={style.form_label}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        className={`${style.form_input} ${errors.message && style.input_error}`}
                        placeholder='Type Your Message...'
                        required
                    />
                    {errors.message && <p className={style.error_message}>{errors.message}</p>}
                </div>
                <div className={style.buttons}>
                    <button type="submit" className={style.submit_button}>Send Message</button>
                    <button type="reset" className={style.reset_button}>Reset</button>
                    {isLoading && <p className={style.sent_message}>Sending your message...</p>}
                    {message && !isLoading && 
                        <p className={style.sent_message}>
                            {message} <FontAwesomeIcon icon={faCheckCircle} className={style.icon} />
                        </p>
                    }
                </div>
            </form>
        </main>

        </>
    );
};

export default ContactPage;
