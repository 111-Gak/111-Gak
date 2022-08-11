import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export default function Header() {
    let navigate = useNavigate();
    return (
        <MyHeader>
            <div className="contents-area">
                <div className="logo" onClick={()=> navigate('/')}>
                    <span>1</span>
                    <span>일</span>
                    <span> </span>
                    <span>1</span>
                    <span>T</span>
                    <span>I</span>
                    <span>L</span>
                    <span>각</span>
                </div>
                <ul className="menu-ul">
                    <li className="menu-li" onClick={()=> navigate("/")}>
                        HOME
                    </li>
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
line-height: 80px;
padding-top: 2px;
height: 85px;
font-size: 18px;
background-color: #eee;
    box-shadow: 0 0px 15px rgba(0,0,0,0.1);

.contents-area {
    width: 100%;
    max-width: 1000px;
    
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

}

.logo {
    font-weight: 800;
    color: transparent;
    font-size: 26px;
    cursor: pointer;
}

.logo span:nth-child(1) {
    animation: show .2s forwards;
    animation-delay: .2s;
}

.logo span:nth-child(2) {
    animation: show .2s forwards;
    animation-delay: .4s;
}

.logo span:nth-child(3) {
    
    animation: show .2s forwards;
    animation-delay: .6s;
}

.logo span:nth-child(4) {
    
    animation: show .2s forwards;
    animation-delay: .8s;
}

.logo span:nth-child(5) {
    
    animation: show .2s forwards;
    animation-delay: 1.0s;
}

.logo span:nth-child(6) {
    
    animation: show .2s forwards;
    animation-delay: 1.2s;
}

.logo span:nth-child(7) {
    
    animation: show .2s forwards;
    animation-delay: 1.4s;
}

.logo span:nth-child(8) {
    
    animation: show .2s forwards;
    animation-delay: 1.6s;
}

@keyframes show {
    0% {opacity: 0}
    100% {opacity: 1; color: #222}
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
    color: #888;
    padding: 0 16px;
    cursor: pointer;
    transition: color .2s;
}

.menu-li:hover {
    color: #222;
    border-bottom: 2px solid #222;
    box-sizing: border-box;
}

`