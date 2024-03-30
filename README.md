# Проект на React.

## Минимальная конфигурация для запуска пустого приложения.

1. Установка node.js + npm.
2. Установка React через терминал: npx create-react-app "project_name"
3. Команда для запуска в терминале: npm start
4. В файле index.html очищаем все, кроме базовой структуры и <div id="root"></div>
5. В папке src удаляем все файлы кроме index.js и App.js

Корректируем файлы:

### Файл index.js:

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
```

### Файл App.js:

```
import React from "react";

function App() {
  return <div className="App">

  </div>;
}

export default App;
```

## Минимальная конфигурация для запуска пустого приложения готова.

# План реализации проекта:

## 1. КОМПОНЕНТ APP. РАБОТА С СОСТОЯНИЕМ. UseState.

    1.	Работа с файлом App.js
    2.	Создать две кнопки для инкремента и декремента
    3.	Создать переменную в которой будет хранится конечный вариант. let likes
    4.	Повесить слушатель события на кнопку инкремента, где будет функция increment
    5.	Повесить слушатель события на кнопку декремента, где будет функция decrement
    6.	Реализовать функцию increment
    7.	Реализовать функцию decrement
    8.	Явное изменение компонента с помощью Хука useState в функциях increment и decrement

## 2. УПРАВЛЯЕМЫЙ ИНПУТ.

    1.	Создаем состояние для input.
    2.	Создадим заголовок со значением из состояния input'a.
    3.	Создадим input c value равным состоянию.
    4.	Вешаем событие onChange на input.
    5.	В событии onChange будем вызывать callback, который будет устанавливать состояние value с помощью информации из DOM-элемента event.target.value .

## 3. ФУНКЦИОНАЛЬНЫЕ КОМПОНЕНТЫ.

    1.	Создаем в папке src папку для компонентов components.
    2.	Создаем внутри файл Counter.jsx для счетчика.
    3.	Создаем шаблон React компонента.

```
 import React from "react";

 const Component = () => {
     return (
       <div>

       </div>;
   )
 };

export default Component;
```

    4.	Переносим туда код касающийся счетчика из App.js .
    5.	Делаем нужные импорты.
    6.	Создаем внутри файл ControlledInput.jsx для счетчика .
    7.	Создаем шаблон React компонента.
    8.	Переносим туда код касающийся инпута из App.js .
    9.	Делаем нужные импорты.
    10.	Добавляем созданные компоненты в App.js внутырь div оба компонента <Counter />, <ControlledInput />.
