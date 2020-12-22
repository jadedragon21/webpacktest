function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> Pancake Server Service Today</h1>");
    header.innerHTML = hello;
  }
  function bodyText(){
      let body= document.querySelector("#greeting2");
      let body1 = ('<p>What you wanted syrup with that?    </p>');
      body.innerHTML = body1;
  }
 
 
  module.exports = sayHello();
  module.exports = bodyText();
  
 