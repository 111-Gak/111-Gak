import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import CheckBox from "./CheckBox";

export default function Post(props) {
    const navigate = useNavigate();
    const {id, postId, username, createdAt, title, done} = props.list;
    
    const [chks, setChks] = useState();
    const [doneResult, setDoneResult] = useState(done);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        fetchChks()
    }, [loaded])

    const fetchChks = async () => {
        let data;
        try {
            data = await axios.get(`http://localhost:3001/checklist/${id}`)
        } catch (err) {
            console.log(err)
        } finally {
            setChks(data.data)
            chkDone(data.data)
            setLoaded(true)
        }
    }
    const chkDone = (list) => {
        let count = 0;
        for (const x in list){
            if(list[x] === 1 && x !== "id") count++;
        }
        if( count === 3 ){
            updatePostDone(id, 1)
        } else if( count < 3 && done === 1 ){
            updatePostDone(id, 0)
        }
    }

    const updatePostDone = async (doneId, newDone) => {
        let data;
        try {
            data = await axios.patch(`http://localhost:3001/posts/${doneId}`, {id: doneId, done: newDone})
        } catch (err) {
            console.log(err)
        } finally {
            setDoneResult(newDone);
        }
    }

    return (
    <>
        {loaded && <MyPost>
            <div className="post-header"  
            onClick = {()=> {
                navigate('/post/'+postId)}
            }>
                <div>
                    <span className="post-name">
                        {doneResult? "💚":"🖤"}
                        {username}
                    </span>
                    <span className="post-title">
                        {title}
                    </span>
                </div>
                <span className="post-date">
                    {createdAt}
                </span>
            </div>
            <div className="post-body">
                <ProgressBar chks={chks} postId={postId} />

                <div>
                    <CheckBox chks={chks} postId={postId} id={id} setLoaded={setLoaded}/>
                </div>

            </div>
        </MyPost>
        }
    </>
    )
}

const MyPost = styled.div`
display: flex;
gap: 30px;
border: 1px solid #ddd;
box-sizing: border-box;
padding: 10px 15px;
margin-bottom: 20px;

.post-header {
    width: 150px;
    min-height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}

.post-title,
.post-date {
    display: block;
}

.post-name {
    font-size: 0.8em;
}

.post-title {
    display: block;
    font-size: 1.2em;
}

.post-date {
    display: block;
    font-size: 0.8em;
}

.post-body {
    flex: 1 1 auto;    
    display: flex;
    flex-flow: column;
    justify-content: space-between;

}

`