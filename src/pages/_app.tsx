// MyApp.tsx
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import  store  from './store'; // Import your Redux store
import '../styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
