import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <section className="flex flex-col justify-between min-h-screen font-boska px-4 md:px-8">
      <div className="flex flex-col items-center justify-center flex-grow">
        {" "}
        {/* Center the content and allow it to grow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-300 capitalize font-bold text-center">
          Rahul Mamoria
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl text-center">
          {" "}
          {/* Responsive text size */}
          Aspiring software engineer committed to creativity and growth.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-4 flex justify-center">
          <ScrollLink to="about" smooth={true} offset={-80} duration={500}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "8px 20px",
                backgroundColor: "#007bff", // Custom primary color
                "&:hover": {
                  backgroundColor: "#0056b3", // Darker shade on hover
                },
                borderRadius: "8px", // Rounded corners
                fontWeight: "bold", // Bold text
              }}
            >
              About Me
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} offset={-80} duration={500}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                padding: "8px 20px",
                borderColor: "#007bff", // Custom border color
                color: "#007bff", // Text color for outlined button
                "&:hover": {
                  backgroundColor: "#007bff", // Background color on hover
                  color: "#fff", // Text color on hover
                },
                borderRadius: "8px", // Rounded corners
                fontWeight: "bold", // Bold text
              }}
            >
              Hire Me
            </Button>
          </ScrollLink>
        </div>
      </div>

      {/* SVG Section at the Bottom */}
      <div className="flex flex-col items-center mb-8 md:mb-4">
        {" "}
        {/* Margin bottom to give some space from the edge */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-gray-300 -my-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-gray-300 -my-1"
          style={{ animationDelay: "0.2s" }} // Delay for second arrow
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-gray-300 -my-1"
          style={{ animationDelay: "0.4s" }} // Delay for third arrow
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
    </section>
  );
}
