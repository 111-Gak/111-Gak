import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NotFound from "./NotFound";
import WritePage from "./WritePage";
import CommunityPage from "./CommunityPage";
import Header from "../components/Header";


export default function Router(){
    return (
        <BrowserRouter>
            <Header />

            <Contents>
                <Routes>
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Contents>

        </BrowserRouter>
    )
}

const Contents = styled.div`
    
width: 100%;
max-width: 1000px;

margin: 0 auto;
padding: 30px 10px 0;
box-sizing: border-box;

`