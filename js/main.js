//Находим li из навигации
var dashLi = document.getElementById('dashLi');
var pagesLi = document.getElementById('pagesLi');
var statLi = document.getElementById('statLi');
var notLi = document.getElementById('notLi');
var helpLi = document.getElementById('helpLi');
var setLi = document.getElementById('setLi');

// иконки соответствующих li
var dash = document.getElementById('img-dash');
var pages = document.getElementById('img-pages');
var stat = document.getElementById('img-stat');
var not = document.getElementById('img-not');
var help = document.getElementById('img-help');
var set = document.getElementById('img-set');

//меняем адрес картинок при наведении в разделе навигации слева и так со всеми элементами списка
dashLi.addEventListener('mouseover', function () {
  dash.setAttribute('src', './images/dashboard2.png');
});
//когда снимаем курсор с наведения
dashLi.addEventListener('mouseout', function () {
  if (dashLi.classList.contains('active')) dash.setAttribute('src', './images/dashboard2.png');
  else dash.setAttribute('src', './images/dashboard.png');
});

pagesLi.addEventListener('mouseover', function () {
  pages.setAttribute('src', './images/pages2.png');
});
pagesLi.addEventListener('mouseout', function () {
  pages.setAttribute('src', './images/pages.png');
});

statLi.addEventListener('mouseover', function () {
  stat.setAttribute('src', './images/statistic2.png');
});
statLi.addEventListener('mouseout', function () {
  stat.setAttribute('src', './images/statistic.png');
});

notLi.addEventListener('mouseover', function () {
  not.setAttribute('src', './images/notification2.png');
});
notLi.addEventListener('mouseout', function () {
  not.setAttribute('src', './images/notification.png');
});

helpLi.addEventListener('mouseover', function () {
  help.setAttribute('src', './images/help2.png');
});
helpLi.addEventListener('mouseout', function () {
  help.setAttribute('src', './images/help.png');
});

setLi.addEventListener('mouseover', function () {
  set.setAttribute('src', './images/settings2.png');
});
setLi.addEventListener('mouseout', function () {
  set.setAttribute('src', './images/settings.png');
});

//при нажатом li меняем иконку на голубую, когда еще не наводим на li
if (dashLi.classList.contains('active')) dash.setAttribute('src', './images/dashboard2.png');
else dash.setAttribute('src', './images/dashboard.png');
if (pagesLi.classList.contains('active')) pages.setAttribute('src', './images/pages2.png');
else pages.setAttribute('src', './images/pages.png');
if (statLi.classList.contains('active')) stat.setAttribute('src', './images/statistic2.png');
else stat.setAttribute('src', './images/statistic.png');
if (notLi.classList.contains('active')) not.setAttribute('src', './images/notification.png');
else not.setAttribute('src', './images/notification.png');
if (helpLi.classList.contains('active')) help.setAttribute('src', './images/help2.png');
else help.setAttribute('src', './images/help.png');
if (setLi.classList.contains('active')) set.setAttribute('src', './images/settings2.png');
else set.setAttribute('src', './images/settings.png');
