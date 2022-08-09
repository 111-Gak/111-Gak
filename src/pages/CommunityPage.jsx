import Post from "../components/Post"
import { useEffect, useState } from "react";
import axios from "axios";

export default function CommunityPage() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts")

        setPosts(data);
    }
    
    useEffect(()=>{
        fetchPosts()
    }, [])
    console.log(posts)

    return (
        <>
            {posts.map(post => <Post list={post} key={post.postId} />)}
        </>
    )
}