// pages/_app.tsx
import '../styles/globals.css'; // This MUST be the very first line
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Make sure redux/store is set up
import Navbar from '../components/Navbar'; // Make sure Navbar component exists
import Footer from '../components/Footer'; // Make sure Footer component exists
// No Head component for fonts here, it's in _document.tsx

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;