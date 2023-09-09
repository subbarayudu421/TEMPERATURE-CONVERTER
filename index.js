function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");
  
    var celsius, fahrenheit;
  
    if (inputUnit === "celsius") {
      celsius = parseFloat(inputTemperature);
      fahrenheit = celsiusToFahrenheit(celsius);
    } else if (inputUnit === "fahrenheit") {
      fahrenheit = parseFloat(inputTemperature);
      celsius = fahrenheitToCelsius(fahrenheit);
    }
  
    resultElement.innerHTML =
      "Celsius: " + celsius + "<br>" +
      "Fahrenheit: " + fahrenheit;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }