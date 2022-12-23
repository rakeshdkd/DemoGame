function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = ["S", "G", "W"];

//const comp = getRandomItem(array);
//console.log(comp);

let count1 = 0;
let count2 = 0;
let count3 = 0;

let player = prompt("PLEASE ENTER YOUR CALL.");
//for (let i = 1; i <=5; i++) {
do {
  const comp = getRandomItem(array);
  if (player == comp) {
    alert("This session Tied.");
    prompt("Please again enter your call.")
    count1++;
  }
  else if ((comp == "S" && player == "G") || (comp == "G" && player == "W") || (comp == "W" && player == "S")) {
    alert("You win this session...!")
    prompt("Please again enter your call.")
    count2++;
  }
  else {
    alert("You loose this session..!")
    prompt("Please again enter your call.")
    count3++;
  }
} while ((count1 + count2 + count3) <3);
let count = (count1 + count2 + count3);
console.log(count);
let arr2 = [count1, count2, count3]
console.log("TIE -", count1, "\n", "WIN -", count2, "\n", "LOOSE -", count3);
// console.log("WIN - ", count2);
// console.log("LOOSE - ", count3);
console.log(arr2);
console.table(arr2);
if (count2 > count3) {
  alert("HURREY ......! YOU ARE THE WINNER OF THIS GAME.")
  console.log("HURREY ......! YOU ARE THE WINNER OF THIS GAME.");
} else if (count3 > count2) {
  alert("HUH '_'.....! YOU LOST THE GAME.")
  console.log("HUH '_'.....! YOU LOST THE GAME.");
} else {
  alert("TIED....! PLEASE PLAY AGAIN.")
  console.log("TIED....!\n" ,"PLEASE PLAY AGAIN.");
}