import '../styles/globals.css';
import Layout from '../components/Layout';
import{} from
function MyApp({ Component, pageProps }) {
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp;
