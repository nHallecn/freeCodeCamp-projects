** start of script.js **

function navigate(commands) {
  let history = ["Home"];
  let currentIndex = 0;
  let currentPage = "Home";

  for(const command of commands){

    if(command.startsWith("Visit")){
      const newPage = command.substring(6);
      history.splice(currentIndex + 1);
      history.push(newPage);
      currentIndex = history.length - 1;
      currentPage = newPage;
    } 
    else if(command === "Back"){
      if(currentIndex > 0){
        currentIndex  = currentIndex - 1;
        currentPage = history[currentIndex];
      } 
    }
     else if(command === "Forward"){ // CORRECTED: Added the missing 'r'
      if(currentIndex < history.length - 1){ // CORRECTED: 'length' property
        currentIndex = currentIndex + 1;
        currentPage = history[currentIndex];
      }
    }
  }
  return currentPage;
}

** end of script.js **

