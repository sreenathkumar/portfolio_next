import React, { useEffect, useRef, useState } from 'react'

function Slider({ children }: { children: React.ReactNode }) {
    const slideContainer = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(React.Children.count(children));
    const startX = useRef(0);
    const endX = useRef(0);

    //handle touch start
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    //handle touch move
    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
        const slideTrack = slideContainer.current!.children[0] as HTMLElement;

        slideTrack.style.transform = `translateX(calc(-${currentIndex * 100}% - ${startX.current - endX.current}px))`;
    }

    //handle touch end
    const handleTouchEnd = () => {

        const slideTrack = slideContainer.current!.children[0] as HTMLElement;

        slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (startX.current - endX.current > 50) {

            if (currentIndex === totalSlides - 1) {
                return;
            }
            setCurrentIndex(currentIndex + 1);


        } else if (startX.current - endX.current < -50) {
            if (currentIndex === 0) {
                return;
            }
            setCurrentIndex(currentIndex - 1);
        }

    }

    //update the slider width on mount and window resize
    useEffect(() => {
        // Set the slider width on mount and update on window resize
        const updateSliderWidth = () => {
            if (slideContainer.current) {
                setSlideWidth(slideContainer.current.offsetWidth);
            }
        };

        updateSliderWidth();
        window.addEventListener('resize', updateSliderWidth);

        return () => {
            window.removeEventListener('resize', updateSliderWidth);
        };
    }, []);

    //return the number of slides 
    useEffect(() => {
        if (React.Children.count(children) !== totalSlides) {
            setTotalSlides(React.Children.count(children));
        }
    }, [totalSlides, children]);

    //add slide active class on index change
    useEffect(() => {
        const slideTrack = slideContainer.current!.children[0] as HTMLElement;
        const items = slideTrack.children as HTMLCollectionOf<HTMLElement>;

        Array.from(items).forEach((item) => {
            item.classList.remove('active-slide');
        });

        const activeItem = items[currentIndex];
        activeItem.classList.add('active-slide');

    }, [currentIndex]);

    return (
        <div id='slider' className='w-full overflow-hidden mb-10 rounded-lg' ref={slideContainer}>
            <div className={`flex`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'all 0.5s ease'
                }}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { width: slideWidth } as { width: number });
                    }
                    return child;
                })}
            </div>
        </div>
    )
}

export default Slider