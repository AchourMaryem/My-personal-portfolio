import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Home = () => {
  return <div className='bg-primary/60 h-full'>
      {/* text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
   <div className="text-center flex flex-col justify-center xl:pt-50 xl:text-left h-full container mx-auto ">

        {/* titre*/}
        <h1 className="h1"> 
        Hi, I'am {''}
        <br></br>  <span className="text-accent">Achour Mariem</span><br></br>
        FullStack Web Developer
           </h1>
           <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-xl' >I'am a final year software engineering student at Polytechnic School of Sousse, i am a motivated and ambitious person with a solid background in developement. I am able to work independently or as a team and manage multiple tasks simultaneously while meeting the deadlines.</p>
        
        
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <
          </div>
   </div>
       {/* image*/}
   <div>image</div>

   </div>;
};

export default Home;
