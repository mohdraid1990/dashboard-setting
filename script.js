// Получаем элементы по их идентификаторам
const menuIcon = document.getElementById('menuIcon'); // Иконка меню
const closeIcon = document.getElementById('closeIcon'); // Иконка закрытия
const sidebar = document.getElementById('sidebar'); // Боковая панель

// Добавляем обработчик события на иконку меню
menuIcon.addEventListener('click', function() {
  sidebar.classList.add('visible'); // Добавляем класс видимости к боковой панели
  sidebar.classList.remove('hidden'); // Убираем класс скрытия
  setTimeout(() => {
    menuIcon.style.display = 'none'; // Скрываем иконку меню
    closeIcon.style.display = 'block'; // Показываем иконку закрытия
  }, 300); 
});

// Добавляем обработчик события на иконку закрытия
closeIcon.addEventListener('click', function() {
  sidebar.classList.add('hidden'); // Добавляем класс скрытия к боковой панели
  sidebar.classList.remove('visible'); // Убираем класс видимости
  closeIcon.classList.add('rotate'); // Добавляем класс вращения к иконке закрытия
  setTimeout(() => {
    closeIcon.style.display = 'none'; // Скрываем иконку закрытия
    menuIcon.style.display = 'block'; // Показываем иконку меню
    closeIcon.classList.remove('rotate'); // Убираем класс вращения
  }, 150); 
});

// Получаем элемент выбора даты рождения
const selectElement = document.getElementById('dob'); 
const arrowIcon = document.getElementById('arrow-icon'); // Иконка стрелки

// Добавляем обработчик события на изменение выбора
selectElement.addEventListener('change', function () {
  arrowIcon.style.transform = 'translateY(-50%) rotate(0deg)'; // Сбрасываем вращение стрелки при изменении выбора
});