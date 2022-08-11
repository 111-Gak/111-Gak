// src/pages/EditPage.jsx

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Button from "../components/Button";
import TextInputBox from "../components/TextInputBox";



export default function EditPage () {
    const [ editValue, setEditValue ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const inputValue = useSelector(state => state.posts.post);
    const postId = useParams('postId').postId;
    // console.log(postId);
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault(); //onSubmitHandler가 실행될 때 새로고침방지
        const newEditValue = {...editValue, ...inputValue, postId: postId}; //editValue:불러온, 이미 입력되었던,수정해야할 값
        axios.patch(`http://localhost:3001/posts/${editValue.id}`, newEditValue);
        // console.log({...editValue, ...inputValue, postId: postId})
        navigate(`/post/${postId}`);
    };





    const getPost = async() => {
        await axios.get("http://localhost:3001/posts?postId="+postId)
        .then(res => {
            setEditValue(...res.data) //data.data처럼 결과값 안에 data를 봐야합니다
            // console.log(...res.data)
            setLoaded(true) //기능충돌방지 ( 게시물을 읽어오기 전에 로드방지)
        }) 
        ;
        // console.log("http://localhost:3001/posts?postId="+postId)

    }
    useEffect(() => { // getPost가 화면이mount되었을 때 실행되기 위해useEffect(입력된 정보를 가져와야 하므로)
        getPost();
        // console.log(editValue);
    },[loaded])



    return (

        <MyForm 
        onSubmit={(e) => onSubmitHandler(e)}>

            <TextInputBox 
            name={'username'} 
            placeholder={'작성자'}
            max={20}
            required
            />

            <TextInputBox 

            name={'title'} 
            placeholder={'제목'}
            max={50}
            required
            />

            <TextInputBox 
            name={'chk'} 
            placeholder={'첫 번째 체크 박스'}
            max={100}
            required
            />

            <TextInputBox 
            name={'chk'} 
            placeholder={'두 번째 체크 박스'}
            max={100}
            />

            <TextInputBox 
            name={'chk'} 
            placeholder={'세 번째 체크 박스'}
            max={100}
            />

            <div>
                <Button
                type="button"
                buttonText={'수정하기'} 
                action={null}
                />
            </div>

        </MyForm>
    );
};


const MyForm = styled.form`

& > *:last-child {
    margin-top: 40px;
}
`;