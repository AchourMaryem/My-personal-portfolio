import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Home = () => {
  return <div className='bg-primary/60 h-full'>
    {/* text*/}
   <div>
        {/* titre*/}
        <h1 className="h1">
          transformation <br/> Into {''}
          <span className="text-accent">Full Stack</span>
           </h1>
           <p className="">oussef ro7ik ya mimi</p>

   </div>
       {/* image*/}

   <div>image</div>

   </div>;
};

export default Home;
