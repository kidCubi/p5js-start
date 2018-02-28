export const recalculateWindow = () => {
    let sizes = {
        wH: window.innerHeight,
        wW: window.innerWidth
    };
    window.addEventListener('resize', () => {
        sizes = {
            wH: window.innerHeight,
            wW: window.innerWidth
        };
        return sizes
    });
};