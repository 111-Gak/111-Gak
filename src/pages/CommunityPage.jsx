import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post"

export default function CommunityPage() {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        fetchPosts()
    }, [loaded])

    const fetchPosts = async () => {
        let data;
        try {
            data = await axios.get("https://sheltered-ocean-99610.herokuapp.com/posts")
        } catch (err) {
            console.log(err)
        } finally {
            setPosts(data.data)
            setLoaded(true)
        }
    }

    return (
        <>
            {loaded && posts.map(post => {
                    return <Post 
                    list={{...post}} 
                    key={post.postId}
                    />
                })
            }
        </>
    )
}