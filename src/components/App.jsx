import React from "react";
const axios = require('axios');


const App = ()=> {

    const makeCall = ()=> {
        axios({
            method: 'post',
            url: 'https://vr-team-api-nodejs.herokuapp.com/makecall',
            // data: {
            //   firstName: 'Fred',
            //   lastName: 'Flintstone'
            // }
          }).then (function (response) {console.log(response)
             });
    }
  return (
    <div className="container">
    <img className="image" src="https://i.postimg.cc/VLj8s1fT/COi-White-Transparent-BG.png" alt="Carbon Origins Logo" width="90" height="90" ></img>
     
      <h1>Hello</h1>
      <br></br>
      <h3>Please fill in the form to make a restaurant call</h3>
      <form className="form">
        <input type="tel" id="phone" name="phone" placeholder="Restaurant phone number"
        required ></input>
        
        <input type="text" placeholder="Voice call message" required />
        <button type="submit"  onClick={makeCall()} >Make a call</button>
      </form>
    </div>
  );
}

export default App;
