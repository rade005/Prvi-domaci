import React from "react";

function App() {

let background = "White";
const hour = new Date().getHours();

if(hour >= 21 || hour < 7) {
  background = "Darkblue";
} 

  return (
    <div style={{backgroundColor: background}}>
      <p>"Pozdrav!"</p>
    </div>
    
  )
}

export default App;
