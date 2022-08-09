import styled from "styled-components";

export default function Button(props){
    const {buttonText, action} = props;
    return (
        <CommonButton 
        onClick={action}
        >
            {buttonText}
        </CommonButton>
    )
}

const CommonButton = styled.button`
all: unset;
display: block;

margin: 0 auto;
padding: 10px 20px;
border-radius: 4px;

font-size: 14px;
border: 1px solid #aaa;
transition: all 0.2s;
cursor: pointer;

&:hover {
    background-color: #aaa;
    border-color: #aaa;
    color: #fff;
}

`