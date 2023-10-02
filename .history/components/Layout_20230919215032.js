import {Sora} from '@next/font/google'
import Head from 'next/head'


const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300']
})
const Layout = () => {
  return <div>Layout</div>;
};

export default Layout;
