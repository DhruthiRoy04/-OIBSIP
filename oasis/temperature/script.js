function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  if (from === to) {
    resultDiv.textContent = `Converted Temperature: ${input.toFixed(2)}°${to}`;
    return;
  }

  let converted;

  // Convert input to Celsius first
  let tempC;
  switch (from) {
    case 'C': tempC = input; break;
    case 'F': tempC = (input - 32) * 5 / 9; break;
    case 'K': tempC = input - 273.15; break;
  }

  // Convert from Celsius to desired unit
  switch (to) {
    case 'C': converted = tempC; break;
    case 'F': converted = (tempC * 9 / 5) + 32; break;
    case 'K': converted = tempC + 273.15; break;
  }

  resultDiv.textContent = `Converted Temperature: ${converted.toFixed(2)}°${to}`;
}
