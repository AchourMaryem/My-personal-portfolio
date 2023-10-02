import {motion} from 'framer-motion'
const transitionVariants={
  initial:{
    x:'100%',
    width:'100%'
  },
  animate:{
    x:'0%',
    width:'0%'
  },
  exit:{
    x:['0%','100%'],
    width:['0%','100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e225] variants={'>1</motion.div>
      <motion.div>2</motion.div>
      <motion.div>3</motion.div>



    </>
  );
};

export default Transition;
