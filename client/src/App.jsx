// src/App.jsx
import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      <h1>Hello, Vite + React!</h1>
    </div>
  );
}

export default App;
/*import { Navbar, Welcome, Footer,Services, Transactions } from './components';
import React from 'react';

const App = () => (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
  );   

export default App;
*/