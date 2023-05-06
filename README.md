# DOMMAN

![Image of landing page](/public/assets/github/landing.png 'Landing Image')

## Technologies

The following technologies were used to develop this project:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- JavaScript
- HTML
- CSS

## Prerequisites

Before using this project, make sure that you have installed Node.js on your local machine. You can download and install Node.js from the official website: <https://nodejs.org/en/download/>.

To check if Node.js is installed, open a terminal or command prompt and run the following command:

`$ node -v`

If Node.js is installed, you will see the version number printed in the terminal. If it is not installed, please download and install it before proceeding with this project.

## Installation

1. Clone the repository to your local machine:
   `$ git clone https://github.com/Jotaherrera/DOMMAN.git`

2. Navigate to the project directory:
   `$ cd DOMMAN`

3. Install the required npm packages:
   `$ npm install`

   This will install all the necessary packages and dependencies required to run the project.

4. Start the project:
   `$ npm run start`

   This will start the project on your local machine. You can now view it in your browser at <http://localhost:3000>.

## Operation

The program has three controls that affect the way the words are displayed:

1. **Slider bar:** This control adjusts the speed of the word display. Moving the slider to the right increases the speed, while moving it to the left decreases the speed. The words will always appear in the center of the screen.

2. **Play/Pause button:** This control toggles the display on and off. Pressing the button will pause the display, and pressing it again will resume the display.

3. **Stop button:** This control resets the display to the first word in the list.

Additionally, if you add `/words` to the URL (<http://localhost:3000/words>), you will be able to view a portion of the data extracted from the MongoDB Atlas database. Please note that this API functionality currently does not provide the entire database data and field. In the future, it will be able to show all the content of the database. When the API is complete, it will be separated from the project to live independently and provide direct access to the data extracted from the database.
