import React from "react";

import Class1 from './Component/Class1';
import FirstClass from "./class-com/Class1";
import Navgation from "./Component/Navgation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class2 from "./Component/Class2";
import Class3 from "./Component/Class3";
import Class4 from "./Component/Class4";

function App(){
  return(
   <>
   <BrowserRouter>
     <Navgation />
     <Routes>
        <Route path="/" element={ <Class1 /> } />
        <Route path="/class2" element={ <Class2 /> } />
        <Route path="/class3" element={ <Class3 /> } />
        <Route path="/class4" element={ <Class4 /> } />
     </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App;