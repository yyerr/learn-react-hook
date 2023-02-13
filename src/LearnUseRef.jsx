import { useState, useEffect, useRef } from 'react';

export default function LearnUseRef() {
    const [name, setName] = useState('');
    const inputRef = useRef();

    // const [renderCount, setRenderCount] = useState(0);
    // infinity loop render
    // useEffect(() => {
    //     setRenderCount((prevRenderCount) => prevRenderCount + 1);
    // });

    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    function focusInput() {
        // console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.value = 'value from focus btn'; // not even change the state
    }

    return (
        <>
            {/* <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} /> */}
            <input ref={inputRef} />
            <button onClick={focusInput}>focus input</button>
            <button onClick={() => setName(inputRef.current.value)}>print name</button>
            <h2>My Name is {name}</h2>
            <h2>I rendered {renderCount.current}</h2>
        </>
    );
}
