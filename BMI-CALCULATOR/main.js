let out = document.querySelector(".output");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
let button = document.querySelector("button");
let summary = "";




button.addEventListener("click", () => {
    let BMI = 0;
    BMI += weight.value / (Math.pow(height.value, 2));
    
    console.log(BMI);
    if (BMI < 18.5)
    {
        summary = "Underweight";
    }
    else if (BMI >= 18.5 && BMI <= 24.9)
    {
        summary = "Healthy";
    }
    else if (BMI >= 25.0 && BMI <= 29.9)
    {
        summary = "Overweight";
    }
    else 
    {
        summary = "Obese";
    }

    out.innerHTML = `Your BMI score is ${BMI} which means you are ${summary}`;
    out.style.border = "3px dashed black";
    out.style.margin = "12px";
    out.style.padding = "8px";
    out.style.borderRadius = "12px";
});
