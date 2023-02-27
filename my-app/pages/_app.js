import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Nav from "../components/nav/index"
import Footer from '@/components/Footer'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  
  return (

    <>
    <Nav></Nav>
    <Component {...pageProps} />
    <Footer/>
    </>
    
  ) 
}
