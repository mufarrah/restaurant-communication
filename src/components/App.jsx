import React from "react";

function App() {
  return (
    <div className="container">
    <img class="image" src="https://i.postimg.cc/VLj8s1fT/COi-White-Transparent-BG.png" alt="Carbon Origins Logo" width="90" height="90" ></img>
     
      <h1>Hello</h1>
      <br></br>
      <h3>Please fill in the form to make a restaurant call</h3>
      <form className="form">
        <input type="tel" id="phone" name="phone" placeholder="Restaurant phone number"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required></input>
        
        <input type="text" placeholder="Voice call message" required />
        <button type="submit">Make a call</button>
      </form>
    </div>
  );
}

export default App;
