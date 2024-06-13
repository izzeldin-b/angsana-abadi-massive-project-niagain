export function initializeCounter() {
    const countElement = document.getElementById("count");
    const countValueElement = document.getElementById("countValue");
    let count = 1;

    document.getElementById("decrement").addEventListener("click", () => {
        count = Math.max(1, count - 1);
        updateCount();
    });

    document.getElementById("increment").addEventListener("click", () => {
        count++;
        updateCount();
    });

    function updateCount() {
        countElement.textContent = count;
        countValueElement.value = count;
    }
}

//Optional clean up function
export function cleanUpCounter() {
    document.getElementById("decrement").removeEventListener("click", () => {
        count = Math.max(1, count - 1);
        updateCount();
    });

    document.getElementById("increment").removeEventListener("click", () => {
        count++;
        updateCount();
    });
}