** start of script.js **

function getAverage(arr){
  let num = arr.length;
  let sum=0;
  let average;
  for(let i=0;i<num;i++){
    sum+=arr[i];
    average = sum/num;
  }
  return average;
}

function getGrade(score){
  if(score===100) return "A+"
  else if (score <=99 && score >=90) return "A"
  else if (score <=89 && score >=80) return "B"
  else if (score <=79 && score >=70) return "C"
  else if (score <=69 && score >=60) return "D"
  else if (score <=59 && score >=0) return "F"
}

function hasPassingGrade(score){
  let grade = getGrade(score);
  if(grade=="A+"|| grade=="A"|| grade=="B"|| grade=="C"|| grade=="D") return true
  else if(grade=="F") return false
}

function studentMsg(arr,score){
  let classAverage = getAverage(arr);
  let passed = hasPassingGrade(score);
  let grade = getGrade(score);
  if( passed == true){
    return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`
  }
  else if(passed == false){
    return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`
  }
}



console.log(getAverage([56, 23, 89, 42, 75, 11, 68, 34, 91, 19]))
console.log(getGrade(84))
console.log(hasPassingGrade(75))
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))

** end of script.js **

