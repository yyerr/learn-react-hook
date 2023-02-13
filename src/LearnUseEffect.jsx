import { useState, useEffect } from 'react';

export default function LearnUseEffect() {
    const [result, setResult] = useState('first');

    console.log('render');

    useEffect(() => {
        return () => {
            console.log('re-render ' + result);
        };
    }, [result]);

    useEffect(() => {
        console.log('render only at first');
    }, []);

    //-------------------
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div>
                <button onClick={() => setResult('Users')}>Users</button>
                <button onClick={() => setResult('Posts')}>Posts</button>
            </div>
            <h1>{result}</h1>
            <br />
            <h2>resize width : {windowWidth}</h2>
        </>
    );
}
