const myURL = new URL('http://www.example.com');
myURL.pathname = '/hello.html';
myURL.search = '?id=123';
myURL.hash = '#hello';


console.log(myURL);
console.log(myURL.href);
