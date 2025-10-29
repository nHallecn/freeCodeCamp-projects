** start of script.js **

const inventory=[]

function findProductIndex(productName) {
  const lowerCaseName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseName) {
      return i;
    }
  }
  return -1;
}

function addProduct(product){
  const lowerCaseName = product.name.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${lowerCaseName} quantity updated`);
  } else {
    const newProduct = {
      name: lowerCaseName,
      quantity: product.quantity,
    };
    inventory.push(newProduct);
    console.log(`${lowerCaseName} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const lowerCaseName = productName.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  if (index === -1) {
    console.log(`${lowerCaseName} not found`);
    return;
  }

  const currentQuantity = inventory[index].quantity;

  if (currentQuantity < quantity) {

    console.log(
      `Not enough ${lowerCaseName} available, remaining pieces: ${currentQuantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;
  const remainingQuantity = inventory[index].quantity;

  if (remainingQuantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${lowerCaseName} pieces: ${remainingQuantity}`);
}

console.log(addProduct({name: "FLOUR", quantity: 5}))

** end of script.js **

