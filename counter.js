// JavaScript source code
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);

}

//let counter = 0;


function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);

  //  const counter1 = document.querySelector('h2');
  //  counter = counter + 1;
  //  counter += 1;
  //  counter++;
  //  counter1.innerHTML = counter;

   // if (counter % 10 === 0) {
   //     alert(`Count is now ${counter}`);
   // }

}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;

//    setInterval(count, 1000);
});
