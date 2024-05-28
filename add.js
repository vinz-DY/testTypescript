(function () {
  function hello(name) {
    console.log("Hello " + name);
  }
  var firstName = "vincent";
  hello(firstName);
  hello(firstName + " Ducamp yong");
  function concat(a, b) {
    return a + b;
  }
  var wcs = concat("Wild", concat("Code", "School"));
  console.log(wcs);
})();