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
                TIL
            </ButtonStyle>
            <ButtonStyle onClick={() => {
                nagivate("/posts")
            }}>
                
                커뮤니티
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
    width: 700px;
    height: 150px;
    margin: 20px auto;
    background: orange;
    color: #ffffff;
    font-size: 30px;
    line-height: 42px;
    border-radius: 20px;
    padding: 0;
    border: none;
    position: relative; //수정 기준점, 

    &:hover {
    background: transparent;
    color: #816f6f;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #eee3e320,
    4px 4px 5px 0px #bbb5b511;
    }
    &:before,
    &:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: orange;
    transition:400ms ease all;
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