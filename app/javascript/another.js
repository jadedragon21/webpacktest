function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> Monday's lunch is curry.</h1>");
    header.innerHTML = hello;
  }
  function bodyText(){
      let body= document.querySelector("#greeting2");
      let body1 = ('<p>Lost in the Zone</p>');
      body.innerHTML = body1;
  }
 
  module.exports = sayHello();
  module.exports = bodyText();
 