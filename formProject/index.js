// const multistepForm = document.querySelector("[data-multi-step]");
// const formSteps = [...multistepForm.querySelectorAll("[data-step]")];

// let currentStep = formSteps.find(step =>{
//     return step.classList.contains("active");
// })?.dataset.step

// console.log(currentStep);

// if(isNaN(currentStep)){
//     formSteps.find()
// }
function nextStep(step) {
    document.getElementById(`step${step}`).scrollIntoView({ behavior: 'smooth' });
    console.log(step);
}

function prevStep(step) {
    document.getElementById(`step${step}`).scrollIntoView({ behavior: 'smooth' });
    console.log(step);
}
