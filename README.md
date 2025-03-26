# LinkedList на JavaScript

## Описание

Этот проект реализует односвязный список (Linked List) на JavaScript.  
Он включает основные методы для работы со списком, такие как добавление, удаление и поиск элементов.

## Установка и использование

1. Склонируйте репозиторий:
   ```sh
   git clone https://github.com/gunster1998/linkedList.git
   ```
2. Перейдите в папку проекта:
   ```sh
   cd your-repo
   ```
3. Импортируйте классы в своем коде:
   ```js
   import { Node, linkedList } from "./linkedList.js";

   const list = new linkedList();
   ```

## Методы

- `append(value)` – добавляет элемент в конец списка.
- `prepend(value)` – добавляет элемент в начало списка.
- `size()` – возвращает количество элементов в списке.
- `head()` – возвращает первый элемент списка.
- `tail()` – возвращает последний элемент списка.
- `at(index)` – возвращает элемент по указанному индексу.
- `pop()` – удаляет последний элемент списка.
- `contains(value)` – проверяет, содержится ли значение в списке.
- `find(value)` – возвращает индекс элемента по его значению.
- `toString()` – выводит список в виде строки.

## Пример использования

```js
const list = new linkedList();

list.append(10);
list.append(20);
list.append(30);
console.log(list.toString()); // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.prepend(5);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

console.log(list.size()); // 4
console.log(list.head()); // Node { value: 5, nextNode: ... }
console.log(list.tail()); // Node { value: 30, nextNode: null }
console.log(list.at(2)); // Node { value: 20, nextNode: ... }

list.pop();
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list.contains(10)); // true
console.log(list.find(20)); // 2
```
