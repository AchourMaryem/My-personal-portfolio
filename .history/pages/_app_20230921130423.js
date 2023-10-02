import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '@next/router';

import {useRouter} from '@next/router';
import {AnimatePresence} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp;
