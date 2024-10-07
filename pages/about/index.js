import { Mail, MapPin } from 'lucide-react';
import { LinkedIn, Instagram, Facebook, Twitter, GitHub } from '@mui/icons-material';

export default function AboutPage() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden px-4 md:px-6 md:py-10 font-boska">
      <h1 className='text-gray-100 text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16'>About me</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
        
        {/* Profile Image */}
        <div className="md:w-2/5">
          <div className="h-full w-full rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-auto"
              src="/images/Profileipic.jpeg"
              alt="Rahul Mamoria"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-3/5 px-2 md:px-8 flex flex-col justify-between">
          <div>
            {/* Name and Role */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-8 font-bold tracking-tight text-gray-200">
              Rahul Mamoria
            </h1>
            <p className="mt-2 text-lg md:text-xl text-blue-500">Software Engineer</p>
            
            {/* Location */}
            <div className="mt-2 flex items-center text-gray-300">
              <MapPin className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-base md:text-lg">Hyderabad, India</span>
            </div>

            {/* Bio */}
            <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
              Hello! I'm a passionate Software Engineer based in India. With a strong foundation in web development, I specialize in building dynamic applications using Next.js and TypeScript. I also have experience working with Node.js and Express.js for backend development, along with Java and Spring Boot for enterprise-level applications. I am committed to creating efficient, user-friendly software solutions and continuously improving my skills in the ever-evolving tech landscape.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
              I work at Grid Dynamics, where I contribute to real-world projects, leveraging my skills to create impactful solutions and drive innovation.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <a href="mailto:rahulmamoria@gmail.com" className="text-blue-500 hover:text-blue-600">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/rahulmm07" className="text-blue-500 hover:text-blue-600">
                <LinkedIn className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/rahul_rm__/" className="text-blue-500 hover:text-blue-600">
                <Instagram className="h-6 w-6" />
              </a>
              
              <a href="https://github.com/rahulmamoria30" className="text-blue-500 hover:text-blue-600">
                <GitHub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
