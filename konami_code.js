const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
function init() {
  // Write your JavaScript code inside the init() function
  let body = document.body;
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    // console.log(e.detail);
    // console.log(e.which);
    // console.log(key);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('You got it!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
