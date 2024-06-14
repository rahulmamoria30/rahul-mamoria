import axios from "axios";
import { useRef, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import style from "./contact.module.css";
import { Padding } from "@mui/icons-material";

const ContactPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const locationRef = useRef(null);
  const messageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !locationRef.current.value ||
      !messageRef.current.value
    ) {
      setErrors({ message: "Please fill out all fields." });
      return;
    }

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      location: locationRef.current.value,
      message: messageRef.current.value
    };

    setIsLoading(true);
    setErrors({});

    try {
      await axios.post("/api/send-message", formData);
      setIsLoading(false);
      setMessage("Message sent successfully!");
      nameRef.current.value="";
      emailRef.current.value="";
      phoneRef.current.value="";
      locationRef.current.value="";
      messageRef.current.value=""

    } catch (error) {
      setIsLoading(false);
      console.error("Error sending message:", error);
      setMessage("Failed, Please try again later.");
    }
  };

  return (
    <section className={style.contact_section}>
      <main className={style.contact_page}>
        <Typography
          variant="h4"
          component="h1"
          className={style.contact_heading}
        >
         Contact Me
        </Typography>
        <form onSubmit={handleSubmit} className={style.contact_form}>
          <Box className={style.form_group}>
            <TextField
              label="Name"
              variant="outlined"
              inputRef={nameRef}
              fullWidth
              required
              className={style.form_input}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>
          <Box className={style.form_group}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              inputRef={emailRef}
              fullWidth
              required
              className={style.form_input}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box className={style.form_group}>
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              inputRef={phoneRef}
              fullWidth
              required
              className={style.form_input}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Box>
          <Box className={style.form_group}>
            <TextField
              label="Where are you from"
              variant="outlined"
              inputRef={locationRef}
              fullWidth
              required
              className={style.form_input}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Box>
          <Box className={style.form_group}>
            <TextField
              label="Message"
              variant="outlined"
              inputRef={messageRef}
              fullWidth
              required
              multiline
              rows={4}
              className={style.form_input}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Box>
          <div className={style.buttons}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={style.submit_button}
            >
              Send Message
            </Button>
            <Button
              type="reset"
              variant="outlined"
              color="secondary"
              className={style.reset_button}
            >
              Reset
            </Button>
            <div>
              {isLoading && (
                <p className={style.sending}>
                  {" "}
                  <span>Sending...</span>
                  <CircularProgress
                    className={style.loading_spinner}
                    size={20}
                  />
                </p>
              )}
              {message && !isLoading && (
                <Typography className={style.sent_message}>
                  {message}{" "}
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={style.icon}
                  />
                </Typography>
              )}
            </div>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ContactPage;
