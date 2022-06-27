import { DefaultLayout } from "../components/DefaultLayout/defaultlayout";
import Provider from "../Context/Provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;
