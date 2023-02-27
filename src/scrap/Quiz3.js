import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);
    const history = useNavigate()
    const questions = [
        {
            id: 1,
            text: 'Question 1',
            options: [
                { id: 'a', text: 'Option A' },
                { id: 'b', text: 'Option B' },
                { id: 'c', text: 'Option C' },
                { id: 'd', text: 'Option D' }
            ],
            answer: 'a'
        },
        // ... more questions ...
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleModalClose = () => {
        setShowModal(false);
        history.push('/');
    };

    const handleSubmit = () => {
        // ... calculate the score ...
        setScore(score);
        setShowModal(true);
    };

    return (
        <div>
            {questions.map((question, index) => (
                <div key={question.id}>
                    {index === currentQuestion ? (
                        <>
                            <p>{question.text}</p>
                            <ul>
                                {question.options.map((option) => (
                                    <li key={option.id}>
                                        <button
                                            type="button"
                                            onClick={() => handleAnswerSelection(option.id)}
                                        >
                                            {option.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>
            ))}
            {currentQuestion === questions.length ? (
                <button type="button" onClick={handleSubmit}>
                    Submit Quiz
                </button>
            ) : null}
            {showModal ? (
                <div>
                    <p>Your score is {score}</p>
                    <button type="button" onClick={handleModalClose}>
                        Close
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default Quiz3;
