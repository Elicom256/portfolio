import { FaCss3, FaHardHat } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  SiChainlink,
  SiEthers,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiOpenzeppelin,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSolidity,
  SiTailwindcss,
} from 'react-icons/si';
import SectionHeader from './SectionHeader';

const Tools = () => {
  return (
    <section className='px-4 py-10 md:px-10 pt-24'>
      <SectionHeader
        accent='Skills'
        title='Technology stacks I use every day'
        subtitle='Clear, modern categories for Web2-first applications with secondary blockchain capabilities.'
      />

      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        <Card className='bg-slate-900/90 border-slate-800/90'>
          <CardHeader>
            <CardTitle className='text-2xl text-amber-300'>Frontend</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-3 text-slate-200'>
            <div className='flex items-center gap-2'>
              <SiJavascript className='text-amber-400' /> <span>JavaScript</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiReact className='text-sky-400' /> <span>React</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaCss3 className='text-sky-400' /> <span>CSS</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiTailwindcss className='text-cyan-400' /> <span>Tailwind CSS</span>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-slate-900/90 border-slate-800/90'>
          <CardHeader>
            <CardTitle className='text-2xl text-amber-300'>Backend</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-3 text-slate-200'>
            <div className='flex items-center gap-2'>
              <FaNodeJs className='text-green-500' /> <span>Node.js</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiExpress className='text-slate-200' /> <span>Express.js</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiPhp className='text-sky-500' /> <span>PHP</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiLaravel className='text-red-300' /> <span>Laravel</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiPostgresql className='text-sky-500' /> <span>PostgreSQL</span>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-slate-900/90 border-slate-800/90'>
          <CardHeader>
            <CardTitle className='text-2xl text-amber-300'>Web3 / Blockchain</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-3 text-slate-200'>
            <div className='flex items-center gap-2'>
              <SiSolidity className='text-blue-500' /> <span>Solidity</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiEthers className='text-indigo-400' /> <span>Ethers.js</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaHardHat className='text-amber-400' /> <span>Hardhat</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiChainlink className='text-sky-400' /> <span>Chainlink</span>
            </div>
            <div className='flex items-center gap-2'>
              <SiOpenzeppelin className='text-slate-200' /> <span>OpenZeppelin</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tools;
