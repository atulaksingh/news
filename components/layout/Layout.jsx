

import Head from "next/head";
import Footer from "../shared/Footer";
import Header from "../Shared/Header";

const Layout = ({
  hideHeader = false,
  hideFooter = false,
  children,
  title = "News",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!hideHeader && (
        <nav className="fixed top-0 left-0 right-0 z-30">
         <Header />
        </nav>
      )}
      <main>{children}</main>

      {!hideFooter && (
        <footer>
          <div className="bg-blue-800">

        <Footer />
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
