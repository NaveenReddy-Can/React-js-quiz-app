import React, { useState } from 'react';

const FoodSaftey5 = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions] = useState([{ text: '1. Food safety is an important part of life cycle. ', answer: true },
    { text: '2. Food can become contaminated at any stage of supply chain. ', answer: true },
    { text: '3. Canada is not respected for food safety. ', answer: false },
    { text: '4. Use separate cutting boards when preparing raw meats. ', answer: true },
    { text: '5. CFIA"s job is not to enforce food safety and quality standards under Health Canada’s Food and Drugs Act and Regulations foo all foods sold in Canada. ', answer: false },
    { text: '6. Let prepared foods or leftovers sit at room temperature for more than 2 hours.', answer: false },
    { text: '7. The centre for disease control estimates one in six people suffer from food-borne illness every year. ', answer: true },
    { text: '8. Wash your hands before cleaning.', answer: true },
    { text: '9. Use warm water and soap to scrub your hands at least for 5 minutes ', answer: false },
    { text: '10. Do not store raw meat above ready to eat food or allow any contact between two.', answer: true },
    { text: '11. Beef, pork, veal, lamb and fish should be 145 degrees F after 3 minutes of rest time.', answer: true },
    { text: '12. Once food is cooked to the proper temperature be prepared to serve it within one hour. ', answer: true },
    { text: '13. All bacteria are harmful to us. ', answer: true },
    { text: '14. Food must always be handled safely from the time it is received. ', answer: true },
    { text: '15. Always cook foods to proper temperature.', answer: true },
    { text: '16. Bacteria is everywhere.', answer: true },
    { text: '17. Every bacterium is good for humans! ', answer: false },
    { text: '18. Examples of potentially hazardous food are meat, milk, poultry: ', answer: true },
    { text: '19. You can see bacteria with naked eyes ', answer: false },
    { text: '20. When bacteria grow, they increase in size. ', answer: false },
    { text: '21. Heating the food kills the bacteria. But does it still contain the toxins? ', answer: true },
    { text: '22. temperature danger zone is between 41F to 135F: ', answer: true },
    { text: '23. It is not necessary to wash hands regularly: ', answer: false },
    { text: '24. It is good to store food in refrigerator. ', answer: true },
    { text: '25. Raw meet can be washed by hot water: ', answer: false }

    ]);   // add more questions here, up to 25  ]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion + 1 === questions.length) {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="result-container">
                    <h2>Result</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div
                            style={{
                                width: '50%',
                                height: '20px',
                                backgroundColor: 'lightgray',
                                borderRadius: '5px'
                            }}
                        >
                            <div
                                style={{
                                    width: `${(score / questions.length) * 100}%`,
                                    height: '100%',
                                    backgroundColor: 'green',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                    </div>
                    <p>Your score: {score}/{questions.length}</p>
                    <p>{score >= (questions.length * 0.7) ? 'Pass' : 'Fail'}</p>
                </div>
            ) : (
                <div className="question-container">
                    <h2>{questions[currentQuestion].text}</h2>
                    <button onClick={() => handleAnswer(true)}>True</button>
                    <button onClick={() => handleAnswer(false)}>False</button>
                </div>
            )}
        </div>
    );
};

export default FoodSaftey5;
