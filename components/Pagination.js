import React from 'react';

// деструктуризируем 3 св-ва: currentPage, totalPages, onPageChange
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
// создаем массив страниц для пагинации
const pages = [...Array(totalPages).keys()].map(i => i + 1);

// возвращаем div, который будет содержать массив кнопок с номерами страниц
  return (
    <div>
      {pages.map(page => (
        <button
// добавляем класс стилей для всех кнопок
          className="btn-outline-secondary"
          type="button"
// устанавливаем уникальный key для каждой кнопки из номера страницы
          key={page}
// если номер страницы совпадает с текущим номером текущей страницы,
// то устанавливаем disabled на true, чтобы пользователь не мог нажать на эту кнопку
          disabled={page === currentPage}
// когда пользователь нажимает на кнопку, вызываем метод onPageChange и передаем номер страницы
          onClick={() => onPageChange(page)}
        >
{/* текст, который будет отображаться на кнопке */}
          {page}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
