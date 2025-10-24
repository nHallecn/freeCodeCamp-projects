
let lunches = [];

function addLunchToEnd(lunchArray, lunchItem) {
  lunchArray.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunchArray;
}

function addLunchToStart(lunchArray, lunchItem) {
  lunchArray.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchArray;
}

function removeLastLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = lunchArray.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return lunchArray;
}

function removeFirstLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = lunchArray.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return lunchArray;
}

function getRandomLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunchArray.length);
    const randomLunch = lunchArray[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("The menu is empty.");
  } else {
    const menuString = lunchArray.join(", ");
    console.log(`Menu items: ${menuString}`);
  }
}

