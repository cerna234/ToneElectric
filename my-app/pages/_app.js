import '@/styles/globals.css'
import Nav from "../components/nav/index"
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (

    <>
    <Nav></Nav>
    <Component {...pageProps} />
    <Footer/>
    </>
    
  ) 
}
