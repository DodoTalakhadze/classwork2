// let children = ["George", "Lia", "Anna"];
// console.log(children[0]);

//მასივში ახალი მონაცემის ჩამატება ბოლო ინდექსზე
// children.push("Demi");
// console.log(children);

// children.pop() //შლის ბოლო ინდექსზე მყოფ ელემენტს
// console.log(children);

//პირველი ინდექსიდან მეოთხე ინდექსის ჩათვლით გამოაქვს
// let childrenFromSecond = children.slice(1, 4);
// console.log(childrenFromSecond);

//პირველი ინდექსიდან გამოიტანს ორ ელემენტს
// let splicedData = children.splice(1, 2);
// console.log(splicedData);

//პირველი ინდექსიდან წაშლის ორ ელემენტს და დაამატებს მათ ნაცვლად სტრინგში რაც ზის
//ცვლადში თუარ შევინახე წაშლის ორიგინალს
// let splicedData = children.splice(1, 2, "Levan");
// console.log(splicedData);
// console.log(children);

// let fruits = ["apple", "banana", "grape", "cherry"];
// fruits.splice(2, 2, "Lemon", "Plump");
// console.log(fruits);

// -->  objects   <--
// let person = {
//     firstname: "Nick",
//     lastname: "Jiqia",
//     children: ["Qeti", "Tako", "Demi"]
// };
// let students = [
//     {
//     firstname: "George",
//     lastname:"Lomidze",
//     jobs: [
//         {
//             name: "product owner",
//             company: "Abc"
//         },
//         {
//             name: "product manager",
//             company: "Def"
//         }
//     ]
// },
// {
//     firstname: "Givi",
//     lastname: "Bagishvili",
//     jobs: [
//         {
//             name: "product owner",
//             company: "Kli"
//         },
//         {
//             name: "product manager",
//             company: "Mno"
//         }
//     ]
// }
// ]
// console.log(students[0].jobs[0].name);

// ---> dataTypeConvertions მონაცემთა ტიპების კონვერტაცია <---
// let salary = "1500";
// let salary2 = "1800";
// // რიცხვით მონაცემად რომ აღიქვას უნდა გადავაკონვერტირო
// salary = Number(salary);
// salary2 = Number(salary2);
// console.log(salary + salary2);

// სტრინგად რომ აღიქვას 
// let randNUm = 123816161546;
// randNUm = String(randNUm);
// console.log(typeof randNUm, randNUm);

// let userData = "some incorect data";
// userData = Number(userData);
// console.log(userData);

// let num1 = "14.45";
// // ათწილადები გამოაქვს
// console.log(parseFloat(num1));
// // ამრგვალებს
// console.log(parseInt(num1));
// // 0 false
// // 1 true
// console.log(Number(true));
// console.log(Boolean(1), Boolean(0), Boolean(-1), Boolean("abc"), Boolean(null), Boolean(undefined), Boolean());


//  ---->  IF statements  <----
// let isShopOpen = prompt("Is the shop open?"); //yes, no, anything else counts as incorrect
// === მკაცრი ტოლობაა
// if (isShopOpen === "yes"){
//     alert("you can go to the shop")
// } else if (isShopOpen === "no") {
//     alert("wait until it will be open!")
// } else {
//     alert("try again")
// };


// რამდენიმე პირობის დაკმაყოფილებისთვის ვიყენებთ 'და' სიმბოლოს '&&'
// let isShopOpen = "yes";
// let weatherOutside = "sunny";

// if (isShopOpen === "yes" && weatherOutside === "sunny") {
//     console.log("get in")
// };

// //ან ერთი პირობა სრულდება ან მეორე გამოიყოფა სიმბოლოთი '||'
// let breadType = "white";
// if (breadType === "white" || breadType === "black") {
//     console.log("Great")
// };

//შედარება 
let minPasswordLen = 8;
let userPass = "anvdasd";
if (minPasswordLen >= userPass.length){
    console.log("your password is valid")
};