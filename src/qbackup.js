import React, { useState } from "react";

function Quiz23() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            text: "What is the capital of France?",
            choices: ["Paris", "London", "Madrid", "Berlin"],
            correctAnswer: "Paris"
        },
        {
            text: 'Question 2',
            choices: ['True', 'False'],
            correctAanswer: 'True'
        },
        {

            text: "What is the capital of France?",
            choices: ["Paris", "London", "Madrid", "Berlin"],
            correctAnswer: "Paris"
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
                <button onClick={handleSubmit}>Submit Quiz</button>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>You scored {score} out of {questions.length}</p>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div>
            <p>{question.text}</p>
            {question.choices.map(choice => (
                <button key={choice} onClick={() => handleAnswer(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
}

export default Quiz23;
