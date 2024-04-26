function calculateDotProduct() {
  // Dot product of vectors 
  var magnitude1 = parseFloat(document.getElementById('Magnitude1').value);
  var magnitude2 = parseFloat(document.getElementById('Magnitude2').value);
  var costheta = parseFloat(document.getElementById('Costheta').value);

  // Check if inputs are valid numbers
  if (isNaN(magnitude1) || isNaN(magnitude2) || isNaN(costheta)) {
    alert("Please enter valid numbers for magnitude and cos theta.");
    return;
  }

  // Calculate dot product of vectors using the formula: A.B = |A||B| cos(theta)
  var dotproduct = magnitude1 * magnitude2 * costheta;

  // Display the resulting dot product
  document.getElementById('Dotproduct').textContent = "Dot product: " + dotproduct.toFixed(2);
}

function calculateCollision() {
  // Retrieve mass and velocity values
  var mass1 = parseFloat(document.getElementById('mass1').value);
  var velocity1 = parseFloat(document.getElementById('velocity1').value);
  var mass2 = parseFloat(document.getElementById('mass2').value);
  var velocity2 = parseFloat(document.getElementById('velocity2').value);

  // Check if inputs are valid numbers
  if (isNaN(mass1) || isNaN(velocity1) || isNaN(mass2) || isNaN(velocity2)) {
    alert("Please enter valid numbers for mass and velocity.");
    return;
  }

  // Calculate momentum using the formulas for elastic, inelastic, and perfectly inelastic collisions
  var momentumElastic = mass1 * velocity1 + mass2 * velocity2;
  var momentumInelastic = (mass1 * velocity1) + (mass2 * velocity2);
  var momentumPerfectlyInelastic = (mass1 * velocity1 + mass2 * velocity2) / (mass1 + mass2);

  // Display the resulting momentum
  document.getElementById('result').textContent = "Elastic: " + momentumElastic.toFixed(2) + " kg m/s, " +
    "Inelastic: " + momentumInelastic.toFixed(2) + " kg m/s, " +
    "Perfectly Inelastic: " + momentumPerfectlyInelastic.toFixed(2) + " kg m/s";
}



function PECalculator() {
  var mass = parseFloat(document.getElementById('mass').value);
  var height = parseFloat(document.getElementById('height').value);
  var gravitationalForce = parseFloat(document.getElementById('gravitational_force').value);

  // Check if inputs are valid numbers
  if (isNaN(mass)) {
    alert("Please enter valid numbers for mass.");
    return;
  }
  if (isNaN(height)) {
    alert("Please enter valid numbers for height.");
    return;
  }
  if (isNaN(gravitationalForce)) {
    alert("Please enter valid numbers for gravitational_force.");
    return;
  }

  // Calculate potential energy using the formula, PE= mgh
  var PotentialEnergy = mass * height * gravitationalForce;

  // Display the resulting momentum
  document.getElementById('PEresult').textContent = "PotentialEnergy:" + PotentialEnergy.toFixed(2) + " J ";
}

function calculateTemperature() {
  var celsiusInput = document.getElementById("celsius").value;
  var fahrenheitInput = document.getElementById("fahrenheit").value;
  var resultElement = document.getElementById("tempResult");

  if (celsiusInput !== "") {
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = celsius * 9 / 5 + 32;
    resultElement.textContent = fahrenheit + "°F";
  } else if (fahrenheitInput !== "") {
    var fahrenheit = parseFloat(fahrenheitInput);
    var celsius = (fahrenheit - 32) * 5 / 9;
    resultElement.textContent = celsius + "°C";
  } else {
    resultElement.textContent = "";
  }
}
