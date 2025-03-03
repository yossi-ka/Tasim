import React from "react";
import Routing from "./Routing";
import UIRTL from "./services/UIRTL";
function App() {
  return (
    <div style={{ textAlign: "center" }} className="App">
       {/* <UIRTL> */}
        <Routing />
       {/* </UIRTL>  */}
     </div>
  );
}

export default App;
