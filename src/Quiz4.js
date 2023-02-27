import React, { useState } from "react";


function Quiz4() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);


    const questions = [

        {

            text: "  1. Which three major factors cause food contamination? ",

            choices: ["Physical, biological, and chemical ",
                "Physical, biological, and radiological",
                "Physical, psychological, and health",
                "Physical, chemical, and psychosocial "],

            correctAnswer: "Physical, biological, and chemical"

        },

        {
            text: '2. There is nothing wrong with using the same knife for cutting vegetables that you use for raw meats, poultry, seafood, and eggs.      ',

            choices: ['True', 'False'],

            correctAanswer: 'False'

        },

        {

            text: "3. Which of the following should you NOT do while buying food?",

            choices: ["Buy items in dented or bulging cans ",
                "Select fish, poultry, eggs and meat towards the end of the shopping trip ",
                "Wrap up perishable items so that their juices do not drip onto other items ",
                "Buy frozen or refrigerated items after purchasing non-perishables"],

            correctAnswer: "Buy items in dented or bulging cans "

        },

        {

            text: "4. You can always smell, see, or taste harmful bacteria in food that can cause illness. ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "5. Perishable foods should be refrigerated within how many of hours of purchase.  ",

            choices: ["One and a half ", "Two", "Two and a half ", "Three"],

            correctAnswer: "Two"

        },

        {

            text: "6. How long can high-acid canned food such as tomatoes be stored? ",

            choices: ["10 to 30 days ", "2 to 6 months", "12 to 18 months ", "2 to 4 years "],

            correctAnswer: "12 to 18 months "

        },

        {

            text: "7. For how long (at a minimum) should you wash your hands before and after handling food?     ",

            choices: ["15 seconds ", "20 seconds", "30 seconds ", "60 seconds "],

            correctAnswer: "20 seconds"

        },
        {

            text: "8. How should you thaw perishable food?",

            choices: ["In the microwave ",
                "Under cold running water ",
                "On the counter ",
                "In a sink of hot water "],

            correctAnswer: "Under cold running water "

        },
        {

            text: "9. The following is a list of food items and the minimum internal food temperature at which they should be cooked. Which of these is incorrect?",

            choices: ["Fish and Shellfish with 145 degrees Fahrenheit",
                "Leftovers with 165 degrees Fahrenheit",
                "Ground beef with 160 degrees Fahrenheit ",
                "Eggs with 145 degrees Fahrenheit"],

            correctAnswer: "Eggs with 145 degrees Fahrenheit"

        },
        {

            text: "10. Hot foods should be maintained at a temperature of how many degrees Fahrenheit or higher.  ",

            choices: ["100", "120", "135", "140"],

            correctAnswer: "140"

        },
        {

            text: "11. Which of the following foods is most commonly associated with Salmonella? ",

            choices: ["Raw meat", "Raw vegetables", "Unpasteurized dairy products", "Just a and c"],

            correctAnswer: "Just a and c"

        },
        {

            text: "12. Which of the following processes kills harmful bacteria in milk? ",

            choices: ["Sterilization", "Preservation", "Pasteurization", "Fermen"],

            correctAnswer: "Pasteurization"

        },
        {

            text: "13. Individuals who are lactose-intolerant can consume pasteurized milk without negative side effects. ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "14. Which of the following agencies inspects, grades, and enforces standards of quality and wholesomeness for meat, poultry, milk, eggs, and grains?  ",

            choices: ["USDA", "CDC", "FDA", "EPA"],

            correctAnswer: "USDA"

        },
        {

            text: "15. Everyone is at a risk of contracting a food-borne illness. However, some are at a greater risk of falling ill or even dying of infection, including: ",

            choices: ["Infants", "Pregnant women", "People with weakened immune systems", "All the above"],

            correctAnswer: "All the above"

        },
        {

            text: "16. What range of temperature is considered a danger zone for food to collect bacteria? ",

            choices: ["0°F to40°F", "40°F to 135°F", "135°F to200°F", "Anything above 200°F"],

            correctAnswer: "40°F to 135°F"

        },
        {

            text: "17. Most food allergies are caused by contact with the proteins in milk, eggs, fish, Crustacean shellfish, tree nuts, wheat, peanuts, or soybeans. Persons experience allergic reactions only by consuming these foods. ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "18. What storage time is recommended to keep ground beef from spoiling or becoming dangerous to eat? ",

            choices: ["1-2 days", "3-4 days", "5-6 days", " 7 days"],

            correctAnswer: "1-2 days"

        },
        {

            text: "19. What is the maximum amount of time perishable food should be left out?   ",

            choices: [" 1.5 hours", " 2 hours", " 3 hours", " 3.5 hours"],

            correctAnswer: "2 hours"

        },
        {

            text: "20. Where should raw chicken be placed in the fridge?",

            choices: [" It’s okay to place with the vegetables", " It should be placed separately as it contains food bone bacteria", "Anywhere ", "  All the above"],

            correctAnswer: "It should be placed separately as it contains food bone bacteria"

        },
        {

            text: "21. Always wash your vegetables and meet because",

            choices: ["For removing the bacteria ", "  To make it look good", "No need to wash", " None of the above"],

            correctAnswer: "For removing the bacteria"

        },
        {

            text: " 22. How many degrees the temperature in the fridge should be set for ",

            choices: ["7 C", "9 C", "4 C", "2 C"],

            correctAnswer: "4 C"

        },
        {

            text: "23. We can consume food after the expiration date ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "24. food safety is necessary for ",

            choices: ["for healthy living", "for good diet", " for good mental health", "all of the above"],

            correctAnswer: "all of the above"

        },


        // ... additional questions

    ];
    // ... additional questions

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

export default Quiz4;
