import Head from 'next/head'
import ContactComponent from '@/components/contact/ContactComponent'
import Styles from "../components/contact/contactPage.module.scss"
import Logo from "../public/Images/logo.png"
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main className={Styles.contactPage} >
        <ContactComponent/>
      </main>
    </>
  )
}
