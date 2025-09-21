// Write your code in this file!
const currentUser = 'Grace Hopper';

// interpolation

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// backticks allow us to interpolate with ${}
// .sclice() allows us to return specific characters
const shortGreeting =`Welcome, ${currentUser.slice(0,1)}!`;
