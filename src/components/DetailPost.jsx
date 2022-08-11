
import styled from "styled-components";
import ProgressBar from "./ProgressBar";




export default function DetailPost (props) {
    const {postId, username, createdAt, title, done, check}=props.list;


    return (
        <Layout onClick={() => {
            console.log("페이지이동")}}>
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
            <CenterPost>
                디테일 페이지입니다
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
            </CenterPost>

            <ButtonBox>
                <button>이전으로 </button>
            </ButtonBox>
        </Layout>
    );
};

const Layout = styled.div`
    background-color: gray;

    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
;

const CenterPost = styled.div`
    background-color: yellow;

    width: 50vw;
    min-width: 40vw;
    height: 50vh;

`;

const ButtonBox = styled.div`
    background-color: pink;
    float: right;
`;