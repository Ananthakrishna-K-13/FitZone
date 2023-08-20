# FitZone
Unleash your fitness potential through our comprehensive website, offering exercise tutorials with GIFs, personalized YouTube suggestions, and essential health calculators for BMI, daily calories, and ideal weight guidance. It also has feautures for users to add certain exercises to favourites and check them later. Login/SignUp is necassary to use this app and is very simple.


## Environment Variables
To run this project create a .env file in the Frontend and Backend directory each and add the following environment variables.<br />

In the Frontend/.env file:<br />
`REACT_APP_RAPID_API_KEY`<br />

In the Backend/.env file:<br />
`MONGO_URI`<br />
`JWT_SIGN`<br />

You can contact me for my .env files or create your own. To create your own, resources are given below:
<br/>
1. Create an account on [RapidApi](https://rapidapi.com/hub) and subscribe to these Apis for free to get the api key:
  * [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
  * [Youtube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)
  * [Fitness Calculator](https://rapidapi.com/malaaddincelik/api/fitness-calculator)

2. Create a [MongoDB Atlas](https://www.mongodb.com/atlas/database) account for free and get a URI to your database and use it int the .env file.
  
3. JWT_SIGN can be any string.


## Run Locally
Clone the project
```bash
  git clone https://github.com/Ananthakrishna-K-13/FitZone.git
```
Go to the Backend directory
```bash
  cd FitZone/Backend
```
Install node_packages
```bash
  npm install
```
Start the backend server
```bash
  nodemon index
```
Open a new terminal and go to the Frontend directory
```bash
  cd FitZone/Frontend
```
Install node_packages
```bash
  npm install
```
Start the frontend server
```bash
  npm start
```


## Usage
Inorder to use the website login/SignUp is necessary.<br/>

If you are using my MONGO_URI you can login with these credentials:<br/>
`username:user`<br/>
`password:password123`<br/>

If you are using your own MONGO_URI, SignUp before login to explore the website.<br/>

## Contact

* Ananthakrishna.K@iiitb.ac.in

