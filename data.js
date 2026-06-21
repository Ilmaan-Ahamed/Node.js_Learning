names = ['thor' , 'hulk', 'wizard', 'spidey']
ages = [24, 30 ,12, 29];

// console.log(names)

// exports the file to Module file , exports anythings
module.exports = names;

//exports multiple variables
// type 01
// module.exports ={
//     name : names,
//     age  : ages
// };

// type 02
module.exports ={
    names,ages
};