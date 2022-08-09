import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import Button from "../components/Button";
import TextInputBox from "../components/TextInputBox";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function WritePage() {
    const navigate = useNavigate();
    const post = useSelector(state => state.posts.post);
    const checklist = useSelector(state => state.checklist.checklist);

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        
        const newPostId = nanoid(10);

        const newPost = {...post, postId: newPostId};
        Axios.post("http://localhost:3001/posts/", newPost)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        let initCheck;
        for (const chk in checklist){
            initCheck = {...initCheck, [chk.slice(0, 4)] : 0}
        }

        const newChecklist = {...checklist, ...initCheck, postId: newPostId};

        Axios.post("http://localhost:3001/comments/", newChecklist)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        navigate('/community')
    };

    return (
        <MyForm 
        onSubmit={(ev) => onSubmitHandler(ev)}>

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
            name={'chk1'} 
            placeholder={'첫 번째 체크 박스'}
            max={100}
            required
            />

            <TextInputBox 
            name={'chk2'} 
            placeholder={'두 번째 체크 박스'}
            max={100}
            />

            <TextInputBox 
            name={'chk3'} 
            placeholder={'세 번째 체크 박스'}
            max={100}
            />

            <div>
                <Button 
                buttonText={'클릭하세요'} 
                action={null}
                />
            </div>

        </MyForm>
    )
}

const MyForm = styled.form`

& > *:last-child {
    margin-top: 40px;
}

`