import styled from "styled-components";
import { useDispatch } from "react-redux"
import { editPost } from "../store/modules/posts"
import { editComment } from "../store/modules/comments"
import { editChecklist } from "../store/modules/checklist"

export default function TextInputBox(props){
    const dispatch = useDispatch();
    const {name, placeholder, max=null, min=null, required=null, action=null} = props;

    return (
        <InputBox>
            <label htmlFor={name}>
                {placeholder}
                {required?"*":""}
            </label>
            <input 
            id={name}
            name={name}
            type="text"
            placeholder={`${placeholder}`}
            autoComplete="off"
            maxLength={max}
            minLength={min}
            required={required}
            onChange={(e)=> {
                const currentValue = e.target.value;

                if(name.indexOf('comment') > -1) {
                    dispatch(editComment({name, currentValue}))
                } else if(name.indexOf('chk') > -1) {
                    dispatch(editChecklist({name, currentValue}))
                } else {
                    dispatch(editPost({name, currentValue}))
                }
            }}
            />
        </InputBox>
    )
}

const InputBox = styled.div`
max-width: 500px;
margin: 0 auto 10px;
display: flex;
flex-flow: column;

label {
    font-size: 14px;
    color: #555;
    padding: 10px 0 5px;
}
input {
    padding: 10px 10px;
}
`