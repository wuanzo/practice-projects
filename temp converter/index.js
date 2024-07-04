const from_unit = document.getElementById("from_unit");
const to_unit = document.getElementById("to_unit");
const input_temp = document.getElementById("input_temp");
const output_temp = document.getElementById("output_temp");

function convert() {
  const from = from_unit.value;
  const to = to_unit.value;
  const inputValue = input_temp.valueAsNumber;

  if (isNaN(inputValue)) {
    output_temp.textContent = "NaN";
  } else {
    if (from === "celcius" && to === "fahrenheit") {
      output_temp.textContent = ((9 / 5 * inputValue) + 32).toFixed(2);
    } else if (from === "celcius" && to === "kelvin") {
      output_temp.textContent = (inputValue + 273.15).toFixed(2);
    } else if (from === "fahrenheit" && to === "celcius") {
      output_temp.textContent = ((inputValue - 32) * 5 / 9).toFixed(2);
    } else if (from === "fahrenheit" && to === "kelvin") {
      output_temp.textContent = ((inputValue - 32) * 5 / 9 + 273.15).toFixed(2);
    } else if (from === "kelvin" && to === "celcius") {
      output_temp.textContent = (inputValue - 273.15).toFixed(2);
    } else if (from === "kelvin" && to === "fahrenheit") {
      output_temp.textContent = ((inputValue - 273.15) * 9 / 5 + 32).toFixed(2);
    } else {
      output_temp.textContent = input_temp.value;
    }
  }
}
