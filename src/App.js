import React from "react";

function App() {

let background = "White";
const hour = new Date().getHours();

if(hour >= 21 || hour < 7) {
  background = "Darkblue";
} 

const divStyle = {
  backgroundColor: background,
}

  return (
    <div style={divStyle}>
      <p>"Pozdrav!"</p>
    </div>
    
  )
}

export default App;
