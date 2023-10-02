import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import {AnimatePresence, motion} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <AnimatePresence mode='wait'>
      <div>
        <Transition>

        </Transition>
      </div>
  
</AnimatePresence>
  </Layout>
  );
}

export default MyApp;
