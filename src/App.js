import { useEffect, useState } from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  const [movies, setMovies] = useState();

  return (
    <div className="App">
      <Header />
      <Main className="main" />
      <Footer />
    </div>
  );
}

export default App;
