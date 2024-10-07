import Image from "next/image";
import PROJECT_DATA from "@/data/project_data";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogActions,
  DialogContent
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import the GitHub icon
import ReactMarkdown from "react-markdown"; // Import react-markdown

// Dialog Component
const ProjectDialog = ({ project, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{project.project_name}</DialogTitle>
      <DialogContent>
        <ReactMarkdown>{project.project_detail}</ReactMarkdown>{" "}
        {/* Render project_detail as Markdown */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function ProjectCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCheckProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {PROJECT_DATA.map((project, index) => (
        <Card 
          key={index} 
          className="flex flex-col bg-transparent shadow-none border border-gray-300 pt-6 rounded-lg  " // Make card transparent
        >
          <Image
            src={project.image}
            height={800}
            width={800}
            alt={project.project_name}
            className="object-cover h-48 w-full"
          />
          <CardContent className="flex flex-col justify-between text-gray-300 font-boska">
            <Typography variant="h6" className="mb-2">
              {project.project_name}
            </Typography>
            <div className="border-b-2"></div>
            <div className="flex justify-between items-center mt-4 ">
              <IconButton
                // color="primary"
                className="text-gray-100"
                onClick={() => window.open(project.github_link, "_blank")}
              >
                <GitHubIcon className="text-gray-300" />
              </IconButton>
              <Button className="text-gray-300" onClick={() => handleCheckProjectClick(project)}>
                Description
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Dialog for project details */}
      {isDialogOpen && selectedProject && (
        <ProjectDialog project={selectedProject} onClose={closeDialog} />
      )}
    </div>
  );
}

export default ProjectCard;
