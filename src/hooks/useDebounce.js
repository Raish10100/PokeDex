function useDebounce(cb, delay = 500) {
    let timerId; // Define timerId outside of the returned function
    return (...args) => {
        console.log(...args);
        
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}

export default useDebounce;
