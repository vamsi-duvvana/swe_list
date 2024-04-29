// import Body from "./components/Body";
// import Body1 from "./components/Body1";
import Footer from "./components/Footer";
import Header from "./components/Header";

// function App() {
//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <Header />
//       {/* <Body className=''/> */}
//       <Body1 className='flex-1' />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;