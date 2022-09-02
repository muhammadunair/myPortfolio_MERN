// var outerValue = "car";
// var later;


// function outerFunction() {
//     var innerValue = "bus";


//     function innerFunction() {
//         console.log(outerValue === "car");
//         console.log(innerValue === "bus");
//     }


//     later = innerFunction;
// }

// outerFunction();
// later();



for(var i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i);
    })

}

// function sum(a) {
//     return function(b) {
//       return a + b;
//     }
//   }
  
//   const val = sum(1)(2);
//   console.log(val);