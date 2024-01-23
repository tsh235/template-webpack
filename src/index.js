// ! удалить этот импорт перед build
import './index.html';
// ---

// здесь прописываются файлы из папки со стилями css
import './css/normalize.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

// ! если пишем на scss или sass/less, то подключаем стили так:
// import './css/style.css';

// ! если используются стили бутстрапа, то в них надо поменять
// ! color-adjust на print-color-adjust

// в папке script пишем отдельные модули,
// если модульная система, ну или отдельные функции

{
  const init = () => {
    // код
  };

  init();
}
