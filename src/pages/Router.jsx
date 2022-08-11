import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NotFound from "./NotFound";
import WritePage from "./WritePage";
import CommunityPage from "./CommunityPage";
import Header from "../components/Header";
import EditPage from "./EditPage";
import DetailPage from "./DetailPage";
import Main from "./Main";

export default function Router(){
    return (
        <BrowserRouter>
            <Header />

            <Contents>
                <Routes>
                    <Route path="" element={<Main />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/posts" element={<CommunityPage />} />
                    <Route path="/post/:postId" element={<DetailPage />} />
                    <Route path="/post/:postId/edit" element={<EditPage />} />
                    
                </Routes>
            </Contents>

        </BrowserRouter>
    )
}

const Contents = styled.div`
    
width: 100%;
max-width: 1000px;
min-height: calc(100vh - 60px - 60px);

margin: 0 auto;
padding: 30px 10px 0;
box-sizing: border-box;
`