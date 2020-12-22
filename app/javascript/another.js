function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> Get Served!</h1>");
    header.innerHTML = hello;
  }
  function bodyText(){
      let body= document.querySelector("#greeting2");
      let body1 = ('<p>Lost in the Zone</p>');
      body.innerHTML = body1;
  }
  function raidList(){
      let raid= document.querySelector("#greeting3");
      let raid1= ('<body><p2>The Dog Jumps over the moon</p2></body>');
  }
 
  module.exports = sayHello();
  module.exports = bodyText();
  module.exports = raidList();
 