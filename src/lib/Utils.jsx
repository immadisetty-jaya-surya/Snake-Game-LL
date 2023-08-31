import { useEffect, useRef } from "react";

function RandomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export function UseInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}

export function ReversedLinkedList(head){
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}

// export function reverseLinkedList(head) {
//     let previousNode = null;
//     let currentNode = head;
//     while (currentNode !== null) {
//         const nextNode = currentNode.next;
//         currentNode.next = previousNode;
//         previousNode = currentNode;
//         currentNode = nextNode;
//     }
//     return previousNode;
// }

export default RandomIntFromInterval