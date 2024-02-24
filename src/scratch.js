var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
  ];

//   let newArr
//   var newArr = creatures.reduce(function(acc, curr, index) {
//     if (curr.habitat == "Jungle") {
//       acc+=index;
//     }
//     return acc;
//   }, 0);
  
function startsWith(wordToCompare) {
    return function(element,i) {
        return element.name === wordToCompare;
    }
}

// creatures.filter(startsWith("Shark"));


// function sum_reducer(acc, curr, index) {
//     if (curr.name == "Lion") {
//         acc+=index;
//         }
//             return acc;
// }

let index = creatures.findIndex(x => x.name == "Whale"); 

// function findIndex(search1){
//    return  creatures.reduce(sum_reducer(search1), 0);
  
//   }
  
  
  
  console.log(creatures.findIndex(startsWith("Lion")));
console.log((index));
