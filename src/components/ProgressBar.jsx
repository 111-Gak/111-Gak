import { useEffect, useState } from "react";

import styled from "styled-components";

export default function ProgressBar(props){
    const {chks} = props
    const [counts, setCounts] = useState(0);
    
    useEffect(()=>{
        renderCount();
    }, [])

    const renderCount = () => {
        setCounts(0)  
        
        for (const x in chks){
            if(chks[x]===1 && x !== 'id') {
                setCounts(curr => curr+1)  
            }
        }
    }

    return (
        <>
            <MyProgressBar counts={counts}>
                <div className="percent">
                    {Math.round((counts * 33.3 ) - 0.2)}%
                </div>    
            </MyProgressBar>
        </>
    )
}

const MyProgressBar = styled.div`
    width: ${(props) => ((props.counts / 3) * 100) + '%'};
    height: 13px;
    border-radius: 3px;
    margin-top: 10px;

    background-color: yellowgreen;
    background-image: linear-gradient(to left, #1ac51a, #83d744);
    
    position: relative;
    animation: scaleX 0.3s;
    transform-origin: left;

    @keyframes scaleX {
        0% { transform: scaleX(90%) }
    }

    .percent {
        display: inline-block;
        position: absolute;
        left: 4px;
        top: -1px;

        color: green;
        
        font-size: 10px;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`