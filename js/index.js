const selected1 = document.querySelector(".selected-1");
const optionsContainer1 = document.querySelector(".dropdown-options-container-1");

const optionsList1 = document.querySelectorAll(".option-1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
    changeChart();
  });
});

const selected2 = document.querySelector(".selected-2");
const optionsContainer2 = document.querySelector(".dropdown-options-container-2");

const optionsList2 = document.querySelectorAll(".option-2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
    changeChart();
  });
});

let myChart = new Chart(
  document.getElementById('myChart'),
  config1
);

function changeChart() {
  const selectedOption1 = selected1.innerHTML;
  const selectedOption2 = selected2.innerHTML;

  if (selectedOption1 === 'Jumlah Review') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config2);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config1);
    } else if (selectedOption2 === 'Access') {
      updateChart(config2);
    } else if (selectedOption2 === 'Price') {
      updateChart(config1);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config2);
    }
  } else if (selectedOption1 === 'Proporsi Label Sentimen') {
    updateChart(config2);
    if (selectedOption2 === 'Attractions') {
      updateChart(config2);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config1);
    } else if (selectedOption2 === 'Access') {
      updateChart(config2);
    } else if (selectedOption2 === 'Price') {
      updateChart(config1);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config2);
    }
  }
}

function updateChart(config) {
  myChart.destroy();
  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}