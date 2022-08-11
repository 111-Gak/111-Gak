import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Main = () => {
    const nagivate = useNavigate();
    return (
        <div>
            <ButtonGroup>
            <ButtonStyle onClick={() => {
                nagivate("/write")
            }}>
                🖤새 TIL 작성하기
            </ButtonStyle>
            <ButtonStyle onClick={() => {
                nagivate("/posts")
            }}>
                
                보러가기💚
            </ButtonStyle>
            </ButtonGroup>
        </div>
    )
}

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 170px;
`

const ButtonStyle = styled.button`
    font-family: 'LeeSeoyun';
    
    width: 700px;
    height: 120px;
    margin: 20px auto;
    background: #777777;
    color: #ffffff;
    font-size: 2em;
    line-height: 36px;
    border-radius: 100px;
    padding: 0;
    border: none;
    position: relative; //수정 기준점, 
    transition: all 0.2s;

    &:hover {
    background: transparent;
    color: #777777;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #eee3e320,
    4px 4px 5px 0px #bbb5b511;
    font-weight: 700;
    }
    &:before,
    &:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:5px;
    width:0;
    background-image: linear-gradient(to left, transparent 40%, #555, transparent 60%);
    transition: .2s ease all;
    }
    &:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
    }
    &:hover:before,
    &:hover:after{
    width:100%;
    transition:800ms ease all;
    }
`
    

export default Main;