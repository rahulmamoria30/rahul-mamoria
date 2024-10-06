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
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      locationRef.current.value = "";
      messageRef.current.value = "";

    } catch (error) {
      setIsLoading(false);
      console.error("Error sending message:", error);
      setMessage("Failed, Please try again later.");
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
        {/* Left Section - Contact Intro */}
        <div className="w-full md:w-1/2 p-8 bg-blue-500 text-white rounded-l-lg">
          <Typography
            variant="h4"
            component="h1"
            className="text-2xl font-bold mb-4"
          >
            Let's Get in Touch
          </Typography>
          <p className="mb-6">
            I’d love to hear from you! Whether you have a question, a project proposal, or just want to say hello, feel free to send me a message.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-semibold">Email: </span>&nbsp;example@example.com
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Phone: </span>&nbsp;+1234567890
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Location: </span>&nbsp;City, Country
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Box>
              <TextField
                label="Name"
                variant="outlined"
                inputRef={nameRef}
                fullWidth
                required
                className="w-full"
                error={!!errors.name}
                helperText={errors.name}
              />
            </Box>
            <Box>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                inputRef={emailRef}
                fullWidth
                required
                className="w-full"
                error={!!errors.email}
                helperText={errors.email}
              />
            </Box>
            <Box>
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                inputRef={phoneRef}
                fullWidth
                required
                className="w-full"
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Box>
            {/* <Box>
              <TextField
                label="Where are you from"
                variant="outlined"
                inputRef={locationRef}
                fullWidth
                required
                className="w-full"
                error={!!errors.location}
                helperText={errors.location}
              />
            </Box> */}
            <Box>
              <TextField
                label="Message"
                variant="outlined"
                inputRef={messageRef}
                fullWidth
                required
                multiline
                rows={4}
                className="w-full"
                error={!!errors.message}
                helperText={errors.message}
              />
            </Box>
            <div className="flex justify-between items-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              >
                Send Message
              </Button>
              <Button
                type="reset"
                variant="outlined"
                color="secondary"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded"
              >
                Reset
              </Button>
            </div>
            {isLoading && (
              <div className="flex items-center justify-center">
                <span>Sending...</span>
                <CircularProgress size={20} className="ml-2" />
              </div>
            )}
            {message && !isLoading && (
              <Typography className="text-center text-green-600 mt-4">
                {message}
                <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
              </Typography>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
