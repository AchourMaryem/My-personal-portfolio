import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (ensigne)=>{
 await loadFull(ensigne);
 },[]);

const ParticlesLoaded = useCallback(asyn () => {},[]) ;

return (
<Particles
className='w-full h-full absolute translate-z-0'
id='tsparticles'
init={particlesInit} 
loaded={ParticlesLoaded}
options={{
  fullScreen: { enable: false },
  background: {
    color:{
      value:'',
    },
  },
  fpsLimit:120,
  interactivity:{
    events:{
      onClick:{
        enable:false,
        mode:'push',
      },
      onHover:{
        enable:true,
        mode:'repulse',
        },
        resize:true,
    },
    modes:{
      push:{
        quantity:90
      },
      repulse:{
        distance:200,
        duration:0.4,
      }
    }
  },
  particles:{
    color:{
      value:'#e68e2e',
    }
  }
}}
/>
);
};
export default ParticlesContainer;
