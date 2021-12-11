const selectElement = (element) => document.querySelector(element);
console.log(selectElement);
selectElement('.menu-icons').addEventListener('click', ()=> {
    selectElement('nav').classList.toggle('active');
}); 