const arrQuestion = [
   { question: 'Метод для добавления элемента в конец массива?', answer: 'push' },
   { question: 'Метод для удаления последнего элемента массива?', answer: 'pop' },
   { question: 'Метод для удаления первого элемента массива?', answer: 'shift' },
   { question: 'Метод для добавления элемента в начало массива?', answer: 'unshift' },
   { question: 'Метод для поиска номера элемента в массиве?', answer: 'indexOf' },
   { question: 'Метод для удаления элементов, начиная с определённого индекса?', answer: 'splice' },
   { question: 'Метод для создания копии массива (обрезание массива)?', answer: 'slice' },
   { question: 'Метод для разворота порядка следования элементов массива?', answer: 'revers' },
   { question: 'Метод для сортировки элементов массива и возврат отсортированного массива?', answer: 'sort' },
   { question: 'Свойство массива отвечающее за его длинну?', answer: 'length' },
];

const HTMLBlock = document.querySelector('.content');
const HTMLQuestion = document.querySelector('.question');
const HTMLAnswer = document.querySelector('.answer');
const HTMLConfirm = document.querySelector('.confirm');
const HTMLResult = document.querySelector('.result');
const HTMLNext = document.querySelector('.next');
let current = 0;

function qwiz() {
   HTMLQuestion.textContent = arrQuestion[current].question;
}
qwiz();
HTMLConfirm.addEventListener('click', ansver)
function ansver() {
   if (HTMLAnswer.value == arrQuestion[current].answer) {
      HTMLResult.textContent = 'Молодец, правильно!';
   } else {
      HTMLResult.innerHTML = `Не верно!!! Узнай больше <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/${arrQuestion[current].answer}">Здесь</a>`
   }
}
HTMLNext.addEventListener('click', function () {
   if (current == arrQuestion.length-1) {
      current = 0
      next();
   } else {
      next();
   }
})

function next() {
   current++;
   qwiz();
   HTMLAnswer.value = '';
   HTMLResult.textContent = '';
};
