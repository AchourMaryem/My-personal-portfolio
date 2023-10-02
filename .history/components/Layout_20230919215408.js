import {Sora} from '@next/font/google'


const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800'],
});
import Nav from '../components/Nav'
import Header from '../components/Header'
import Top from '../components/Nav'

const Layout = ({children}) => {
  return <div>
    <Nav />
    <Header />
  </div>;
};

export default Layout;
