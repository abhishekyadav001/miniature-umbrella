// src/pages/_app.tsx
import "@/styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import type { AppProps } from "next/app";
import '../lib/fontawesome';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Add all icons to the library
library.add(fas, fab);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
