let usname = document.getElementById('name');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let p = document.getElementById('p');
let button = document.getElementById('button');

button.addEventListener('click', function() {
    if (usname.value === '') {
        alert('Please enter your name');
    } else if (lastname.value === '') {
        alert('Please enter your last name');
    } else if (age.value === '') {
        alert('Please enter your age');
    } else if (usname.value === '' || lastname.value === '' || age.value === '') {
        alert('Please fill in all fields.');
    } else {
        if (isNaN(age.value)) {
            alert('Please enter only numbers for age');
        } else if (age.value < 18) {
            alert('You are not allowed');
            agechecker();
        } else {
            p.textContent = 'Account created successfully';
        }
    }
});

function agechecker() {
    alert('Sorry, you are under 18');
}







