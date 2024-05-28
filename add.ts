function hello(name: string) {
  console.log("Hello " + name);
}

const firstName: string = "vincent";

hello(firstName);
hello(firstName + " Ducamp Yong");

function concat(a: string, b: string) {
  return a + b;
}

const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
