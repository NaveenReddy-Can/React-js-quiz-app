import React, { useState } from "react";


function Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);


    const questions = [

        {

            text: "1.Bacteria is everywhere.  ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },

        {

            text: '2.Every bacterium is good for humans!',

            choices: ['True', 'False'],

            correctAanswer: 'False'

        },

        {

            text: "3.Examples of potentially hazardous food are meat, milk, poultry:",

            choices: ["True", "False"],

            correctAnswer: "True "

        },

        {

            text: "4.You can see bacteria with naked eyes:",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "5.When bacteria grow, they increase in size.",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "6.Heating the food kills the bacteria. But does it still contain the toxins? ",

            choices: ["True", "False"],

            correctAnswer: "True "

        },

        {

            text: "7.temperature danger zone is between 41F to 135F:",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "8.It is not necessary to wash hands regularly: ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "9.It is good to store food in refrigerator.",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "10.Raw meet can be washed by hot water:   ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "11. What is listeria? ",

            choices: ["A brand of mouthwash ", "A strain of bacteria ", "A strain of virus ", "A strain of fungus "],

            correctAnswer: "A strain of bacteria"

        },
        {

            text: "12. Where is listeria found? ",

            choices: ["Soil", "Animal feed ", "Water ", "All the above "],

            correctAnswer: "All the above "

        },
        {

            text: "13. foods are most often contaminated with listeria? ",

            choices: ["pasteurized milk products ", "frozen vegetables ", "deli meats", "canned soups"],

            correctAnswer: "deli meats"

        },
        {

            text: "14. Who is most at risk from listeria? ",

            choices: ["pregnant woman", "people over age 60", "people with diabetes", " all the above"],

            correctAnswer: " all the above"

        },
        {

            text: "15.Why is listeria so deadly?",

            choices: ["Attacks brain and nervous system ", "Causes cancer ", "Contains deadly poison ", "Highly contagious "],

            correctAnswer: "Attacks brain and nervous system "

        },
        {

            text: "16.Why are pregnant women at high risk from listeria? ",

            choices: ["High risk of listeriosis ", "Eat more listeria contaminated food ", "Miscarriage or pre birth ", "All the above "],

            correctAnswer: "High risk of listeriosis"

        },
        {

            text: "17.common symptoms of listeriosis? ",

            choices: ["Fever and muscle aches ", "Loss of balance ", "Stiff neck", "all of the above"],

            correctAnswer: "all of the above"

        },
        {

            text: "18.How long after eating listeria-contaminated food do severe symptoms appear? ",

            choices: ["Immediately ", "Within 24 hours ", "2 days ", " 3 days to 2 months "],

            correctAnswer: "3 days to 2 months "

        },
        {

            text: "19.What is the maximum amount of time perishable food should be left out?   ",

            choices: [" 1.5 hours", " 2 hours", " 3 hours", " 3.5 hours"],

            correctAnswer: "2 hours"

        },
        {

            text: "20.What is the treatment for listeriosis?",

            choices: [" Wash hands after preparing vegetables ", " Thoroughly cook all meat ", "Eat ready-to-eat food as soon as possible ", "All of the above "],

            correctAnswer: "All of the above "

        },
        {

            text: "21.You can remove all listeria by washing a cantaloupe.",

            choices: ["True  ", " False "],

            correctAnswer: "False "

        },

        {

            text: "22.If you suspect you've had a listeria-contaminated food in your refrigerator, you should: ",

            choices: ["Call doctor immediately ", "Rush to hospital ", "Thoroughly clean the refrigerator ", "all the above"],

            correctAnswer: "Thoroughly clean the refrigerator "

        },




        // ... additional questions

    ];


    const handleAnswer = answer => {
        if (questions[currentQuestion].correctAnswer === answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (currentQuestion >= questions.length) {
        return (
            <div>
                <button className="SubmitQuizButton" onClick={handleSubmit}>Submit Quiz</button>
                {showModal && (
                    <div className="quiz-container">
                        <div className="result-container">
                            <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                <div
                                    style={{
                                        width: '150%',
                                        height: '20px',
                                        backgroundColor: 'lightgray',
                                        borderRadius: '5px',
                                        justifyContent: 'center'
                                    }}
                                >

                                    <div
                                        style={{
                                            width: `${(score / questions.length) * 100}%`,
                                            height: '100%',
                                            backgroundColor: 'green',
                                            borderRadius: '5px',
                                            alignItems: 'center'
                                        }}
                                    />
                                    <div>
                                        <bold>
                                            <p>Your score: {score}/{questions.length}</p>
                                            <p>{score >= (questions.length * 0.73) ? 'Pass' : 'Fail'}</p>
                                        </bold>
                                    </div>
                                    <button className="CloseButton" onClick={handleCloseModal}>Close</button>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="question-container">
            <p >{question.text}</p>
            {question.choices.map(choice => (
                <button key={choice} onClick={() => handleAnswer(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
}

export default Quiz3;
