import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className=''>
      <Head>
        <title>Instagram Clone</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Header />
      <Feed />
      {/* Modal */}
    </div>
  );
};

export default Home;
