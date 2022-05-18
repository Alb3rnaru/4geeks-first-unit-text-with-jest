test("One euro to dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar} = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar to yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
     expect(fromDollarToYen(1.2)).toBe(127.9);
})

test("One yen to Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    
     expect(fromYenToPound(127.9)).toBe(0.8);
})