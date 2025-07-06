import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FaGithub, FaLink, FaYoutube } from "react-icons/fa"
import projects from "./json/projects.json";
console.log(projects)
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <Card key={index} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          <h2 className="font-bold">{project.description}</h2>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600">
          {project.content}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>Check Project Links</p>
        <div className="flex gap-3">
          <a href={project.github} className="flex items-center gap-2">Github <FaGithub /></a>
          <a href={project.website} className="flex items-center gap-2">Website <FaLink /></a>
          <a href={project.video} className="flex items-center gap-2">Demo Video <FaYoutube /></a>
        </div>
      </CardFooter>
    </Card>
  ))}
</div>

  )
}
export default AllProjects
