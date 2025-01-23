// Select the elements for normal and reverse triangle containers
const normalTriangleContainer = document.querySelector("#normal-triangle");
const reverseTriangleContainer = document.querySelector("#reverse-triangle");
const squarePatternContainer = document.querySelector("#square-pattern");
const diamondPatternContainer = document.querySelector("#diamond-pattern")

// Function to generate the normal triangle pattern
const generateTriangle = () => {
  let pattern = "";
  for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "<br>";
  }
  return pattern;
};

// Function to generate the reverse triangle pattern
const generateReverseTriangle = () => {
  let pattern = "";
  for (let i = 5; i >= 1; i--) {
    pattern += "*".repeat(i) + "<br>"; 
  }
  return pattern;
};

// Function to generate the square pattern 
const generateSquare = () => {
  let pattern = "";
  for (let i=1; i<=5; i++) {
    pattern += "*".repeat(5) + "<br>";
  }
  return pattern;
};

// Function to generate Diamond Pattern
function generateDiamond(size = 5) {
  let pattern = '';

  // Upper half
  for (let i = 1; i <= size; i++) {
    pattern += ' '.repeat(size - i) + '*'.repeat(2 * i - 1) + '<br>'; 
  }

  // Lower half
  for (let i = size - 1; i >= 1; i--) {
    pattern += ' '.repeat(size - i) + '*'.repeat(2 * i - 1) + '<br>';
  }

  return pattern;
}

// Generate the patterns and set the innerHTML for the respective containers
normalTriangleContainer.innerHTML = generateTriangle();
reverseTriangleContainer.innerHTML = generateReverseTriangle();
squarePatternContainer.innerHTML = generateSquare();
diamondPatternContainer.innerHTML = generateDiamond();
