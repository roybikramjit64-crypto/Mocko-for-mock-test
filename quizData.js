const quizData = {
    mathematics: [
        {
            title: "Sample - tutorial",
            category: "Arithmetic",
            totalDuration: 5, //Minutes
            totalMarks: 10,
            questionSet: [
                {
                    id: 1,
                    question: "Which of the following numbers is prime?",
                    options: [
                        { text: "161" },
                        { text: "221" },
                        { text: "373" },
                        { text: "437" },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "What least number of five digits is exactly divisible by 41?",
                    options: [
                        { text: "10045" },
                        { text: "10004" },
                        { text: "10041" },
                        { text: "10025" },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "What least value must be given to * so that the number 97215*6 is divisible by 11?",
                    options: [
                        { text: "3" },
                        { text: "2" },
                        { text: "1" },
                        { text: "5" },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "Which of the following numbers is exactly divisible by 99?",
                    options: [
                        { text: "3572404" },
                        { text: "135792" },
                        { text: "913464" },
                        { text: "114345" },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "In a question on division with zero remainder, a candidate took 12 as divisor, instead of 21. The quotient obtained by him was 35. The correct quotient is:",
                    options: [
                        { text: "0" },
                        { text: "12" },
                        { text: "13" },
                        { text: "20" },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "When n is divided by 4, the remainder is 3. What will be the remainder when 2n is divided by 4?",
                    options: [
                        { text: "1" },
                        { text: "2" },
                        { text: "3" },
                        { text: "0" },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "What least number must be subtracted from 1294 so that the remainder when divided by 9, 11, 13 will leave in each case the same remainder 6?",
                    options: [
                        { text: "0" },
                        { text: "1" },
                        { text: "2" },
                        { text: "3" },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "If three-fifths of 60% of a number is 36, the number is:",
                    options: [
                        { text: "100" },
                        { text: "80" },
                        { text: "75" },
                        { text: "90" },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "If the unit digit in (549 x 56 x 28* x 684) be 8, then what digit will be there in place of *?",
                    options: [
                        { text: "4" },
                        { text: "3" },
                        { text: "2" },
                        { text: "1" },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "1008 x 992 = ?",
                    options: [
                        { text: "990936" },
                        { text: "999816" },
                        { text: "969836" },
                        { text: "999936" },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "(11<sup>2</sup> + 12<sup>2</sup> + 13<sup>2</sup> + 14<sup>2</sup> + ..... + 20<sup>2</sup>) = ?",
                    options: [
                        { text: "385" },
                        { text: "2485" },
                        { text: "2870" },
                        { text: "3235" },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "&radic;? = (88 &times 42) &divide 16",
                    options: [
                        { text: "3696" },
                        { text: "39660" },
                        { text: "43163" },
                        { text: "53361" },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "{(476 + 424)<sup>2</sup> – 4 &times 476 &times 424} = ?",
                    options: [
                        { text: "2906" },
                        { text: "3116" },
                        { text: "2704" },
                        { text: "2904" },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The sum and product of two numbers are 12 and 35 respectively. The sum of their reciprocals is:",
                    options: [
                        { text: "12/35" },
                        { text: "1/35" },
                        { text: "35/8" },
                        { text: "7/32" },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "The numbers 1, 2, 3, 4, ....., 1000 are multiplied together. The number of zeros at the end of the product must be",
                    options: [
                        { text: "30" },
                        { text: "130" },
                        { text: "200" },
                        { text: "249" },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
            ]
        },

        {
            title: "Numbers - Chapter 1",
            category: "Arithmetic",
            totalDuration: 45, //Minutes
            totalMarks: 30,
            questionSet: [
                {
                    id: 1,
                    question: "Write each of the following in expanded form:<br>i) 5,16,287<br>ii) 13,25,694",
                    options: [
                        { text: "i) 50000 + 10000 + 6000 + 200 + 80 + 7<br>ii) 100000 + 300000 + 25000 + 5000 + 600 + 90 + 4", correct: false },
                        { text: "i) 500000 + 10000 + 6000 + 200 + 80 + 7<br>ii) 1000000 + 300000 + 20000 + 5000 + 600 + 90 + 4", correct: true },
                        { text: "i) 500000 + 16000 + 200 + 80 + 7<br>ii) 1300000 + 25000 + 600 + 94", correct: false },
                        { text: "i) 500000 + 10000 + 6000 + 200 + 87<br>ii) 1000000 + 300000 + 20000 + 5000 + 694", correct: false },
                    ],
                    marks: 2,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "Write down three consecutive whole numbers succeeding 72,597.",
                    options: [
                        { text: "72,596; 72,595; 72,594", correct: false },
                        { text: "72,598; 72,599; 72,601", correct: false },
                        { text: "72,598; 72,599; 72,600", correct: true },
                        { text: "72,597; 72,598; 72,599", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "Write all possible 2-digit numbers formed by the digits 3, 7 and 9, when repetition of digits is not allowed.",
                    options: [
                        { text: "37, 39, 73, 79, 93, 97", correct: true },
                        { text: "33, 37, 39, 73, 77, 79, 93, 97, 99", correct: false },
                        { text: "37, 39, 79, 97", correct: false },
                        { text: "37, 39, 73, 79, 93", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "The successor of –16 is",
                    options: [
                        { text: "–17", correct: false },
                        { text: "17", correct: false },
                        { text: "–15", correct: true },
                        { text: "15", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "Write the smallest 4-digit number that can be formed by the digits 0, 1, 3 and 6, using each digit only once:",
                    options: [
                        { text: "1306", correct: false },
                        { text: "0136", correct: false },
                        { text: "1063", correct: false },
                        { text: "1036", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "Write the greatest 4-digit number of four different digits. [Hint: The greatest 4 different digits are 9, 8, 7 and 6]",
                    options: [
                        { text: "9876", correct: true },
                        { text: "9999", correct: false },
                        { text: "9867", correct: false },
                        { text: "8976", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "Arrange the following numbers in descending order:<br>93,68,516; 1,05,40,603; 9,10,32,401; 93,67,839; 1,05,41,201",
                    options: [
                        { text: "93,67,839 > 93,68,516 > 1,05,41,201 > 9,10,32,401", correct: false },
                        { text: "9,10,32,401 > 1,05,40,603 > 1,05,41,201 > 93,68,516 > 93,67,839", correct: false },
                        { text: "9,10,32,401 > 1,05,41,201 > 1,05,40,603 > 93,68,516 > 93,67,839", correct: true },
                        { text: "9,10,32,401 > 1,05,41,201 > 1,05,40,603 > 93,67,839 > 93,68,516", correct: false },
                    ],
                    marks: 2,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "The population of Andhra Pradesh and Telengana are 6,30,20,208 and 3,52,86,757 respectively. By how much does the population of Andhra Pradesh exceed that of Telengana?",
                    options: [
                        { text: "2,77,34,551", correct: false },
                        { text: "3,77,33,451", correct: false },
                        { text: "2,78,33,451", correct: false },
                        { text: "2,77,33,451", correct: true },
                    ],
                    marks: 2,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "A number exceeds 47,56,908 by 16,34,096. Find the number.",
                    options: [
                        { text: "31,22,812", correct: false },
                        { text: "63,91,004", correct: true },
                        { text: "63,90,004", correct: false },
                        { text: "64,01,004", correct: false },
                    ],
                    marks: 2,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "A man had ₹1,35,00,000 with him. He gave ₹56,32,560 to his wife, ₹37,84,890 to his son and the balance to his daughter. How much money does the daughter get?",
                    options: [
                        { text: "₹41,82,550", correct: false },
                        { text: "₹94,17,450", correct: false },
                        { text: "₹40,82,550", correct: true },
                        { text: "₹40,82,450", correct: false },
                    ],
                    marks: 2,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "The cost of a chair is ₹1,586. How much will such 245 chairs cost?",
                    options: [
                        { text: "₹3,88,570", correct: true },
                        { text: "₹3,88,470", correct: false },
                        { text: "₹3,78,570", correct: false },
                        { text: "₹3,85,570", correct: false },
                    ],
                    marks: 2,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "The additive inverse of 5 is",
                    options: [
                        { text: `<math display="inline"><mfrac><mn>1</mn><mn>5</mn></mfrac></math>`, correct: false },
                        { text: "–5", correct: true },
                        { text: "0", correct: false },
                        { text: "–4", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "A factory produces 9,675 screws in a day. How many screws will it produce in an ordinary year?",
                    options: [
                        { text: "35,31,375", correct: true },
                        { text: "35,41,050", correct: false },
                        { text: "35,31,275", correct: false },
                        { text: "34,31,375", correct: false },
                    ],
                    marks: 2,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The product of two numbers is 17,20,740. If one of the numbers is 1,785. Find the other.",
                    options: [
                        { text: "946", correct: false },
                        { text: "966", correct: false },
                        { text: "864", correct: false },
                        { text: "964", correct: true },
                    ],
                    marks: 2,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "A man covers 36 km in 1 hour. Find his speed in metres/sec.",
                    options: [
                        { text: "36 m/sec", correct: false },
                        { text: "10 m/sec", correct: true },
                        { text: "130 m/sec", correct: false },
                        { text: "1 m/sec", correct: false },
                    ],
                    marks: 2,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 16,
                    question: "Find the sum:<br>i) 16 + (–21)<br>ii) (–32) + (–47).",
                    options: [
                        { text: "i) 5<br>ii) –79", correct: false },
                        { text: "i) –5<br>ii) 79", correct: false },
                        { text: "i) –37<br>ii) –15", correct: false },
                        { text: "i) –5<br>ii) –79", correct: true },
                    ],
                    marks: 2,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 17,
                    question: "Find the difference:<br>i) 24 – (–24)<br>ii) (–80) – (–20)",
                    options: [
                        { text: "i) 0<br>ii) –100", correct: false },
                        { text: "i) 48<br>ii) –100", correct: false },
                        { text: "i) 48<br>ii) –60", correct: true },
                        { text: "i) 0<br>ii) –60", correct: false },
                    ],
                    marks: 2,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 18,
                    question: "What should be added to 15 to get (–15)?",
                    options: [
                        { text: "–15", correct: false },
                        { text: "0", correct: false },
                        { text: "–30", correct: true },
                        { text: "30", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 19,
                    question: "The sum of two integers is –22. If one of them is 8, then the other is:",
                    options: [
                        { text: "–14", correct: false },
                        { text: "14", correct: false },
                        { text: "–30", correct: true },
                        { text: "None of these", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
            ]
        },

        {
            title: "Numbers - Integers",
            category: "Arithmetic",
            totalDuration: 40, //Minutes
            totalMarks: 20,
            questionSet: [
                {
                    id: 1,
                    question: "Round the following number to the nearest hundred:<br>41,263",
                    options: [
                        { text: "41,200", correct: false },
                        { text: "41,000", correct: false },
                        { text: "41,300", correct: true },
                        { text: "41,260", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "Find the approximate difference to the nearest thousand:<br>38,005 – 29,375",
                    options: [
                        { text: "8,000", correct: false },
                        { text: "10,000", correct: false },
                        { text: "9,000", correct: true },
                        { text: "8,630", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "Estimate the following product by rounding off each number to the nearest hundred:<br>457 × 872", //
                    options: [
                        { text: "450,000", correct: true },
                        { text: "360,000", correct: false },
                        { text: "400,000", correct: false },
                        { text: "398,504", correct: false },
                    ],
                    marks: 2,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "Find the approximate quotient for the following:<br>865 ÷ 38",
                    options: [
                        { text: "20", correct: false },
                        { text: "22.7", correct: false },
                        { text: "21.6", correct: false },
                        { text: "22", correct: true },
                    ],
                    marks: 2,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "0 is the smallest counting number?",
                    options: [
                        { text: "True, because it is the lowest whole number value.", correct: false },
                        { text: "False, because counting numbers start from 1.", correct: true },
                        { text: "True, because it represents nothingness.", correct: false },
                        { text: "False, because negative numbers are smaller than 0.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "Fill in the blanks by using >, < or = in the following:<br>–23___–16 and 15___–15",
                    options: [
                        { text: "> and =", correct: false },
                        { text: "< and >", correct: true },
                        { text: "> and >", correct: false },
                        { text: "< and =", correct: false },
                    ],
                    marks: 2,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "Evaluate the following:<br>|–8| + |–6| – |–10|",
                    options: [
                        { text: "–24", correct: false },
                        { text: "–4", correct: false },
                        { text: "4", correct: true },
                        { text: "24", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "Write the predecessor of: –91",
                    options: [
                        { text: "–90", correct: false },
                        { text: "–92", correct: true },
                        { text: "90", correct: false },
                        { text: "–91", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "Find the difference:<br>(–36) – (64)",
                    options: [
                        { text: "28", correct: false },
                        { text: "–28", correct: false },
                        { text: "–100", correct: true },
                        { text: "100", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "Find the difference:<br>(–12) – (–71)",
                    options: [
                        { text: "–83", correct: false },
                        { text: "59", correct: true },
                        { text: "–59", correct: false },
                        { text: "83", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "Which of the following statements is TRUE?<br>i) The sum of two integers is always an integer.<br>ii) The absolute value of every integer is a positive integer.<br>iii) Every whole number is an integer.<br>iv) The sum of two integers can never be zero.",
                    options: [
                        { text: "i), ii)", correct: false },
                        { text: "i), iii)", correct: true },
                        { text: "ii), iii), iv)", correct: false },
                        { text: "i), ii), iii), iv)", correct: false },
                    ],
                    marks: 2,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "A car travelled east of Delhi by 100 km and then to the west of it by 130 km. How far from Delhi was the car finally?",
                    options: [
                        { text: "30 km to the west", correct: true },
                        { text: "30 km to the east", correct: false },
                        { text: "230 km to the west", correct: false },
                        { text: "130 km to the west", correct: false },
                    ],
                    marks: 2,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "Write the opposite of the following statement:<br>10℃ below freezing point",
                    options: [
                        { text: "–10℃ below freezing point", correct: false },
                        { text: "10℃ above freezing point", correct: true },
                        { text: "0℃ freezing point", correct: false },
                        { text: "–10℃ above freezing point", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "Indicate the following using a negative sign:<br>53 m below sea-level",
                    options: [
                        { text: "53 m", correct: false },
                        { text: "–53 m", correct: true },
                        { text: "+53 m", correct: false },
                        { text: "0 m", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "Write all the integers between –7 and 0:",
                    options: [
                        { text: "–7, –6, –5, –4, –3, –2, –1, 0", correct: false },
                        { text: "–1, –2, –3, –4, –5, –6", correct: true },
                        { text: "–6, –5, –4, –3, –2, –1, 1", correct: false },
                        { text: "1, 2, 3, 4, 5, 6", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
            ]
        },

    ],

    history: [
        {
            title: "History - An Introduction",
            category: "Ancient",
            totalDuration: 10, //Minutes
            totalMarks: 30,
            questionSet: [
                {
                    id: 1,
                    question: "History is the study of:",
                    options: [
                        { text: "Plants", correct: false },
                        { text: "Animals", correct: false },
                        { text: "Past events", correct: true },
                        { text: "Future events", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "History is the link between:",
                    options: [
                        { text: "Present and future", correct: false },
                        { text: "Past and present", correct: true },
                        { text: "Earth and sky", correct: false },
                        { text: "Kings and queens", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "People who study and write about the past are called:",
                    options: [
                        { text: "Scientists", correct: false },
                        { text: "Historians", correct: true },
                        { text: "Teachers", correct: false },
                        { text: "Archaelogists", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: 'The Greek word "Historia" means:',
                    options: [
                        { text: "War", correct: false },
                        { text: "Kingdom", correct: false },
                        { text: "To know", correct: true },
                        { text: "Writing", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "History has_______ main sources.",
                    options: [
                        { text: "One", correct: false },
                        { text: "Two", correct: true },
                        { text: "Three", correct: false },
                        { text: "Four", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "Which of these is a literary source?",
                    options: [
                        { text: "Coins", correct: false },
                        { text: "Ramayana", correct: true },
                        { text: "Pottery", correct: false },
                        { text: "Tools", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "Which is NOT an archaeological source?",
                    options: [
                        { text: "Monuments", correct: false },
                        { text: "Coins", correct: false },
                        { text: "Arthashastra", correct: true },
                        { text: "Inscriptions", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "The study of coins is called:",
                    options: [
                        { text: "Archaeology", correct: false },
                        { text: "Epigraphy", correct: false },
                        { text: "Chronology", correct: false },
                        { text: "Numismatics", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "The study of inscription is called:",
                    options: [
                        { text: "Numismatics", correct: false },
                        { text: "Geography", correct: false },
                        { text: "Anthropology", correct: false },
                        { text: "Epigraphy", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "Ashoka's inscriptions mainly tell us about his:",
                    options: [
                        { text: "Religious beliefs and administration", correct: true },
                        { text: "Games", correct: false },
                        { text: "Family", correct: false },
                        { text: "Childhood", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "Archaeology is the study of:",
                    options: [
                        { text: "Ancient languages", correct: false },
                        { text: "Coins only", correct: false },
                        { text: "Kings only", correct: false },
                        { text: "Human life through material remains", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "Which method is used to determine the age of Archaeological finds?",
                    options: [
                        { text: "Solar Dating", correct: false },
                        { text: "Radio Carbon Dating", correct: true },
                        { text: "Water Dating", correct: false },
                        { text: "Moon Dating", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "Which civilization has an undeciphered script?",
                    options: [
                        { text: "Egyptian", correct: false },
                        { text: "Roman", correct: false },
                        { text: "Greek", correct: false },
                        { text: "Harappan", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The earliest Stone Age is:",
                    options: [
                        { text: "Mesolithic", correct: false },
                        { text: "Neolithic", correct: false },
                        { text: "Palaeolithic", correct: true },
                        { text: "Iron Age", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "Primitive people were mainly:",
                    options: [
                        { text: "Farmers", correct: false },
                        { text: "Traders", correct: false },
                        { text: "Nomads", correct: true },
                        { text: "Sailors", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 16,
                    question: "One of the greatest discoveries during the Old Stone Age was:",
                    options: [
                        { text: "Wheel", correct: false },
                        { text: "Fire", correct: true },
                        { text: "Pottery", correct: false },
                        { text: "Writing", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 17,
                    question: "Early humans were mainly:",
                    options: [
                        { text: "Farmers", correct: false },
                        { text: "Hunter-gathers", correct: true },
                        { text: "Soldiers", correct: false },
                        { text: "Craftsmen", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 18,
                    question: "Microliths were first made during the:",
                    options: [
                        { text: "Mesolithic Age", correct: true },
                        { text: "Palaeolithic Age", correct: false },
                        { text: "Neolithic Age", correct: false },
                        { text: "Iron Age", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 19,
                    question: "Towards the end of the Mesolithic Age, people discovered:",
                    options: [
                        { text: "Printing", correct: false },
                        { text: "Writing", correct: false },
                        { text: "Agriculture", correct: true },
                        { text: "Electricity", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 20,
                    question: "The New Stone Age is known as the:",
                    options: [
                        { text: "Neolithic Age", correct: true },
                        { text: "Palaeolithic Age", correct: false },
                        { text: "Mesolithic Age", correct: false },
                        { text: "Bronze Age", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 21,
                    question: "During the Neolithic Age, people first learned to:",
                    options: [
                        { text: "Use iron", correct: false },
                        { text: "Build forts", correct: false },
                        { text: "Read and write", correct: false },
                        { text: "Grow crops", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 22,
                    question: "Which of the following animals was domesticated during the Neolithic Age?",
                    options: [
                        { text: "Sheep", correct: false },
                        { text: "Goat", correct: false },
                        { text: "Cattle", correct: false },
                        { text: "All of these", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 23,
                    question: "Pottery first appeared during the:",
                    options: [
                        { text: "Palaeolithic Age", correct: false },
                        { text: "Mesolithic Age", correct: false },
                        { text: "Neolithic Age", correct: true },
                        { text: "Iron Age", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 24,
                    question: "The invention of the wheel helped mainly in:",
                    options: [
                        { text: "Hunting", correct: false },
                        { text: "Transportation and pottery", correct: true },
                        { text: "Reading", correct: false },
                        { text: "Writing", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 25,
                    question: "Which of the following is an example of secular literature?",
                    options: [
                        { text: "Vedas", correct: false },
                        { text: "Mahabharata", correct: false },
                        { text: "Arthashastra", correct: true },
                        { text: "Ramayana", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 26,
                    question: "Which statement is TRUE?",
                    options: [
                        { text: "Epigraphy is the study of coins.", correct: false },
                        { text: "Numismatics is the study of inscription.", correct: false },
                        { text: "Archaeology studies material remains.", correct: true },
                        { text: "Literary sources include monuments.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 27,
                    question: "Which sequence is correct?",
                    options: [
                        { text: "Neolithic → Mesolithic → Palaeolithic", correct: false },
                        { text: "Mesolithic → Neolithic →  Palaeolithic", correct: false },
                        { text: "Mesolithic → Palaeolithic → Neolithic", correct: false },
                        { text: "Palaeolithic → Mesolithic → Neolithic", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 28,
                    question: "Which one is NOT an archaeological source?",
                    options: [
                        { text: "Foreign travellers' accounts", correct: true },
                        { text: "Artefacts", correct: false },
                        { text: "Monuments", correct: false },
                        { text: "Inscriptions", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 29,
                    question: "Assertion (A): Ashoka's rock inscriptions tell us about his principles of Dhamma.<br>Reason (R): The study of inscriptions is called Numismatics.",
                    options: [
                        { text: "Both A and R are true.", correct: false },
                        { text: "Both A and R are false.", correct: false },
                        { text: "A is true but R is false.", correct: true },
                        { text: "A is false but R is true.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 30,
                    question: "Which pair is correctly matched?",
                    options: [
                        { text: "Numismatics - Study of inscriptions", correct: false },
                        { text: "Archaeology - Study of Material Remains", correct: true },
                        { text: "Epigraphy - Study of Coins", correct: false },
                        { text: "Historia - Study of Geography", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
            ]
        },
        {
            title: "Mesopotamian Civilisation",
            category: "Ancient",
            totalDuration: 10, //Minutes
            totalMarks: 30,
            questionSet: [
                {
                    id: 1,
                    question: "Mesopotamia means:",
                    options: [
                        { text: "Land of mountains", correct: false },
                        { text: "Land between two rivers", correct: true },
                        { text: "Land of forests", correct: false },
                        { text: "Land of deserts", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "Mesopotamia is located between the rivers:",
                    options: [
                        { text: "Nile and Indus", correct: false },
                        { text: "Tigris and Euphrates", correct: true },
                        { text: "Ganga and Yamuna", correct: false },
                        { text: "Yangtze and Hwang Ho", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "Which script did the Sumerians develop?",
                    options: [
                        { text: "Brahmi", correct: false },
                        { text: "Hieroglyphics", correct: false },
                        { text: "Cuneiform", correct: true },
                        { text: "Kharosthi", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "The Mesopotamians mainly wrote on:",
                    options: [
                        { text: "Palm leaves", correct: false },
                        { text: "Paper", correct: false },
                        { text: "Clay tablets", correct: true },
                        { text: "Animal skin", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "The temples of Mesopotamia were known as:",
                    options: [
                        { text: "Stupas", correct: false },
                        { text: "Ziggurats", correct: true },
                        { text: "Pagodas", correct: false },
                        { text: "Viharas", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "The famous Hanging Gardens were located at:",
                    options: [
                        { text: "Ur", correct: false },
                        { text: "Nineveh", correct: false },
                        { text: "Babylon", correct: true },
                        { text: "Lagash", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "Hammurabi was famous because he:",
                    options: [
                        { text: "Built pyramids", correct: false },
                        { text: "Introduced the first systematic Code of Laws", correct: true },
                        { text: "Invented writing", correct: false },
                        { text: "Built the Great Wall", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "The chief occupation of the  Mesopotamians was:",
                    options: [
                        { text: "Hunting", correct: false },
                        { text: "Agriculture", correct: true },
                        { text: "Fishing", correct: false },
                        { text: "Mining", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "The Mesopotamians believed in:",
                    options: [
                        { text: "One God", correct: false },
                        { text: "No God", correct: false },
                        { text: "Many gods and goddesses", correct: true },
                        { text: "Ancestor worship only", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "The Epic of Gilgamesh is:",
                    options: [
                        { text: "A law book", correct: false },
                        { text: "A famous literary work", correct: true },
                        { text: "A temple", correct: false },
                        { text: "A trade agreement", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "Why did the earliest civilizations develop near rivers?",
                    options: [
                        { text: "Rivers had gold.", correct: false },
                        { text: "Rivers provided fertile soil and water.", correct: true },
                        { text: "Rivers prevented wars.", correct: false },
                        { text: "Rivers were cold.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "Mesopotamian society was divided into:",
                    options: [
                        { text: "Two classes", correct: false },
                        { text: "Three classes", correct: true },
                        { text: "Four classes", correct: false },
                        { text: "Five classes", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "Which of the following belonged to the Upper Class?",
                    options: [
                        { text: "Farmers", correct: false },
                        { text: "Traders", correct: false },
                        { text: "Priests, officials and warriors", correct: true },
                        { text: "Slaves", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The second social class included:",
                    options: [
                        { text: "Slaves", correct: false },
                        { text: "Priests", correct: false },
                        { text: "Businessmen, professionals and skilled labourers", correct: true },
                        { text: "Kings only", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "Which city was excavated and found to have three main parts?",
                    options: [
                        { text: "Ur", correct: true },
                        { text: "Babylon", correct: false },
                        { text: "Mohenjo-daro", correct: false },
                        { text: "Athens", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 16,
                    question: "The sacred area of the city mainly contained:",
                    options: [
                        { text: "A market", correct: false },
                        { text: "A palace", correct: false },
                        { text: "A Ziggurat", correct: true },
                        { text: "A stadium", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 17,
                    question: "Which one is NOT a Mesopotamian god?",
                    options: [
                        { text: "Enki", correct: false },
                        { text: "Marduk", correct: false },
                        { text: "Nabu", correct: false },
                        { text: "Zeus", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 18,
                    question: "Mesopotamians traded with:",
                    options: [
                        { text: "India only", correct: false },
                        { text: "Egypt only", correct: false },
                        { text: "India, Egypt and Mediterranean countries", correct: true },
                        { text: "China only", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 19,
                    question: "Which one was NOT an achievement of Mesopotamia?",
                    options: [
                        { text: "Cuneiform writing", correct: false },
                        { text: "Hanging Gardens", correct: false },
                        { text: "Hammurabi's Code", correct: false },
                        { text: "Steam Engine", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 20,
                    question: "The Mesopotamians were the first to use:",
                    options: [
                        { text: "Potter's wheel and glassware", correct: true },
                        { text: "Compass", correct: false },
                        { text: "Printing press", correct: false },
                        { text: "Gunpowder", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 21,
                    question: "Which contribution belongs to Mesopotamian science?",
                    options: [
                        { text: "Algebra and Geometry", correct: true },
                        { text: "Calculus", correct: false },
                        { text: "Electricity", correct: false },
                        { text: "Microscope", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 22,
                    question: "The Mesopotamian calendar had:",
                    options: [
                        { text: "10 months", correct: false },
                        { text: "12 months", correct: true },
                        { text: "15 months", correct: false },
                        { text: "20 months", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 23,
                    question: "Assertion (A): Mesopotamians wrote on clay tablets.<br>Reason (R): Each baked tablet formed a page.",
                    options: [
                        { text: "Both A and R are true, and R explains A.", correct: false },
                        { text: "Both A and R are true, but R does not explain A.", correct: true },
                        { text: "A is true but R is false.", correct: false },
                        { text: "A is false but R is true.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 24,
                    question: "Statement I: Mesopotamians believed in life after death.<br>Statement II: They buried the dead with objects used in daily life.",
                    options: [
                        { text: "Both statements are true", correct: true },
                        { text: "Statement I is true but Statement II is false.", correct: false },
                        { text: "Statement I is false but Statement II is true.", correct: false },
                        { text: "Both are false.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 25,
                    question: "Which feature BEST shows that Mesopotamia was a developed civilization?",
                    options: [
                        { text: "Cave paintings", correct: false },
                        { text: "Nomadic life", correct: false },
                        { text: "Writing, laws and organised cities", correct: true },
                        { text: "Hunting wild animals", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 26,
                    question: "Which factor was NOT responsible for the growth of Mesopotamian Civilization?",
                    options: [
                        { text: "Fertile river valleys", correct: false },
                        { text: "Irrigation", correct: false },
                        { text: "Abundant water", correct: false },
                        { text: "Dense forests", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 27,
                    question: "Which of the following pairs is INCORRECT?",
                    options: [
                        { text: "Hammurabi - Code of Laws", correct: false },
                        { text: "Nebuchadnezzar II - Hanging Gardens", correct: false },
                        { text: "Gilgamesh - Epic", correct: false },
                        { text: "Ashoka - Cuneiform Writing", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 28,
                    question: "Which one correctly describes a Ziggurat?",
                    options: [
                        { text: "A royal palace", correct: false },
                        { text: "A temple dedicated to the patron god of the city", correct: true },
                        { text: "A market", correct: false },
                        { text: "A fort", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 29,
                    question: "Which of the following was a major reason for the decline of Mesopotamian Civilization?",
                    options: [
                        { text: "Discovery of America", correct: false },
                        { text: "Change in the course of the Euphrates River and invasions", correct: true },
                        { text: "Black Death", correct: false },
                        { text: "Industrial Revolution", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 30,
                    question: "Which statement is CORRECT?",
                    options: [
                        { text: "Mesopotamians developed Hieroglyphics.", correct: false },
                        { text: "Hammurabi built the Great Pyramid.", correct: false },
                        { text: "Mesopotamians had trade relations with the Harappan Civilization.", correct: true },
                        { text: "Mesopotamians lived only by hunting.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
            ]
        },
        //Egyptian Civilisation
        {
            title: "Egyptian Civilisation",
            category: "Ancient",
            totalDuration: 10, //Minutes
            totalMarks: 32,
            questionSet: [
                {
                    id: 1,
                    question: "Egypt is called the 'Gift of the Nile' because",
                    options: [
                        { text: "the Nile provided fertile soil and water", correct: true },
                        { text: "the Nile was the longest river in Africa", correct: false },
                        { text: "the Nile connected Egypt with Europe", correct: false },
                        { text: "the Nile flowed through many deserts", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "The Egyptian civilisation flourished on the banks of the",
                    options: [
                        { text: "Euphrates", correct: false },
                        { text: "Tigris", correct: false },
                        { text: "Nile", correct: true },
                        { text: "Indus", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "Egypt is located in the",
                    options: [
                        { text: "western part of Africa", correct: false },
                        { text: "northeastern part of Africa", correct: true },
                        { text: "sothern part of Africa", correct: false },
                        { text: "eastern part of Europe", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "Which kingdom is known as the period of the pyramids?",
                    options: [
                        { text: "New Kingdom", correct: false },
                        { text: "Middle Kingdom", correct: false },
                        { text: "Old Kingdom", correct: true },
                        { text: "Late Kingdom", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "The ruler of ancient Egypt was called the",
                    options: [
                        { text: "Sultan", correct: false },
                        { text: "Emperor", correct: false },
                        { text: "Pharaoh", correct: true },
                        { text: "Governor", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "The chief occupation of the Egyptian was",
                    options: [
                        { text: "fishing", correct: false },
                        { text: "agriculture", correct: true },
                        { text: "mining", correct: false },
                        { text: "hunting", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "The most important Egyptian god was",
                    options: [
                        { text: "Osiris", correct: false },
                        { text: "Horus", correct: false },
                        { text: "Ra", correct: true },
                        { text: "Amon", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "Egyptians believed that the Pharaoh was the",
                    options: [
                        { text: "son of Osiris", correct: false },
                        { text: "son of Ra", correct: true },
                        { text: "chief priest only", correct: false },
                        { text: "guardian of the Nile", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "The Egyptian script was known as",
                    options: [
                        { text: "Cuneiform", correct: false },
                        { text: "Brahmi", correct: false },
                        { text: "Hieroglyphic", correct: true },
                        { text: "Kharosthi", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "Egyptians mainly wrote on",
                    options: [
                        { text: "palm leaves", correct: false },
                        { text: "papyrus", correct: true },
                        { text: "cotton cloth", correct: false },
                        { text: "wooden boards", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "The Middle Kingdom ended because of the invasion of the",
                    options: [
                        { text: "Persians", correct: false },
                        { text: "Hyksos", correct: true },
                        { text: "Romans", correct: false },
                        { text: "Greeks", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "The New Kingdom lasted for about",
                    options: [
                        { text: "three centuries", correct: false },
                        { text: "four centuries", correct: false },
                        { text: "five centuries", correct: true },
                        { text: "six centuries", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "Which group belonged to the upper class?",
                    options: [
                        { text: "kings, rich landlords and clergy", correct: true },
                        { text: "peasants and slaves", correct: false },
                        { text: "merchants and artisans", correct: false },
                        { text: "teachers and writers", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The middle class included",
                    options: [
                        { text: "peasants and slaves", correct: false },
                        { text: "kings and priests", correct: false },
                        { text: "soldiers and guards", correct: false },
                        { text: "traders, artisans and jewellers", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "Egyptian towns generally had",
                    options: [
                        { text: "no boundary wall", correct: false },
                        { text: "a boundary wall with one or two entrances", correct: true },
                        { text: "walls around every house", correct: false },
                        { text: "only underground passages", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 16,
                    question: "The Great Pyramid was built by",
                    options: [
                        { text: "Cheops (Khufu)", correct: true },
                        { text: "Tutankhamun", correct: false },
                        { text: "Ramses II", correct: false },
                        { text: "Cleopatra", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 17,
                    question: "The Great Pyramid took about",
                    options: [
                        { text: "10 years", correct: false },
                        { text: "15 years", correct: false },
                        { text: "20 years", correct: true },
                        { text: "30 years", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 18,
                    question: "The Sphinx was meant to",
                    options: [
                        { text: "store treasure", correct: false },
                        { text: "guard the pyramids", correct: true },
                        { text: "worship Ra", correct: false },
                        { text: "mark trade routes", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 19,
                    question: "The Egyptians developed the art of preserving dead bodies called",
                    options: [
                        { text: "embalming", correct: false },
                        { text: "mummification", correct: true },
                        { text: "preservation", correct: false },
                        { text: "purification", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 20,
                    question: "The tomb discovered intact in the 1920s belonged to",
                    options: [
                        { text: "Khufu", correct: false },
                        { text: "Ramses II", correct: false },
                        { text: "Akhenaten", correct: false },
                        { text: "Tutankhamun", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 21,
                    question: "Which statement best explains why Egypt prospered?",
                    options: [
                        { text: "it received heavy rainfall throughout the year.", correct: false },
                        { text: "The Nile floods left fertile alluvial soil and supported irrigation.", correct: true },
                        { text: "It depended mainly on sea trade.", correct: false },
                        { text: "It had large forests and grasslands.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 22,
                    question: "Which pair is correctly matched?",
                    options: [
                        { text: "Ra - Sun God", correct: true },
                        { text: "Ra - God of the afterlife", correct: false },
                        { text: "Osiris - Sun God", correct: false },
                        { text: "Horus - God of the Nile", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 23,
                    question: "The Sphinx is best described as",
                    options: [
                        { text: "a stone temple of Ra", correct: false },
                        { text: "a lion-bodied, human-headed mythical figure", correct: true },
                        { text: "a burial chamber for Pharaohs", correct: false },
                        { text: "a palace for priests", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 24,
                    question: "Why were mummies placed inside pyramids?",
                    options: [
                        { text: "Egyptians believed the soul could continue to live in the preserved body.", correct: true },
                        { text: "Pyramids were used as hospitals", correct: false },
                        { text: "Pharaohs were buried secretly from the priests.", correct: false },
                        { text: "The bodies were kept for scientific study.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 25,
                    question: "Which of the following was NOT mentioned as an Egyptian amusement?",
                    options: [
                        { text: "Chess", correct: false },
                        { text: "Singing and dancing", correct: false },
                        { text: "Hunting and fishing", correct: false },
                        { text: "Chariot racing", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 26,
                    question: "The Egyptians observed the star Sirius mainly to predict",
                    options: [
                        { text: "eclipses", correct: false },
                        { text: "floods of the Nile", correct: true },
                        { text: "the beginning of winter", correct: false },
                        { text: "military campaigns", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 27,
                    question: "The Egyptian calendar consisted of",
                    options: [
                        { text: "12 months of 30 days each only", correct: false },
                        { text: "10 months of 36 days each", correct: false },
                        { text: "12 months of 30 days each plus 5 extra days", correct: true },
                        { text: "13 months of 28 days each", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 28,
                    question: "Which statement about Egyptian women is correct?",
                    options: [
                        { text: "They could not inherit property.", correct: false },
                        { text: "They had no legal rights.", correct: false },
                        { text: "They could inherit property and sometimes hold power.", correct: true },
                        { text: "They were allowed only household work.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 29,
                    question: "Egypt became part of the Roman Empire after the reign of",
                    options: [
                        { text: "Khufu", correct: false },
                        { text: "Tutankhamun", correct: false },
                        { text: "Cleopatra", correct: true },
                        { text: "Ramses II", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 30,
                    question: "Which sequence of Egyptian kingdoms is historically correct?",
                    options: [
                        { text: "Middle → Old → New", correct: false },
                        { text: "New → Old → Middle", correct: false },
                        { text: "New → Middle → Old", correct: false },
                        { text: "Old → Middle → New", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 31,
                    question: "Tutankhamun died at the age of",
                    options: [
                        { text: "15", correct: false },
                        { text: "18", correct: true },
                        { text: "25", correct: false },
                        { text: "30", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 32,
                    question: "Hieroglyphic writing mainly consisted of",
                    options: [
                        { text: "numbers", correct: false },
                        { text: "pictures and signs", correct: true },
                        { text: "alphabetic letters", correct: false },
                        { text: "trade symbols only", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                }
            ]
        },
        {
            title: "The Panchayati Raj System",
            category: "Civics",
            totalDuration: 12, //Minutes
            totalMarks: 40,
            questionSet: [
                {
                    id: 1,
                    question: 'The word "Panchayat" literally means:',
                    options: [
                        { text: "Village council", correct: false },
                        { text: "Assembly of elders", correct: false },
                        { text: "Team of five members", correct: true },
                        { text: "Village committee", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 2,
                    question: "The general body of all adult villagers is called:",
                    options: [
                        { text: "Gram Panchayat", correct: false },
                        { text: "Gram Sabha", correct: true },
                        { text: "Nyaya Panchayat", correct: false },
                        { text: "Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 3,
                    question: "A person becomes a member of the Gram Sabha after attaining the age of:",
                    options: [
                        { text: "16 years", correct: false },
                        { text: "21 years", correct: false },
                        { text: "18 years", correct: true },
                        { text: "25 years", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 4,
                    question: "The members of the Gram Panchayat are elected by the:",
                    options: [
                        { text: "Gram Sabha", correct: true },
                        { text: "State Government", correct: false },
                        { text: "Block Samiti", correct: false },
                        { text: "Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 5,
                    question: "The head of the Gram Panchayat is known as:",
                    options: [
                        { text: "Collector", correct: false },
                        { text: "BDO", correct: false },
                        { text: "Secretary", correct: false },
                        { text: "Sarpanch (Pradhan)", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 6,
                    question: "Which of the following is NOT a function of the Village Panchayat?",
                    options: [
                        { text: "Supply of clean drinking water", correct: false },
                        { text: "Holding village fairs", correct: false },
                        { text: "Declaring war on neighbouring villages", correct: true },
                        { text: "Maintaining village roads", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 7,
                    question: "The Panchayat Secretary is appointed by the:",
                    options: [
                        { text: "Gram Panchayat", correct: false },
                        { text: "Gram Sabha", correct: false },
                        { text: "State Government", correct: true },
                        { text: "Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 8,
                    question: "The Panchayat Secretary mainly:",
                    options: [
                        { text: "Collects taxes personally", correct: false },
                        { text: "Maintains records and accounts", correct: true },
                        { text: "Presides over Gram Sabha meetings", correct: false },
                        { text: "Conducts elections", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 9,
                    question: "The judicial wing of the Panchayat is:",
                    options: [
                        { text: "Gram Sabha", correct: false },
                        { text: "Nyaya Panchayat", correct: true },
                        { text: "Block Samiti", correct: false },
                        { text: "Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 10,
                    question: "The Nyaya Panchayat settles:",
                    options: [
                        { text: "Murder cases", correct: false },
                        { text: "Major property disputes", correct: false },
                        { text: "Minor civil and criminal cases", correct: true },
                        { text: "International disputes", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 11,
                    question: "The Nyaya Panchayat can:",
                    options: [
                        { text: "Sentence a person to life imprisonment", correct: false },
                        { text: "Impose fines", correct: true },
                        { text: "Award the death penalty", correct: false },
                        { text: "Dissolve Gram Panchayats", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 12,
                    question: "Lawyers are generally:",
                    options: [
                        { text: "Compulsory in Nyaya Panchayat", correct: false },
                        { text: "Not allowed before Nyaya Panchayat", correct: true },
                        { text: "Appointed by the Panchayat", correct: false },
                        { text: "Selected by villagers", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 13,
                    question: "Which institution forms the first tier of Panchayat Raj?",
                    options: [
                        { text: "Gram Panchayat", correct: true },
                        { text: "District Court", correct: false },
                        { text: "State Legislature", correct: false },
                        { text: "Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 14,
                    question: "The second tier of the Panchayat Raj System is:",
                    options: [
                        { text: "Municipal Corporation", correct: false },
                        { text: "Gram Sabha", correct: false },
                        { text: "Nyaya Panchayat", correct: false },
                        { text: "Block Samiti", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 15,
                    question: "The highest institution of Panchayati Raj is:",
                    options: [
                        { text: "Gram Panchayat", correct: false },
                        { text: "Block Samiti", correct: false },
                        { text: "Zila Parishad", correct: true },
                        { text: "Gram Sabha", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 16,
                    question: "Members of the Block Samiti are:",
                    options: [
                        { text: "Directly elected", correct: false },
                        { text: "Indirectly elected", correct: true },
                        { text: "Appointed by the Governor", correct: false },
                        { text: "Selected by the collector", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 17,
                    question: "The Block Samiti supervises the work of:",
                    options: [
                        { text: "State Government", correct: false },
                        { text: "Village Panchayats", correct: true },
                        { text: "Parliament", correct: false },
                        { text: "High Courts", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 18,
                    question: "Experts helping farmers with seeds and fertilizers work under:",
                    options: [
                        { text: "Block Samiti", correct: true },
                        { text: "Gram Sabha", correct: false },
                        { text: "Supreme Court", correct: false },
                        { text: "Rajya Sabha", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 19,
                    question: "The Zila Parishad functions at the:",
                    options: [
                        { text: "Village level", correct: false },
                        { text: "Ward level", correct: false },
                        { text: "District level", correct: true },
                        { text: "State level", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 20,
                    question: "The Zila Parishad mainly ensures that:",
                    options: [
                        { text: "Parliament functions smoothly", correct: false },
                        { text: "Village Panchayats and Block Samitis work properly", correct: true },
                        { text: "Courts deliver judgments", correct: false },
                        { text: "State elections are conducted", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 21,
                    question: "The term of a Gram Panchayat is:",
                    options: [
                        { text: "3 years", correct: false },
                        { text: "4 years", correct: false },
                        { text: "5 years", correct: true },
                        { text: "6 years", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 22,
                    question: "Regular Panchayat elections are conducted every:",
                    options: [
                        { text: "2 years", correct: false },
                        { text: "4 years", correct: false },
                        { text: "5 years", correct: true },
                        { text: "6 years", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 23,
                    question: "The State Election Commission is responsible for:",
                    options: [
                        { text: "Collecting village taxes", correct: false },
                        { text: "Conducting Panchayat elections", correct: true },
                        { text: "Supervising Nyaya Panchayats", correct: false },
                        { text: "Maintaining village accounts", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 24,
                    question: "The 73rd Constitutional Amendment Act was passed in:",
                    options: [
                        { text: "1989", correct: false },
                        { text: "1990", correct: false },
                        { text: "1992", correct: true },
                        { text: "1995", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 25,
                    question: "The 73rd Constitutional Amendment strenghtend:",
                    options: [
                        { text: "Parliament", correct: false },
                        { text: "Panchayat Raj Institution", correct: true },
                        { text: "Supreme Court", correct: false },
                        { text: "State High Courts", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 26,
                    question: "Seats reserved for women in Panchayats are:",
                    options: [
                        { text: "25%", correct: false },
                        { text: "30%", correct: false },
                        { text: "33%", correct: true },
                        { text: "50%", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 27,
                    question: "The Block Development Officer (BDO) works mainly at the:",
                    options: [
                        { text: "Village level", correct: false },
                        { text: "Block level", correct: true },
                        { text: "District level", correct: false },
                        { text: "State level", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 28,
                    question: "The Collector represents the State Government at the:",
                    options: [
                        { text: "District level", correct: true },
                        { text: "Village level", correct: false },
                        { text: "Block level", correct: false },
                        { text: "Ward level", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 29,
                    question: "Which is NOT a source of income for the Gram Panchayat?",
                    options: [
                        { text: "Taxes on houses", correct: false },
                        { text: "Government grants", correct: false },
                        { text: "Taxes on village fairs", correct: false },
                        { text: "Income Tax on farmers", correct: true },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 30,
                    question: "Registration fees from the sale and purchase of cattle are:",
                    options: [
                        { text: "A source of Panchayat income", correct: true },
                        { text: "Paid to Parliament", correct: false },
                        { text: "Collected by the Supreme Court", correct: false },
                        { text: "State GST", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 31,
                    question: "Village Panchayats encourage:",
                    options: [
                        { text: "Foreign trade", correct: false },
                        { text: "Local self-goverment", correct: true },
                        { text: "International relations", correct: false },
                        { text: "Industrial licensing", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 32,
                    question: "The Gram Sabha normally meets at least:",
                    options: [
                        { text: "Once every month", correct: false },
                        { text: "Twice a year", correct: true },
                        { text: "Every week", correct: false },
                        { text: "Once in five years", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 33,
                    question: "Villagers directly elect:",
                    options: [
                        { text: "Members of the Gram Panchayat", correct: true },
                        { text: "Members of Block Samiti", correct: false },
                        { text: "The Collector", correct: false },
                        { text: "Members of Zila Parishad", correct: false },
                    ],
                    marks: 1,
                    answerKey: 15,
                    selected: null,
                    visited: false
                },
                {
                    id: 34,
                    question: "The Nyaya Panchayat cannot:",
                    options: [
                        { text: "Hear minor disputes", correct: false },
                        { text: "Impose fines", correct: false },
                        { text: "Send a person to jail", correct: true },
                        { text: "Settle civil cases", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 35,
                    question: "Which statement about Panchayati Raj is correct?",
                    options: [
                        { text: "It discourages people's participation.", correct: false },
                        { text: "It strengthens democracy at the grassroots.", correct: true },
                        { text: "It works only in cities.", correct: false },
                        { text: "It replaces the State Government.", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 36,
                    question: "The Panchayati Raj System was revived after independence to promote:",
                    options: [
                        { text: "Centralisation", correct: false },
                        { text: "Decentralisation of power", correct: true },
                        { text: "Military administration", correct: false },
                        { text: "Colonial rule", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 37,
                    question: "Which institution prepares development plans for the district?",
                    options: [
                        { text: "Panchayat Secretary", correct: false },
                        { text: "Gram Sabha", correct: false },
                        { text: "Nyaya Panchayat", correct: false },
                        { text: "Zila Parishad", correct: true },
                    ],
                    marks: 1,
                    answerKey: 24,
                    selected: null,
                    visited: false
                },
                {
                    id: 38,
                    question: 'The slogan "Justice delayed is justice denied" is associated in this chapter with:',
                    options: [
                        { text: "Block Samiti", correct: false },
                        { text: "Gram Sabha", correct: false },
                        { text: "Nyaya Panchayat", correct: true },
                        { text: "State Election Commission", correct: false },
                    ],
                    marks: 1,
                    answerKey: 21,
                    selected: null,
                    visited: false
                },
                {
                    id: 39,
                    question: "Which institution is mainly responsible for solving local village problems?",
                    options: [
                        { text: "Parliament", correct: false },
                        { text: "Gram Panchayat", correct: true },
                        { text: "High Court", correct: false },
                        { text: "Rajya Sabha", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
                {
                    id: 40,
                    question: "Which sequence correctly represents the three-tier Panchayati Raj System?",
                    options: [
                        { text: "Zila Parishad → Gram Panchayat → Block Samiti", correct: false },
                        { text: "Gram Panchayat → Block Samiti → Zila Parishad", correct: true },
                        { text: "Block Samiti → Gram Panchayat → Zila Parishad", correct: false },
                        { text: "Gram Sabha → Nyaya Panchayat → State Goverment", correct: false },
                    ],
                    marks: 1,
                    answerKey: 18,
                    selected: null,
                    visited: false
                },
            ]
        },
    ]
};