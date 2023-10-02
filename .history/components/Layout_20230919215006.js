import {Sora} from '@next/font/google'
import Head from 'next/head'


const sora = Sora({
  subsets:['latin'],
  variable:'--fon'
})
const Layout = () => {
  return <div>Layout</div>;
};

export default Layout;
