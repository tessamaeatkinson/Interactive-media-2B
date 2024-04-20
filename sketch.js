// Define arrays for the three reels and the symbols they currently display
// Help using the code from https://editor.p5js.org/ and https://www.w3schools.com/
// Help using chatGPT
// Help using copilot for code and comments 
let reels = [["W", "D", "R"], ["W", "D", "R"], ["W", "D", "R"]];
let currentSymbols = ["W", "D", "R"];
let spinning = [false, false, false]; // Track whether each reel is spinning

function preload() {
  img = loadImage('slot.png'); // Load the image before setup
  font = loadFont('jellies.italic.ttf'); // Load the font before setup
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Set up the canvas size

  textSize(72); // Set text size for the symbols
  textAlign(CENTER, CENTER); // Align text to be centered
  textFont(font); // Set the font for the symbols
  frameRate(10); // Slow down the frame rate for easier viewing of spinning
  let button = createButton("Spin",); // Create a button to spin the reels
  button.position(612, 653); // Position the button
  button.size(184, 30); // Set the size of the button
  button.mousePressed(startSpinning); // Call startSpinning when the button is clicked
  button.style('font-style', 'bold'); // Set the font style of the button (italic
  button.style('font-size', '20px'); // Set the font size of the button
  button.style('font-weight', 'bold'); // Set the font weight of the button (bold)
  button.style('background-color', 'red'); // Set the background color of the button
  button.style('color', '000'); // Set the text color of the button
  button.style('border-radius', '40px'); // Set the border radius of the button
  button.style('border-color', 'dark red'); // Set the border color of the button
  cursor(HAND); // Change the cursor to a hand when hovering over the button
}

function draw() {
  background(255); // Set a light gray background
  image(img, 0, 0, width, height); // Draw the image behind the background

  let centerX = width / 2; // Calculate the x-coordinate of the center of the window
  let centerY = height / 1.94; // Calculate the y-coordinate of the center of the window
  let spacing = 180; // Spacing between each box

  for (let i = 0; i < 3; i++) {
    // Calculate the x-coordinate of the center of each box
    let boxCenterX = centerX + (i - 1.08) * spacing;
    // Calculate the left coordinate of each box
    // Calculate the top coordinate of each box

    // Display each symbol in the center of the box
    text(currentSymbols[i], boxCenterX, centerY);

    if (spinning[i]) {
      currentSymbols[i] = random(reels[i]); // Change the symbol randomly if spinning
    }
  }
}
function mousePressed() {
  let startX = 500; // Define the start x-coordinate of the clickable area
  let endX = 700; // Define the end x-coordinate of the clickable area
  let startY = 600; // Define the start y-coordinate of the clickable area
  let endY = 700; // Define the end y-coordinate of the clickable area

  // Check if the click is within the clickable area
  if (mouseX >= startX && mouseX <= endX && mouseY >= startY && mouseY <= endY) {
      if (!spinning[0] && !spinning[1] && !spinning[2]) {
          startSpinning();
      }
  }
}

// Function to start spinning all reels
function startSpinning() {
  if (!spinning[0] && !spinning[1] && !spinning[2]) {
      for (let i = 0; i < 3; i++) {
          spinning[i] = true;
          setTimeout(stopReel, 1000 + i * 500, i); // Set different delays for each reel to stop
      }
  }
}

function stopReel(reelIndex) {
  spinning[reelIndex] = false; // Stop the specified reel

  // Check if all reels have stopped
  if (!spinning[0] && !spinning[1] && !spinning[2]) {
    checkResult(); // Check the result when all reels are stopped
  }
}

function checkResult() {
  // If all three symbols are the same
  if (currentSymbols[0] == "W" && currentSymbols[1] =="W" && currentSymbols[2] == "W") {

    window.location.href = 'html/workshops.html'; 
  }
  if (currentSymbols[0] == "D" && currentSymbols[1] =="D" && currentSymbols[2] == "D") {
    window.location.href = 'html/development.html'; 
  }
  if (currentSymbols[0] == "R" && currentSymbols[1] =="R" && currentSymbols[2] == "R") {

    window.location.href = 'html/research.html'; 
  }
}