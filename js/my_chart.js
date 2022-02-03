//создаем переменные и возвращаем им ссылку на canvas (на наши графики)
const device = document.getElementById('device').getContext('2d');
const visitors = document.getElementById('visitors').getContext('2d');
const newVisitors = document.getElementById('newVisitors').getContext('2d');
const age = document.getElementById('age').getContext('2d');
const traffic = document.getElementById('traffic').getContext('2d');

//настраиваем график Тип Устройства
const deviceChart = new Chart(device, {
  type: 'doughnut',
  data: {
    labels: ['Iphone', 'Xiaomi', 'Samsung', 'Honor'],
    datasets: [
      {
        label: 'Тип устройства',
        data: [5000, 3000, 2452, 1800],
        backgroundColor: [
          'rgba(93, 169, 255, 1)',
          'rgba(255, 105, 180, 1)',
          'rgba( 255,255,105, 1)',
          'rgba(0,255,174, 1)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});

//настраиваем график посетителей
const visitorsChart = new Chart(visitors, {
  type: 'line',
  data: {
    labels: ['24.01', '25.01', '26.01', ',27.01', '28.01', '29.01', '30.01'],
    datasets: [
      {
        label: 'Посетители ',
        data: [13, 8, 6, 9, 11, 12, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(123,9,123, 1)',
          'rgba(11,188,88, 1)',
          'rgba(250,22,23, 1)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//настраиваем график новых посетителей
const newVisitorsChart = new Chart(newVisitors, {
  type: 'line',
  data: {
    labels: ['24.01', '25.01', '26.01', ',27.01', '28.01', '29.01', '30.01'],
    datasets: [
      {
        label: 'Новые посетители',
        data: [6, 2, 0, 1, 4, 5, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(123,9,123, 1)',
          'rgba(11,188,88, 1)',
          'rgba(250,22,23, 1)',
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//график возрастов
const ageChart = new Chart(age, {
  type: 'doughnut',
  data: {
    labels: ['15-24', '25-34', '35-44', '45-54', '55-64'],
    datasets: [
      {
        label: 'Чаще всего покупают',
        data: [7, 6, 11, 7, 2],
        backgroundColor: [
          'rgba(93, 169, 255, 1)',
          'rgba(255, 105, 180, 1)',
          'rgba( 255,255,105, 1)',
          'rgba(0,255,174, 1)',
          'rgba(241,217,255, 1)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//Источник трафика
const trafficChart = new Chart(traffic, {
  type: 'doughnut',
  data: {
    labels: ['Переходы из поисковых систем', 'Прямые заходы'],
    datasets: [
      {
        label: 'Источник трафика',
        data: [23, 12],
        backgroundColor: ['rgba(93, 169, 255, 1)', 'rgba( 255,255,105, 1)'],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
