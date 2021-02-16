/*   IST PROJECT this simple CLI App (A cricket quiz to test your cricket knowledge)
              BY:-TUSHAR KASHYAP 
              */


             var readlineSync = require("readline-sync")
             const chalk = require('chalk');
             var score = 0;
             
             console.log(chalk.red(' 😊 👋 Hey Buddy Welcome !! 😊 '));
             console.log("\n");
             
             console.log(chalk.blue("I am Tushar i create this game 🥰  Hope you will enjoy  🎉"));
             console.log("\n");
             
             var userName = readlineSync.question('Please your name :- ');
             console.log("\n");
             
             console.log(chalk.green("So Now We Will Check how much " + userName + " is die ❤️  Cricket 🏏  Fan 😎"))
             console.log("\n");
             
             console.log(chalk.yellow("For 1 ✔️  correct answer you will get 1 point and For a 1 WRONG ❌  answer -1 deducted from score"));
             console.log("\n");
             
             // function part
             function play(questions, answers) {
               var userAnswer = readlineSync.question(questions);
               if (userAnswer.toUpperCase() === answers.toUpperCase()) {
                 console.log(chalk.green("Right!"));
                 score = score + 1;
               } else {
                 console.log(chalk.red("Wrong!"));
                 score = score - 1;
               }
             
               console.log("Your Current Score 💯 till now is :- ", score);
               console.log("* * * * * * * * * * * * * * * * * *");
               console.log("\n");
             }
             
             // function part end..
             var arr = [{
               question: " 1) Which country won the first Cricket World Cup 🏆 in 1975 ? \n" + "\n" + "a: Australia" + "\n" + "b: WestIndia" + "\n" + "c: India" + "\n" + "Ans: ",
               answer: "b"
             }, {
               question: "2) which ipl team won first ipl trophy ie (2008)?" + "\n" + "a: cheenai super kings" + "\n" + "b: kolkata knigth riders" + "\n" + "c: Rajasthan Royals" + "\n" + "Ans: ",
               answer: "c"
             }, {
               question: "3) Who score highest score in worldcup 2011 finals🎖️ (india 🇮🇳 VS srilanka 🇱🇰) ?" + "\n" + "a: Sachin " + "\n" + "b: Gautam Gambhir " + "\n" + "c: Ms.dhoni" + "\n" + "Ans: ",
               answer: "b"
             }, {
               question: "4) What is the highest 🥇 individual score in ipl till now" + "\n" + "a: 175*" + "\n" + "b: 158*" + "\n" + "c: 127" + "\n" + "Ans: ",
               answer: "a"
             }, {
               question: "5) Which national team are called “Baggy Greens”? " + "\n" + "a: Australia" + "\n" + "b: Pakistan" + "\n" + "c: Bangladesh" + "\n" + "Ans: ",
               answer: "a"
             }, {
               question: "6) In which year kolkata knight riders won first ipl 🏆 trophy ?" + "\n" + "a: 2008" + "\n" + "b: 2009" + "\n" + "c: 2012" + "\n" + "Ans: ",
               answer: "c"
             }, {
               question: "7) In 2021 india won test at GABBA 🏟️ after how many years?" + "\n" + "a: 132" + "\n" + "b: 32" + "\n" + "c :50" + "\n" + "Ans: ",
               answer: "b"
             }, {
               question: "8) who is the man of the series 🌟 in worldcup 2011" + "\n" + "a: yuvraj singh" + "\n" + "b: shahid afridi" + "\n" + "c: sachin" + "\n" + "Ans: ",
               answer: "a"
             }, {
               question: "9) what is the speed of fastest 💨 dilevery ever bowled in cricket ?" + "\n" + "a: 163.3kph" + "\n" + "b: 171.3kph" + "\n" + "c: 161.3kph" + "\n" + "Ans:  ",
               answer: "c"
             }, {
               question: "10) Most runs scored in one over in an international🏟️ match ?" + "\n" + "a: 43" + "\n" + "b: 37" + "\n" + "c: 40" + "\n" + "Ans: ",
               answer: "a"
             }];
             for (var i = 0; i < arr.length; i++) {
               var currentQuestion = arr[i];
               play(currentQuestion.question, currentQuestion.answer);
             }
             
             
             console.log(chalk.red(userName + " congratulations 🎉!! You Scored ="), score, chalk.green(" / 10"));