function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Collections />
        <CollectionSignature />
        <Realisations />
        <CollectionSignature2 />
        <Showroom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
