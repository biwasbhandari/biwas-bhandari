import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

import project1 from "../../assets/projects/p1.png";
import project2 from "../../assets/projects/p2.png";
import project3 from "../../assets/projects/p3.png";
import project4 from "../../assets/projects/p4.png";
import project5 from "../../assets/projects/p5.png";
import project6 from "../../assets/projects/p6.png";
import project7 from "../../assets/projects/p7.png";
import project8 from "../../assets/projects/p8.png";
import project9 from "../../assets/projects/p9.png";
import { Link } from "react-router-dom";
import Animation from "../animation";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Unparalleld",

    demoLink: "https://unparalleld.vercel.app/",
    alertDescription:
      "An ecommerce website including admin panel and content management with sanity.io",

    techstack: [
      "React",
      "Next14",
      "Tailwind CSS",
      "Next-auth",
      "Typescript",
      "SanityCMS",
      "Framer Motion",
    ],
    src: project1,
  },
  {
    title: "Eventhubnp",

    demoLink: "https://eventhubnp.vercel.app/",
    alertDescription:
      "A place where users can organize or participate in a event",

    techstack: [
      "React",
      "Next14",
      "Tailwind CSS",
      "Clerk Auth",
      "Typescript",
      "Framer Motion",
    ],
    src: project9,
  },
  {
    title: "Nike landing page",
    demoLink: "https://nikexbiwas.vercel.app/",
    alertDescription:
      "A clean landing page for nike shoes with advance concept of tailwind",
    techstack: ["React", "Tailwind CSS", "Javascript"],
    src: project2,
  },
  {
    title: "Blog with Admin Panel",

    demoLink: "https://eduhacks.vercel.app/",
    alertDescription:
      "A blog site where people can post their blog, edit and delete post as well as add user",
    techstack: ["React", "Next14", "SSR", "MongoDB", "SEO", "Typescript"],
    src: project3,
  },
  {
    title: "BMI Calculator",

    demoLink: "https://biwas-bmicalc.vercel.app/",
    alertDescription: "Advance Calculator for your Body Mass Index Calculator",
    techstack: ["React", , "CSS", "Typescript"],
    src: project4,
  },
  {
    title: "Ordinal Scan",

    demoLink: "https://ordinalscan.netlify.app/",
    alertDescription:
      "A web3 app for calculating the profit and loss for your ordinals which is a bitcoin digital asset",
    techstack: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "Stacks.js",
      "Xverse Wallet",
    ],
    src: project5,
  },
  {
    title: "Mini wikki",

    demoLink: "https://mini-wikipedia.vercel.app/",
    alertDescription: "Mini wikipedia to search anything ",
    techstack: ["React", "Nextjs", "Typescript", "Wikipedia"],
    src: project6,
  },
  {
    title: "Todo",

    demoLink: "https://todo-biwas.vercel.app/",
    alertDescription:
      "Todo app with local storage. The ultimate project for CRUD Operation",
    techstack: ["React", "Tailwind CSS", "javascript"],
    src: project7,
  },
  {
    title: "Weather",

    demoLink: "https://weather-biwas.vercel.app/",
    alertDescription:
      "An exiciting weather app to determine wheather you should go on a date or not by finding the weather",
    techstack: ["React", "Tailwind CSS"],
    src: project8,
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { title, demoLink, alertDescription, src } = project;
  const revealClass = Animation(`card-${index}`);

  return (
    <Card
      className={`lg:max-w-md w-full hover:bg-primary-foreground shadow-sm  ${revealClass}`}
      id={`card-${index}`}
    >
      <CardHeader>
        <CardTitle>
          {" "}
          <Link to={demoLink} target="_blank">
            <img
              src={src}
              alt={`Card Image for ${title}`}
              className="w-full rounded-lg border-r border-b"
            />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h1>{title}</h1>
      </CardContent>
      <CardFooter className="gap-3">
        <Link to={demoLink} target="_blank">
          <Button variant="link">Live Demo</Button>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Details</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>
                {alertDescription} <br /> <br />
                <span className="pt-5">
                  <strong>Technologies:</strong>
                  <span className="flex flex-col gap-1">
                    {project.techstack.map((tech: any, techIndex: any) => (
                      <span key={techIndex} className="flex gap-2 items-center">
                        <ArrowRight height={15} />
                        {tech}
                      </span>
                    ))}
                  </span>
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Done</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

const ProjectsList = () => {
  return (
    <div className={`grid grid-cols-1 gap-4 lg:grid-cols-3`} id="cards">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsList;
