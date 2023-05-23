import Head from 'next/head'
import Splash from '@/components/splash'
import AboutSection from '@/components/AboutSection'
import ContactCallToAction from '@/components/contact/contactCallToAction'
import Logo from "../public/Images/ToneElectricLogo.png"
import RecentWorksCallToAction from '@/components/recentWorks/recentWorksCallToAction'






export default function Home() {
  return (
    <>
      <Head>
        <title>Vertex Architects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main>
        <Splash></Splash>
        <AboutSection/>
        <RecentWorksCallToAction/>
        <ContactCallToAction/>
        
  

      </main>
    </>
  )
}
