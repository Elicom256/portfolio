import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";
import projects from "./json/projects.json";
console.log(projects);
const AllProjects = () => {
  // const projects = [
  //   {
  //     "title": "Decentralized Boda Dispatch",
  //     "description": "A decentralized boda service, owned by the user, no central controllers",
  //     "content": "This' a platform where boda riders and clients agree on a trip and fare, payment is done automatically after the trip is marked by the user as complete",
  //     "github": "https://github/Elijah-ug",
  //     "website": "https://project.com",
  //     "video": "https://project.com",
  //   }
  // ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">
      {projects.map((project, index) => (
        <Card key={index} className="w-full max-w-sm bg-gray-700 border-none text-gray-200">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>
              <h2 className=" text-gray-200">{project.description}</h2>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-green-400">{project.content}</div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-center">Check Project Links</p>
            <div className="flex gap-10">
              <a href={project.github} className="">
                <FaGithub />
              </a>
              <a href={project.website}>
                <FaLink className="text-blue-300" />
              </a>
              <a href={project.video || project.website}>
                <FaYoutube className="text-red-400" />
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default AllProjects;
