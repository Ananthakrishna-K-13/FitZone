# FitZone-Your fitness Partner

## Overview:
FitZone offers an extensive array of exercises, each accompanied by informative GIF videos illustrating proper execution techniques. Furthermore, the website recommends pertinent YouTube videos to further enrich your understanding of these exercises. Beyond this, the site suggests alternative exercises that target similar muscles, body parts, and equipment. It also features a BMI calculator, allowing you to assess your body mass index and gain valuable insights into your health status. Additionally, you can determine your daily calorie requirements, equipping you with the knowledge to tailor your nutrition plan effectively. To further support your fitness goals, the site provides insight into the ideal weight range for your height, empowering you with essential benchmarks for your journey towards a healthier lifestyle. You can also add specific exercises to favorites to access them later.


![homepage](Frontend/src/assets/homepage.png)

## Motivation:
The inspiration behind creating such a website came from the need for a comprehensive one-stop platform that simplifies the understanding of all fancy-named gym exercises, like the "Assisted Parallel Close Grip Pull Up". This is extremely helpful for beginners seeking guidance without a trainer or for anyone wanting to learn about a particular exercise.

My personal experience at our college made me realize this problem. There was an instance where the gym trainer was not around, and there were exercises I did not know from the whiteboard list. I had to repeatedly search online for them. This inconvenience gave me the idea of a user-friendly website to solve this problem.

## Implementation:
The frontend is built using React and CSS, while the backend is a REST-based API built using Node, Express, and MongoDB Atlas. I used the entire MERN Stack, even though I didn't have much knowledge when I started the project. <br/>

I had very little to no knowledge about web-devolpment and how websites worked. I started by learning HTML and CSS from [FreeCodeCamp.org](https://www.youtube.com/c/Freecodecamp). I then learnt JavaScript and built a very basic static website using HTML, CSS and JS while following along with tutorials by [CodeWithHarry](https://www.youtube.com/@CodeWithHarry). I then learnt React, how to use react hooks, React router, and finsihed the basic UI structure of the site. The react documentation is very well written. I then watched [Traversy media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) on how to use APIs and use fetchAPI call from JS, await, async and integrated them. I also used some React libraries like 'react-top-loading-bar', 'react-type-animation'. I then came to know about responsive websites and made my website mobile friendly. I have styled everything including animations(except the typing animation, which I tried and realized there is a react library for it) in plain CSS, without using any framework. I then felt the need for a backend so that users can add specific exercises to favourites and access them later. I learned node and building apis using express from [Traversy media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA). I used MongoDB atlas to store user info and favourites. I learnt about Json web token to store login state and implemented that.

## Technologies/libraries used
* React
* MongoDB
* Express
* NodeJS
* mongooose
* JSON web token
* Rapid API
* react-type-animation
* react-toastify(used for notifications during login/signup like username already taken, wrong credentials etc.)
* react-router-dom
* react-top-loading-bar

## Experience:
I enjoyed building this site as it was my first completely self-built website from scratch. I faced some frustrations due to problems like the free API usage limit, for which I had to create many extra Google accounts. Overall, it was a great learning experience. This project has increased my interest in WebDev and development in general. I plan to learn Bootstrap for easier styling and responsiveness, and I'm also exploring automation with Selenium. Additionally, I want to delve into DevOps. Please consider checking my GitHub profile for other projects I have built and the skills I possess. I am also involved in a Zense project, "MFRS" (Mess Food Review System), collaborating with Nitheezkhant.


## Problems faced and how I solved them:
As I was new to React/Node, I ran into numerous problems from wrong syntax to react router not scrolling the page to top, most of which were solved with the help of StackOverFlow and some other sites. Some of them are listed below.

1. I wanted useEffect to fire every time the page is reloaded, that is act like componentDidMount, I realized that an empty dependency array does this. So I left the dependency blank (not empty array) as shown below. The first picture is how it should be done, the second picture is what I did.


![problem](Frontend/src/assets/problem.png) 
![problem](Frontend/src/assets/problem1.png)


But this acted like both componentDidMount and componentDidUpdate and kept on firing useEffect and I had to empty my free usage limit of RapidApi from 2 accounts before realizing the difference and solving it. I found the solution for this on StackOverflow.


2. The setState function is asynchronous, so when initially I render the state after fetching from api, it is the state hook initialised value that Iam rendering. I had initialised my state not specific to the api response format, so when it was supposed to render for the first time it gave error as I had some functions which process the state(like toUppercase) before rendering for which the parameters werent there in the initialized state. Hence I learnt about optional chaining which basically checks if something is not null before applying methods on it. It is just condensed form of if else but it makes code look way neater as it condenses very much. 


3. Another major problem I ran into was because of bad naming, I named multiple different divs as class container even though they had differnt properties. When I changed css proprerty for one container other container's css property also changed, I was confused at first then later realized the issue. It was a difficult job to change classes of so many components again. I then came to know about sass which is a prepeocessor and makes writing css very easy but I had already written most of my styling in css so didnt think of changing it, but I will be using sass in my future projects.

4. CORS was the one causing major problems. When it first gave CORS error I thought I made an error in feth request, So I spent a lot of time checking it out. After spending too much time on it , I googled it to find that its common and easy to fix :/. I am allowing all the origins to access Backend data, ie set the allow-access-origin to "*" using the cors npm package.

5. When I attempted to host backend on render and frontend on netlify, everything worked fine except that out of the 6 API endpoints, 3 of them gave cors error "allow-access-origin not specified" even after specifying "*" for allow-access-origin. I did not find the reason nor solution for this problem, hence I had to drop the idea of hosting the website.  

6. I made a major mistake in css units. With the plan of making fluid website in the name of responsiveness, I have given font sizes in vw/vh which I realized is a mistake as it disables browser zoom. As I discovered the bug a little late, I plan to correct it after the evaluation.

## Future scope

* I was more focused on the functionality rather than the UI of the website, so I am planning to improve the web app's user interface.
* As I ran into problems while hosting the website, I want to solve all those issues and host it and also make it optimized for search engines (Search engine optimiziation SEO) .
* I plan to make dedicated workout routine for every muscle/bodyPart which enables users to choose their workout routine based on time available and target muscle which will track their workout over time and suggest harder exercises.
* I also plan to gamify it by adding points per exercise completed, which will be measured based on time spent on a particular exercise, daily challenges, competition, leaderboards etc.
* I also want to figure out a way to make the website available offine, where users can download exercises.

