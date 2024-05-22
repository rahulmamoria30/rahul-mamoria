import style from "./contact.module.css";
import { useState } from "react";
const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      location: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send form data to backend
        await axios.post('/api/send-message', formData);
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      }
    };
  
    return (
      <main className={style.contact_page}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className={style.contact_form}>
          <div className={style.form_group}>
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={style.form_input}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={style.form_input}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={style.form_input}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">Where are you from:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={style.form_input}
              required
            />
          </div>
          <button type="submit" className={style.submit_button}>Submit</button>
        </form>
      </main>
    );
  };
  
  export default ContactPage;
  