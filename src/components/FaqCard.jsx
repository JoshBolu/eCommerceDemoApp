import React from 'react';

function FaqCard({ question, answer, opened, changeShow, id }) {
    return (
        <div className="relative flex flex-col w-full p-6 transition-shadow duration-300 ease-in-out border-2 border-cusLightBlue rounded-xl text-greyPriText hover:shadow-lg">
            <div className="flex items-center justify-between font-semibold text-gray-800">
                <h3 className="text-base">{question}</h3>
                <button
                    className={`transform transition-transform duration-300 ${opened ? "rotate-45" : ""}`}
                    onClick={() => changeShow(id)}
                >
                    <i className="text-xl ri-add-line"></i>
                </button>
            </div>
            {/* Expandable Content with controlled max-height */}
            <p className={`mt-2 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${opened ? "max-h-96" : "max-h-0"}`}>
                {answer}
            </p>
        </div>
    );
}

export default FaqCard;