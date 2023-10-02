import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (ensigne)=>{
 await loadFull(ensigne);
 },[]);

const ParticlesLoaded = useCallback(asyn () => {},[]) ;

return <Particles id='tsparticles' init={particlesInit} loaded={ParticlesLoaded}
options={{
  fullScreen: { enable: false }
  background: {
    color:{
      value:'',
    },
  },
  fpsLimit:120,
  interactivity:{
    events:{
      onClick:{
        enable
      }

    }
  }
}}
/>
};
export default ParticlesContainer;
