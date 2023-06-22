# Expense-tracker

## About

**Expense Tracker** is a web application to help peoples tracking,
categorizing and analyzing their expenses.

The application built up with Java Springboot backend and React frontend.
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
<img src="https://imgur.com/UM2ECjf.png" width="400px">

## Setup

* To run this application required _**Docker-Compose**_ on your computer.
* After you cloned my repository, open a terminal window in the root folder and run this command:
`docker-compose up`
* It will take a little time downloading dependencies and installing it.
After that you can reach the application at http://localhost:3000
* To stop the application run: `docker-compose down`

## Status

This project currently work in progress. Besides I implement a bunch of features.
Spring Security is implemented fully which means that you can register and after that you
can log in with your credentials. It is also connected to the frontend so postman is not required.

After you logged in you will be redirected to the main page where the skeleton of the 
*Monthly* *Daily* *Yearly* *Detailed* view skeleton is already visible. Which means that the frontend part
of the main page is almost done and I have already created some custom hook for fetching.


## Features

In the future this application will be served as an expense tracker which means the following features:
- adding expenses
- calculating monthly yearly and daily expense
- showing expense categories e.g.: traveling, food, entertainment, health-care, hobby
- setting expense warning if you reached your limit (which you can set in the profile page) you will get a notification

## Technologies

- Java 
- Springboot
- Spring Security with JWT token authentication
- JPA with Hibernate
- Postgresql for database
- Javascript
- React
- MaterialUI

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
