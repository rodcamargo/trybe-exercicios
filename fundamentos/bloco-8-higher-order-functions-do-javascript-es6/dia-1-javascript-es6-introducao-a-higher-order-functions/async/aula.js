
// const sayHello = () => 'hello trybers'
  
const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);


  const sumFixAmount = (amount) => {
    // console.log(number)
    console.log(amount)
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));




  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.group);


  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });



  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(7, isEven); // Testa quais números serão pares;
  repeat(7, isOdd); // Testa quais números serão ímpares;


  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

  const acordar = () => 'Acordando!!';
  // console.log(acordar())
  
  const cafe = () => 'Bora tomar café!!';
  
  const dormir = () => 'Partiu dormir!!';
  
  // Ao chamar a função doingThings:
  const doingThings = (wakeUp) => console.log(wakeUp(wakeUp));
  
  
  doingThings(acordar);
  doingThings(cafe);
  doingThings(dormir);
  
  // console.log(doingThings(acordar));
  
  
  // Ela deve retornar o valor do respectivo parâmetro, neste caso:
  // Acordando!!
