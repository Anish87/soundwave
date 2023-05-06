import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/custom.scss';
import '@/styles/globals.css';
import '@/styles/bahnschrift.css';
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import localFont from 'next/font/local';
config.autoAddCss = false;

const Bahnschrift = localFont({
  src: [
    {path: '../styles/bahnschrift-webfont.woff2', weight: '100'}
  ]
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <style jsx global>
        {
          `:root{
            --font-bahn: ${Bahnschrift.style.fontFamily};
          }`
        }
      </style>
    <Component {...pageProps} />
    </>
  );
}
