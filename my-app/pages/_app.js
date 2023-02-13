import '@/styles/globals.css'
import Nav from "../components/nav/index"

export default function App({ Component, pageProps }) {
  return (

    <>
    <Nav></Nav>
    <Component {...pageProps} />
    </>
    
  ) 
}
