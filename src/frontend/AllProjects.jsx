import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';
import projects from './json/projects.json';

const AllProjects = () => {
  return (
    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project, index) => (
        <Card key={index} className='border-slate-800/90 bg-slate-900/90 text-slate-100 shadow-xl shadow-slate-950/20'>
          <CardHeader>
            <CardTitle className='text-xl text-amber-300'>{project.title}</CardTitle>
            <CardDescription>
              <p className='text-slate-300'>{project.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='text-sm leading-6 text-slate-300'>{project.content}</p>
          </CardContent>
          <CardFooter className='flex flex-col items-center gap-3 px-6 pb-6 pt-2 text-slate-400'>
            <p className='text-sm text-slate-400'>Explore project links</p>
            <div className='flex items-center gap-5'>
              <a href={project.github} target='_blank' rel='noreferrer' className='transition hover:text-amber-300'>
                <FaGithub className='h-5 w-5' />
              </a>
              <a href={project.website} target='_blank' rel='noreferrer' className='transition hover:text-sky-300'>
                <FaLink className='h-5 w-5' />
              </a>
              <a
                href={project.video || project.website}
                target='_blank'
                rel='noreferrer'
                className='transition hover:text-rose-400'
              >
                <FaYoutube className='h-5 w-5' />
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProjects;
