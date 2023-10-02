import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (ensigne)=>{
 await loadFull(ensigne);
 },[]);

const ParticlesLoaded = useCallback(asyn()=>{},[]);
return
<div>Particles</div>
}
export default ParticlesContainer;
