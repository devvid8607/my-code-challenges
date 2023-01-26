// import logo from "./logo.svg";
//import './App.css';

import Review from "./Review";

function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}

export default App;
