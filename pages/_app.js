import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Disable hydration
Application.autoHydrate = false;

export default Application;
