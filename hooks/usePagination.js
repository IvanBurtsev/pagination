import { useState } from 'react';

// определяем статический класс PaginationClasses для разбиения данных на страницы
class PaginationClasses {
static paginate(items, currentPage, itemsPerPage) {
// вычисляем индекс начала и конца нужной страницы
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
// возвращаем список элементов от начального до конечного индекса
    return items.slice(startIndex, endIndex);
  }
}

// создаем свой хук usePagination для разбиения данных на страницы
const usePagination = (items, itemsPerPage) => {
// используем хук useState для управления текущей страницей
const [currentPage, setCurrentPage] = useState(1);
// вычисляем общее количество страниц
const totalPages = Math.ceil(items.length / itemsPerPage);
// вызываем PaginationClasses.paginate для разбивки элементов на страницы с заданным номером и количеством элементов на странице
const paginatedItems = PaginationClasses.paginate(items, currentPage, itemsPerPage);

// создал функцию onPageChange, которая будет вызываться при переключении страницы
const onPageChange = (page) => {
// устанавливает новый номер текущей страницы
    setCurrentPage(page);
  };

// возврат объекта с данными и функцией onPageChange
  return { currentPage, totalPages, paginatedItems, onPageChange };
};
export default usePagination;
