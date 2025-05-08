export default function Head() {
  return (
    <>
      <title>Kisshu Landing Page</title>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-N4KVNMNZBW"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4KVNMNZBW');
          `,
        }}
      />
    </>
  );
} 