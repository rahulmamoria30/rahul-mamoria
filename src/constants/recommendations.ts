import { MessageSquareQuote } from "lucide-react"

export interface Recommendation {
  name: string
  role: string
  company: string
  relationship: string
  date: string
  text: string
  linkedinUrl?: string
  avatar?: string
}

export const sectionConfig = {
  id: "recommendations",
  title: {
    icon: MessageSquareQuote,
    text: "Recommendations",
  },
  linkedinUrl: "https://www.linkedin.com/in/rahulmm07/details/recommendations/",
}

export const recommendations: Recommendation[] = [
  {
    name: "Nandhini Boddu",
    role: "Data Scientist | GenAI & LLM Engineer",
    company: "Grid Dynamics",
    relationship: "Worked with Rahul on the same team",
    date: "February 11, 2025",
    text: "I had the pleasure of working with Rahul Mamoria at Grid Dynamics, where he played a crucial role as a Frontend Engineer on our project. His technical expertise, attention to detail, and problem-solving skills made a significant impact on the team's success. Rahul is highly proficient in modern frontend technologies and consistently delivered high-quality, scalable, and maintainable code. His ability to translate complex requirements into seamless user experiences was truly commendable. I highly recommend Rahul to anyone looking for a skilled and dedicated frontend engineer!",
    linkedinUrl:
      "https://www.linkedin.com/in/rahulmm07/details/recommendations/",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGGDxo_L38N5Q/profile-displayphoto-scale_100_100/B56ZhKmN0VHcAc-/0/1753598189569?e=1781740800&v=beta&t=Z_Cz3EkWE6h64nJ9LD9eiKdT2htSnokCasjhq0ZMVNw",
  },
]
