import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams(); // Get dynamic parameter from the URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data dynamically based on the post ID
    useEffect(() => {
        const fetchPost = async() => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div > Loading... < /div>;
    }

    if (!post) {
        return <div > Post not found < /div>;
    }

    return ( <
        div >
        <
        h1 > { post.title } < /h1> <
        p > { post.body } < /p> <
        /div>
    );
};

export default Post;