# FitZone-Your fitness Partner

## Overview:
Fitzone offers an extensive array of exercises, each accompanied by informative GIF videos illustrating proper execution techniques. Furthermore, the website recommends pertinent YouTube videos to further enrich your understanding of these exercises. Beyond this, the site recommends alternative exercises that target similar muscles, body parts, and equipment. It also features a BMI calculator, allowing you to assess your body mass index and gain valuable insights into your health status. Additionally, you can determine your daily calorie requirements, equipping you with the knowledge to tailor your nutrition plan effectively. And to support your fitness goals even further, the site provides insight into the ideal weight range for your height, empowering you with essential benchmarks for your journey towards a healthier lifestyle.


![homepage](homepage.png)

## Motivation:
The inspiration behind creating such a website came from the need for a comprehensive one-stop platform that simplifies the understanding of all fancy named gym exercises like the "Assisted Parallel Close Grip Pull Up".This is extremely helpful to beginners seeking guidance without a trainer or anyone who wants to know about an exercise.

My personal experience at our college made me realise this problem. There was a instance where the gym trainer was not around, and there were exercise which I did not know, in the white board where they write a list of exercises based on the day's theme. I had to repeatedly search them online and everytime I searched a new exercise, I had to search a new webiste as it wasnt there in the previous one. This inconvenience gave me an idea of a user friendly website which solves this problem.

## Implementation:
I had very little to no knowledge about web-devolpment and how websites worked. I started by learning HTML and CSS from [FreeCodeCamp.org](https://www.youtube.com/c/Freecodecamp). I then learnt JavaScript and built a very basic static website using HTML, CSS and JS while following along with tutorials by [CodeWithHarry](https://www.youtube.com/@CodeWithHarry). I then learnt React, how to use react hooks, React router, and finsihed the basic UI structure of the site. I then watched [Traversy media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) on how to use APIs and use fetchAPI call from JS, await, async and integrated them. I thought of learning Backend and implementing it as well, but was not sure if I would finish it by deadline hence had to settle for third party APIs. I also used some React libraries like 'react-top-loading-bar', 'react-type-animation'. I then came to know about responsive websites and made my website mobile friendly. I have styled everything including animations(except the typing animation, which I tried and realized theres a react library for it) in plain CSS, without using any framework. 

## Experience:
I enjoyed building this site very much as this was my first completely self built website from scratch. At times I got frustrated due to the problems I ran into, mainly the free API usage limit, I had to create 5 extra google accounts to avail free API usage, but overall it was a great experience. This project has increased my interest in WebDev and devolopment in general. I further plan to learn MERN stack, and also explore GameDev. 

## Problems faced and how I solved them:
As I was new to React, I ran into numerous problems from wrong syntax to react router not scrolling the page to top, most of which were solved with the help of StackOverFlow and some other sites. Some of them are listed below.

1. I wanted useEffect to fire every time the page is reloaded, that is act like componentDidMount, I realized that an empty dependency array does this. So I left the dependency blank (not empty array) as shown below. The first picture is how it should be done, the second picture is what I did.


![problem](problem.png) 
![problem](Problem1.png)


But this acted like both componentDiDMount and componentDidUpdate and kept an firing useEffect and I had to empty my free usage limit of RapidApi from 2 accounts before realizing the difference and solving it. I found the solution for this on StackOverflow.


2. The setState function is asynchronous, so when initially I render the state after fetching from api, it is the state hook initialised value that Iam rendering. I had initialised my state not specific to the api response formst, so when it was supposed to render for the first time it gave error as I had some functions which process the state(like toUppercase) before rendering for which the parameters werent there in the initialized state. Hence I learnt about optional chaining which basically checks if something is not null before applying methods on it. It is just condensed form of if else but it makes code look way neater as it condenses very much. 


3. Another major problem I ran into was because of bad naming, I named multiple different divs as class container even though they had differnt properties. When I changed css proprerty for one container other container's css property also changed, I was confused at first then later realized the issue. It was a difficult job to change classes of so many components again.

## Future scope

I plan to create a backend with login/signup functionality, allowing users to save/like particular exercises for easy access.
I also plan to make dedicated workout routine for every muscle/bodyPart which enables users to choose their workout routine based on time available and target muscle which will track their workout over time and suggest harder exercises.
I also plan to gamify it by adding points per exercise completed which will be measured based on time spent on a particular exercise.


