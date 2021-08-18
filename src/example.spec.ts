
// ----------- Positive test cases ----------

// 1

// describe('Example test', () => {
//     it('equals true', () => {
//       expect(true).toEqual(true);
//       expect('Anupam').toEqual('Anupam');   
//     });
// });


// 2

function addNumbers (num1, num2) {
    return num1 + num2;
}

describe('addNumbers', () => {
    it('adds two numbers', () => {
     expect(addNumbers(2,2)).toEqual(4);   
    });
});





// ------------ Negative test cases ----------

// 1

// function addNumbers (num1, num2) {
//     return num1 - num2;
// }

// describe('addNumbers', () => {
//     it('adds two numbers', () => {
//      expect(addNumbers(2,2)).toEqual(4);   
//     });
// });

