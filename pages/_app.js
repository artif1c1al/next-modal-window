export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Roboto", sans-serif;
        }
        label,
        input[type="checkbox"] {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
