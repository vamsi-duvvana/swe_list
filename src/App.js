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
import Main1 from "./components/Main1";
import Header1 from "./components/Header1";

function App() {
  return (
    // <div>
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-bright-turquoise-700 to-bright-turquoise-500">
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      <Header1 />
      <Main1  />
    </div>
  );
}

export default App;