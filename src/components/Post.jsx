import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function Post(props) {
    const {postId, username, createdAt, title, done, check}=props.list;

    return(
        <MyPost>
            <div className="post-header">
                <div>
                    <span className="post-name">
                        {done? "💚":"🖤"}
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
                <ProgressBar checkList={check} />

                <div>
                    {check.map((chk, i) => {
                        return (
                            <div key={chk.text}>
                                <input 
                                type="checkbox" 
                                name={'chk'+i} 
                                id={'chk'+i}
                                checked={chk.checked ? 'checked' : null}
                                onClick={()=>alert(postId, chk.i)}
                                onChange={()=>null}
                                />
                                <label htmlFor={'chk'+i} >
                                    {chk.text}
                                </label>
                            </div>
                        )
                    })}
                </div>

            </div>
        </MyPost>
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