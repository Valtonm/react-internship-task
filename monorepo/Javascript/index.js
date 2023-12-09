const change = document.querySelector(".change");
const shuffle = document.querySelector(".shuffle");
const show = document.querySelector(".show");
const checkboxes = document.querySelectorAll(".checkbox");
const labels = document.querySelectorAll(".checkbox-label");
const checkboxWrapper = document.querySelector('.checkbox-wrapper');


const newValues = ['Task', 'Challenge', 'Opportunity', 'Experience']

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

change.addEventListener('click' , () => {
        checkboxes.forEach((element, index) => {
            element.value = newValues[index];
        });
});

show.addEventListener('click', () => {
    for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            labels[i].textContent = checkboxes[i].value;
            labels[i].style.display = "block";
            checkboxWrapper.classList.add('checked');
        }else{
            checkboxes[i].style.display = "none";
        }
    }
});

shuffle.addEventListener('click', () => {
    const checkboxesArray = Array.from(checkboxes);

    shuffleArray(checkboxesArray);

    checkboxesArray.forEach(checkbox => {
        checkbox.parentElement.appendChild(checkbox);
    })
});