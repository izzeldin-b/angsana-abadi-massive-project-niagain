let decrementHandler, incrementHandler, updateCount; 

export function initializeCounter() {
    const countElement = document.getElementById("count");
    const countValueElement = document.getElementById("countValue");
    let count = 1;

    updateCount = () => {  
        countElement.textContent = count;
        countValueElement.value = count;
    }

    decrementHandler = () => { 
        count = Math.max(1, count - 1);
        updateCount();
    };

    incrementHandler = () => { 
        count++;
        updateCount();
    };

    document.getElementById("decrement").addEventListener("click", decrementHandler);
    document.getElementById("increment").addEventListener("click", incrementHandler);
    }

    export function cleanUpCounter() {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");

    if (decrementButton) {
        decrementButton.removeEventListener("click", decrementHandler);
    }

    if (incrementButton) {
        incrementButton.removeEventListener("click", incrementHandler);
    }
}