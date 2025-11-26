** start of script.js **

const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"}
};

class ProjectIdea{
  constructor(title, description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus){
    this.status = newStatus;
  }
}

class ProjectIdeaBoard{
  constructor(title){
    this.title = title;
    this.ideas = [];
  }
  pin(idea){
    this.ideas.push(idea);
  }

  unpin(idea){
    this.ideas.splice(idea);
  }

  count(arr){
    return this.ideas.length;
  }

  formatToString() {
  let output = `${this.title} has ${this.count()} idea(s)\n`;
  this.ideas.forEach(idea => {
    output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
  });
  return output;
}

}



** end of script.js **

