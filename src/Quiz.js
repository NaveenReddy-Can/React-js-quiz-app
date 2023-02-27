import React, { useState } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions] = useState([{ text: ' 1. Storing kitchen chemicals in the food pantry is the best place so they are convenient when you need. ', answer: true }, { text: '2. When buying goods at the supermarket, you should not separate raw meat, poultry, seafood, and eggs from other items in your cart. ', answer: false },
    { text: " 3. The easiest way to prevent cross-contamination is to put you're dairy products on the same shelf as your raw products.  ", answer: false },
    { text: ' 4. You should always wear shoes while in the kitchen.  ', answer: true },
    { text: ' 5. The coldest temperature cold food can be at is -140 degrees or lower  ', answer: false },
    { text: ' 6. If you leave food out for more than three hours it isnt going to be good.  ', answer: false },
    { text: ' 7. Three ways to thaw food are: putting the food in cold water, microwaving the food, or refrigerator thawing it. ', answer: true },
    { text: ' 8. Hot foods should be kept at a temperature of 180 degrees or lower. ', answer: false },
    { text: ' 9. You should plug all appliances needed for the recipe into the same outlet to keep them close to you and your work space  ', answer: false },
    { text: ' 10. Raw meat should be stored on the top shelf of the refrigerator .', answer: false },
    { text: ' 11. More than ten percent of all bottled water starts out as tap water. ', answer: true },
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
                    <div style={{ display: 'inline-flex', justifyContent: 'normal' }}>
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
                                    <p>{score >= (questions.length * 0.7) ? 'Pass' : 'Fail'}</p>

                                </bold>
                            </div>
                        </div>
                    </div>
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

export default Quiz;
