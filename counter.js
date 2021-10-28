// JavaScript source code

let counter = 0;

function count() {
    const counter1 = document.querySelector('h2');
    counter = counter + 1;
    counter += 1;
    counter++;
    counter1.innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }

}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});
