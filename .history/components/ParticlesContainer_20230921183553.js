import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (ensigne)=>{
 await loadFull(ensigne);
  }
  )
  }

<div>Particles</div>
}
export default ParticlesContainer;
