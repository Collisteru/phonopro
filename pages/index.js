import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SoundButton from "@components/SoundButton";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <SoundButton text="This is a test" audioPath="/test.mp3" />
      </main>

      <Footer />
    </div>
  );
}
