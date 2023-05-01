import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';

const Error = () => {    
const router = useRouter(); 

useEffect(() => {
// Таймер для перехода на главную страницу через 3 секунды.
setTimeout(() => {
    router.push('/');
        }, 3000);
    },[]); // Пустой массив зависимостей, функция отработает только один раз при монтировании компонента.
    
// Возвращение разметки компонента.
return (
        <div>        
            <section className='error'>                              
                <h1 className="error_h1"> ERROR 404</h1>               
                <h2>Error!!!!(Ошибка)</h2>                
                <h2>Такой страницы здесь нет!</h2>               
                <p>Перехожу на<Link Link href='/'> главную страницу</Link> через 3 секунды...</p>
                <Image src= "/img/err.png" width={500} height={500} alt="image error" />
            </section>
        </div>
    )
}
export default  Error;
