let fakeDataPoints = [];
let fakeLabels = [];

function giveMeFakeData(numDataPoints, max) {
  for(let i = 0; i < numDataPoints; i++) {
    fakeDataPoints.push(Math.floor(Math.random() * max) + 1);
    fakeLabels.push(new Date(0,i).toLocaleString({},{month:'short'}));
  }
}

giveMeFakeData(70, 75);

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: fakeLabels,
    datasets: [{
        label: 'Dalian Iron Ore',
        backgroundColor: 'rgba(116, 185, 255, .6)',
        borderColor: 'rgba(255, 118, 117,1.0)',
        data: fakeDataPoints,
    }]
  },

  // Configuration options go here
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Dalian Iron Ore, $ Per Tonne'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: '$ Per Tonne'
        }
      }]
    }
  }
});