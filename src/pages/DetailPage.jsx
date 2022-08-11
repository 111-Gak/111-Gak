import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Post from "../components/Post";
import styled from "styled-components";
import Button from "../components/Button";

export default function DetailPage (){
    const postId = useParams('postId').postId;
    const navigate = useNavigate();
    const [ loaded, setLoaded ] = useState(false);


    const [post, setPost] = useState([]);
    const fetchPost = async () => {
        const { data } = await axios.get("http://localhost:3001/posts?postId="+postId)  

        setPost(...data);
        setLoaded(true)
    };
    const deletePost = async () => {
        await axios.delete("http://localhost:3001/posts?postId")
    };

    
    useEffect(()=>{
        fetchPost()
    }, [loaded]);

    const onClickEditButton = () => {
        navigate(`/post/${postId}/edit`);
    };

    const onClickDeleteButton = () => {
        navigate(`/posts`);
    };

    return (
        <>
        {loaded && <Detail>
            <Post list={{...post}} key={post.postId} />
            <Button 
                buttonText={'수정하기'} 
                action={onClickEditButton}
            />
            <Button 
                buttonText={'삭제하기'} 
                action={onClickDeleteButton}
            />
        </Detail>
        }
        </>

    );
};

const Detail = styled.div`
    & > div {
        /* background: red; */
        padding-top: 40px;
        flex-flow: column;
        position: relative;
    }
    .post-header {
        width: 100%;
        flex: 1 1 auto;
        text-align: center;
        padding-top: 15px;
    }
    .post-title {
        margin: 10px 0 20px;
        font-size: 30px;
    }
    .post-body > *:first-child {
        position: absolute;
        top: 1em;
        max-width: calc(100% - 2em);
    }
`