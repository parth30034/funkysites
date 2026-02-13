import React, { useState } from 'react';

const DaySeven: React.FC = () => {
    const [noCount, setNoCount] = useState(0);
    const [isAccepted, setIsAccepted] = useState(false);
    const [shake, setShake] = useState(false);

    const noMessages = [
        "No",
        "Are you sure?",
        "Think about it again...",
        "What if I asked really nicely?",
        "tabad tod chumma chati krenge...",
        "Paws for a moment and reconsider?"
    ];

    // Cat-themed GIFs for the Valentine interaction
    // Starting with a cute cat with a flower in hand as requested
    const images = [
        "https://media1.tenor.com/m/63qEOw-UQb8AAAAC/valentine%27s-day-valentines.gif", // Valentine's Day Gift
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnN3am90Y2N0M2ZqOHByNThoM3ZqOHByNThoM3ZqOHByNThoM3ZqOHByJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/YRtLgsajXrz1FNJ6oy/giphy.gif", // Sad cat
        "https://media1.tenor.com/m/ikTQ-pi_GyMAAAAC/cat-cry-kitten-cry.gif", // Crying cat
        "https://media1.tenor.com/m/bdpAKWSRdAYAAAAC/gato-wishes-cat.gif", // Pleading cat
        "https://media1.tenor.com/m/n42Zg6mQREoAAAAC/cat-kiss.gif", // Heartbroken cat
        "https://media1.tenor.com/m/yAMCT2FDG-QAAAAC/cats.gif"  // Desperate cat
    ];

    // The requested Tenor GIF for the success state
    const successImage = "https://media1.tenor.com/m/-sEGam62isEAAAAC/valentines-day-dupage.gif";

    const handleNoClick = () => {
        setNoCount(prev => Math.min(prev + 1, noMessages.length - 1));
        setShake(true);
        setTimeout(() => setShake(false), 200);
    };

    const handleYesClick = () => {
        setIsAccepted(true);
        localStorage.setItem('mellony_valentine_accepted', 'true');
    };

    const yesButtonSize = 16 + noCount * 14;

    return (
        <div className="container">
            {!isAccepted ? (
                <>
                    <img
                        src={images[noCount]}
                        alt="Mellony Valentine"
                        className="valentine-image"
                        style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '20px' }}
                    />
                    <h1 className="valentine-question">Mellony, will you be my Valentine?</h1>

                    <div className="button-group">
                        <button
                            className="btn btn-yes"
                            onClick={handleYesClick}
                            style={{
                                fontSize: `${yesButtonSize}px`,
                                padding: `${12 + noCount * 6}px ${24 + noCount * 12}px`,
                                zIndex: 10,
                                backgroundColor: '#4CAF50', // Green
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className={`btn btn-no ${shake ? 'shake' : ''}`}
                            onClick={handleNoClick}
                            style={{
                                backgroundColor: '#F44336', // Red
                                color: 'white',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '16px'
                            }}
                        >
                            {noMessages[noCount]}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <img
                        src={successImage}
                        alt="Success"
                        className="valentine-image"
                        style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '20px' }}
                    />
                    <div className="success-text visible">
                        Excellent choice.
                        <br />
                        I knew you had taste.
                        <br />
                        Happy valentine's day!
                    </div>
                </>
            )}
        </div>
    );
};

export default DaySeven;