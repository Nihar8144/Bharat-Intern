const celsiusField = document.querySelector(".celsius-value");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector(".convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () =>{
    degree.value = "";
    celsiusField.innerHTML = "";
});

if(degree.value === ""){
    convertBtn.setAttribute("disabled", "");
    setTimeout(() =>{
        convertBtn.removeAttribute("disabled");
    },  4000);
}

convertBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span>Converting..</span>";
    setTimeout(() =>{
        convertBtn.innerHTML = "<span>Convert<span>";
    }, 1000);
});

function convertToCelsius(){
    let inputValue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit"){
            const fahrenheitToCelsius = (inputValue -32) * (5/9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)}°C`;
        }
        else if(tempType.value === "kelvin"){
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML= `${kelvinToCelsius}°C`;
        }
    }, 1200)
}