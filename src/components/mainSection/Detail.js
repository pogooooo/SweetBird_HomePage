import React, {useEffect, useState} from 'react';

import '../../styles/mainSection/Detail.css'

const Detail = () => {

    const [iframeSrc, setIframeSrc] = useState('http://localhost:3000/');
    const [startIndex, setStartIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(null);
    const [buttonText1, setButtonText1] = useState('↑');
    const [buttonText2, setButtonText2] = useState('↓');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                setButtonText1('←');
                setButtonText2('→');
            } else {
                setButtonText2('↑');
                setButtonText2('↓');
            }
        };

        window.addEventListener('resize', handleResize);

        // 초기 크기 설정
        handleResize();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const buttons = [
        'http://localhost:3000/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/',
        'https://www.naver.com/'
    ];
    
    const handleButtonClick = (newSrc, index) => {
        setIframeSrc(newSrc);
        setActiveButton(index);
    };

    const handleArrowClick = (direction) => {
        if (direction === 'up' && startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        } else if (direction === 'down' && startIndex < buttons.length - 5) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
        setActiveButton(null);
    };

    return(
        <div className='detail-projects'>
            <div className='detail-projects-title'>작품 소개</div>
            <div className='detail-projects-view'>
                <div className='detail-projects-scroll'>

                    {startIndex === 0 && (
                        <div className='empty-arrow-button'>

                        </div>
                    )}

                    {startIndex > 0 && (
                        <div onClick={() => handleArrowClick('up')} className='arrow-button'>
                            {buttonText1}
                        </div>
                    )}

                    {buttons.slice(startIndex, startIndex + 5).map((button, index) => (
                        <div
                            key={index}
                            id={'detail-projects-scroll-button'}
                            className={`detail-projects-scroll-button ${activeButton === index + startIndex ? 'active' : ''}`}
                            onClick={() => handleButtonClick(button, index + startIndex)}
                        >
                            {index + startIndex + 1}
                        </div>
                    ))}

                    {startIndex >= buttons.length - 5 && (
                        <div className='empty-arrow-button'>

                        </div>
                    )}

                    {startIndex < buttons.length - 5 && (
                        <div onClick={() => handleArrowClick('down')} className='arrow-button'>
                            {buttonText2}
                        </div>
                    )}

                </div>
                <iframe className='detail-projects-iframe' title='detail-project-view-iframe' src={iframeSrc}>
                    
                </iframe>
            </div>
        </div>
    )
}

export default Detail