import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export default function Header() {
    let navigate = useNavigate();
    return (
        <MyHeader>
            <div className="contents-area">
                <span onClick={()=> navigate('/')}>
                    제목
                </span>
                <ul className="menu-ul">
                    <li className="menu-li" onClick={()=> navigate("/posts")}>
                        목록
                    </li>
                    <li className="menu-li" onClick={()=> navigate('/write')}>
                        새로 작성
                    </li>
                </ul>
            </div>
        </MyHeader>
    )
}

const MyHeader = styled.header`

line-height: 60px;
background-color: #eee;

.contents-area {
    width: 100%;
    max-width: 1000px;
    
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
}

ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

.menu-ul {
    display: flex;
    gap: 5px
}

.menu-li {
    padding: 0 10px;
    cursor: pointer;
}

`