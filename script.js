function calculate() {
  //Get Input

  var height = parseInt(document.getElementById("height").value);

  var weight = parseInt(document.getElementById("weight").value);

  //Calculation
  let BMI = (weight / ((height * height) / 10000)).toFixed(2);

  //Results
  document.getElementById("BMI-header").innerHTML = Math.round(BMI * 100) / 100;

  if (BMI < 18.5) document.getElementById("calc-header").innerHTML = "Underweight";
  document.getElementById("BMI-header").style.backgroundImage =
    " linear-gradient(to top, #0FE2C2, #00CBE3, #00AFFF, #008AFF, #0553FE)";
  
  if (BMI >= 18.5 && BMI <= 25)
    document.getElementById("calc-header").innerHTML = "Normal";
  document.getElementById("BMI-header").style.backgroundImage =
    " linear-gradient(143deg, rgba(29,185,84,1) 35%, rgba(16,112,0,1) 100%)";
  
  if (BMI >= 25 && BMI <= 30)
    document.getElementById("calc-header").innerHTML = "Overweight";
  document.getElementById("BMI-header").style.backgroundImage =
    " linear-gradient(156deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)";
  
  if (BMI > 30) document.getElementById("calc-header").innerHTML = "Obese";
  document.getElementById("BMI-header").style.backgroundImage =
    " linear-gradient(156deg, rgba(210,0,0,1) 43%, rgba(144,0,0,1) 100%)";
  
  document.getElementById("BMI-header").value = replace("BMI", output);
}