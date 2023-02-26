import NavBar from "./NavBar";
import Footer from "./Footer"
import Head from "next/head";

export default function Layout({ children }: any) {

  return (
    <>
      <Head>
        <title>KardBank Cadastro</title>
      </Head>
      <NavBar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </>
  )
}