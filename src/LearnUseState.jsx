import { useState } from 'react';

export default function LearnUseState() {
    function countInitial() {
        console.log('count initial');
        return 4;
    }

    const [count, setCount] = useState(countInitial);

    function decrementCount() {
        setCount((prevCount) => prevCount - 1);
    }

    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    //---------------------------
    const [count2, setCount2] = useState({ count: 4, theme: 'blue' });

    function decrementCount2() {
        setCount2((prevCount) => {
            return { ...prevCount, count: prevCount.count - 1, theme: 'red' };
        });
    }

    function incrementCount2() {
        setCount2((prevCount) => {
            return {
                ...prevCount,
                count: prevCount.count + 1,
            };
        });
    }

    return (
        <>
            <button onClick={decrementCount}> - </button>
            <span>{count}</span>
            <button onClick={incrementCount}> + </button>
            <br />-------------------
            <br />
            <button onClick={decrementCount2}> - </button>
            <span>{count2.count}</span>
            <span>{count2.theme}</span>
            <button onClick={incrementCount2}> + </button>
        </>
    );
}
