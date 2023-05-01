
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Pagination from '/components/Pagination';
import usePagination from '/hooks/usePagination';

const ITEMS_PAGE = 20; // показываем 20 элементов на каждой странице

const Home = () => {
const [pagesCount, setPagesCount] = useState(0); // состояние страниц - 0
const items = [];

  // заполняем массив элементов 300 на данный момент
for (let i = 1; i <= 300 + pagesCount * ITEMS_PAGE; i++) {
    items.push(`Here is an example of posts and pagination `); // ${i} надпись ссылки-элементы 20 шт на странице 
  }

  // хук для пагинации
const { currentPage, totalPages, paginatedItems, onPageChange } = usePagination(
    items,
    ITEMS_PAGE
  );

  // объект router из хука useRouter
const router = useRouter();

  // обработчик нажатия на элемент (для увеличения количества пустых страниц)
const handleItemClick = (pageNumber) => {
  // обновляем URL с новым номером страницы на которой изображены 20 элементов ссылок
    router.push(`/pages/${pageNumber}`);
    setPagesCount(pagesCount + 1);
  };

  // добавляем пустую строку в конце массива элементов, если количество пустых страниц больше нуля и элементов стало нечетное количество
  if (pagesCount > 0 && items.length % ITEMS_PAGE === 1) {
    items.push('');
  }

const pagePaths = Array.from({ length: totalPages }, (_, i) => `/pages/${i + 1}`); 
 
  return (
    <div className='wrapper'>
      <section className='container'>      
        <h1> Example pagination Next js</h1>
        <ul>
          {/*элементы на текущей странице */}
          {paginatedItems.map((item, index) => {
            const linkIndex = (currentPage - 1) * ITEMS_PAGE + index + 1; // номер ссылки на текущей странице
            return (
              <li key={index}>
                {/*  создаем ссылки на страницу */}
                <Link legacyBehavior href={pagePaths[currentPage - 1]}>
                  <a className="text" onClick={() => handleItemClick(currentPage + index)}>
                    {linkIndex}. {item}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* компонент пагинации с 3 свойствами и значениями(props) */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </section>
    </div>
  );  
};
export default Home;

