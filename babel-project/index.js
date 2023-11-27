// ES6+ код
class MyClass {
    constructor(name) {
      this.name = name;
    }
  
    // Метод класса
    greet() {
      return `Привет, ${this.name}!`;
    }
  
    // Статический метод
    static welcome() {
      return 'Добро пожаловать!';
    }
  
    // Стрелочная функция
    farewell = () => {
      return `До свидания, ${this.name}!`;
    }
  }
  