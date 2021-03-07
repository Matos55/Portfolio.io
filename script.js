
/*********************/
/* Section 1 */
/*********************/

// toggle nav mobile
function navFunc() {
    let navIcon = document.querySelector(".toggle");
    let nav = document.querySelector('nav');

    navIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

// fix nav on mobile 
window.onscroll = function() { 
    myFunction()
};
        
// compares the height of windows height vs nav height, both, from the TOP
// https://www.w3schools.com/jsref/prop_element_offsettop.asp
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}

/*********************/
/* Section 4 */
/*********************/

// Form Validation
const inputs = document.querySelectorAll('input');

const patterns = {
    name: /^[a-z\d]{5,15}$/i,
    subject: /^[a-z\d]{5,30}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,8})?$/ 

    // name: 5 to 12 characters. Can be 'a to z' (([a-z])) and any number from '0 to 9' (([\d]))

    // subject: 5 to 20 characters. Can be 'a to z' and any number from '0 to 9'

    // Email Notes:
        // (yourname) @ (domain) . (extension) (.again)             
        // (yourname) = any letters, numbers, dots and/or hyphens
        // (domain) = any letters, numbers and/or hyphens
        // (extension) = any letters
        // (.again) = a dot (.) then any letters
        // ? ====> o ou mais no elemento anterior, neste caso, '(.again)'
}

function validate(field, regex){

    console.log(regex.test(field.value));

    if(regex.test(field.value)) {
       field.classList.remove('invalid');
       field.classList.add('valid');
   } else {
       field.classList.add('invalid');
   }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);   // estamos a invocar a função "validate" sendo que o 2º argumento é a constante "patterns[atributo]"
    });

})