// Constructor function
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// Methods
BoardMember.prototype.veto = function() {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};

// --- Browser interaction ---
let member; // global reference to the created member

function createMember() {
  const name = document.getElementById("name").value;
  const homeState = document.getElementById("homeState").value;
  const training = document.getElementById("training").value;

  member = new BoardMember(name, homeState, training);

  document.getElementById("buttons").style.display = "block";
  showOutput(`Board member ${name} created!`);
}

function showOutput(message) {
  document.getElementById("output").textContent = message;
}
