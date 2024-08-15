
export function useScroll() {
    // Variables to control the scroll behavior
    const scrollSpeed = 3;  // Adjust the scroll speed (lower value = slower scroll)
    let isScrolling = false;

    // Disable default scroll behavior
    function disableScroll() {
        document.addEventListener('touchmove', preventDefault, { passive: false });
        document.addEventListener('wheel', preventDefault, { passive: false });
    }

    // Enable default scroll behavior
    function enableScroll() {
        document.removeEventListener('touchmove', preventDefault);
        document.removeEventListener('wheel', preventDefault);
    }

    // Prevent default scroll/touch behavior
    function preventDefault(event: Event) {
        event.preventDefault();
    }

    // Smooth scroll function
    function smoothScroll(targetPosition: number) {
        if (isScrolling) return;

        isScrolling = true;
        const currentPosition = window.scrollY;
        const distance = targetPosition - currentPosition;
        const duration = Math.abs(distance / scrollSpeed);

        let start: number | undefined

        function step(timestamp: number) {

            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeInOutCubic(progress); // Apply easing function

            window.scrollTo(0, currentPosition + distance * easedProgress);

            if (elapsed < duration) {
                window.requestAnimationFrame(step);
            } else {
                isScrolling = false;
            }
        }
        window.requestAnimationFrame(step);
    }

    // Easing function for smooth animation
    function easeInOutCubic(t: number) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    //Scroll to the target 
    function scrollToTarget(target: string) {
        // Find the target element
        const targetElement = document.getElementById(target);
        console.log(targetElement);

        if (!targetElement) return;

        // Ensure the element is focusable by adding tabindex if not already focusable
        if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
        }

        // Calculate the scroll position relative to the top of the page
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const goToTarget = targetPosition - 152;

        // Smooth scroll to the target
        disableScroll();
        smoothScroll(goToTarget);
        enableScroll();
    }


    return scrollToTarget;

}