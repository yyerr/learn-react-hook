import { useState, useEffect, useMemo } from 'react';

function slowFunction(num) {
    console.log(`calling slow function (${num})`);
    for (let i; i <= 10000000000; i++) {}
    return num * 2;
}

export default function LearnUseMemo() {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);
    // const doubleNumber = slowFunction(number);

    // useMemo never run function if number not changed at re-render
    const doubleNumber = useMemo(() => {
        console.log('calling memo slow function');
        return slowFunction(number);
    }, [number]);

    // const themeStyles = {
    //     backgroundColor: theme ? 'black' : 'white',
    //     color: theme ? 'white' : 'black',
    // };

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: theme ? 'black' : 'white',
            color: theme ? 'white' : 'black',
        };
    }, [theme]);

    useEffect(() => {
        console.log('theme changed');
    }, [themeStyles]);

    return (
        <>
            <input type='number' value={number} onChange={(event) => setNumber(parseInt(event.target.value))} />
            <button onClick={() => setTheme((prevDark) => !prevDark)}>change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}
