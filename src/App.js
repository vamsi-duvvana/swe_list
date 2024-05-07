import React from 'react';
import Main1 from "./components/Main1";
import Header1 from "./components/Header1";

function App() {
  return (
    // <div>
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-bright-turquoise-700 to-bright-turquoise-500 overflow-y-hidden">
      <Header1 />
      <Main1  />
    </div>
  );
}

export default App;