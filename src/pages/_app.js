import "./../styles/globals.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}
