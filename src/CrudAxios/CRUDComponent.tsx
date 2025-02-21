import React, { useState, useEffect } from "react";
import axiosInstance from "./api/axiosInstance";

const CRUDComponent = () => {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({ title: "", body: "" });

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Create post
  const createPost = async () => {
    try {
      const response = await axiosInstance.post("/posts", postData);
      setPosts([response.data, ...posts]); // Add newly created post to the list
      setPostData({ title: "", body: "" });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Update post
  const updatePost = async (id) => {
    const updatedData = {
      title: "Updated Title",
      body: "Updated body content",
    };
    try {
      await axiosInstance.put(`/posts/${id}`, updatedData);
      setPosts(
        posts.map((post) =>
          post.id === id ? { ...post, ...updatedData } : post
        )
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Delete post
  const deletePost = async (id) => {
    try {
      await axiosInstance.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h1>CRUD Operations with Axios</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />
        <button onClick={createPost}>Create Post</button>
      </div>

      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Update</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDComponent;
