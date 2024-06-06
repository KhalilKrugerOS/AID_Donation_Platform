"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Ajoutez les icônes à la bibliothèque
library.add(faTrashAlt, faEdit, faHeart);

interface Comment {
  id: number;
  text: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  likes: number;
  photo?: string;
  comments: Comment[];
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Publication 1",
      content: "Ceci est le contenu de la première publication.",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Publication 2",
      content: "Ceci est le contenu de la deuxième publication.",
      likes: 0,
      comments: [],
    },
  ]);

  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState("");

  const handleLike = (postId: number) => {
    if (likedPosts.has(postId)) {
      return;
    }

    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
    setLikedPosts(new Set(likedPosts).add(postId));
  };

  const handleAddPost = () => {
    if (editingPost) {
      handleUpdatePost();
      return;
    }

    const newPost: Post = {
      id: posts.length + 1,
      title: title,
      content: content,
      likes: 0,
      comments: [],
      photo: photo ? URL.createObjectURL(photo) : undefined,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    setPhoto(null);
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setPhoto(null);
  };

  const handleUpdatePost = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingPost?.id
          ? {
              ...post,
              title: title,
              content: content,
              photo: photo ? URL.createObjectURL(photo) : post.photo,
            }
          : post
      )
    );
    setTitle("");
    setContent("");
    setPhoto(null);
    setEditingPost(null);
  };

  const handleAddComment = (postId: number) => {
    if (newComment.trim() === "") return;

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const updatedComments = [
            ...post.comments,
            { id: post.comments.length + 1, text: newComment },
          ];
          return { ...post, comments: updatedComments };
        }
        return post;
      })
    );

    setNewComment("");
  };

  const styles = {
    container: {
      width: "60%",
      margin: "20px auto",
      textAlign: "center" as "center",
      backgroundColor: "#f0f2f5",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center" as "center",
      margin: "20px 0",
      fontSize: "30px",
      fontWeight: "bold",
      color: "#007BFF",
    },
    post: {
      backgroundColor: "#fff",
      margin: "20px 0",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left" as "left",
      animation: "fadeIn 0.5s",
    },
    postTitle: {
      margin: "0 0 10px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#007BFF",
    },
    postContent: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
    postImage: {
      maxWidth: "100%",
      height: "auto",
      margin: "10px 0",
    },
    likeButton: {
      display: "inline-block",
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#FF0000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    likeButtonDisabled: {
      display: "inline-block",
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#aaa",
      backgroundColor: "#ccc",
      border: "none",
      borderRadius: "5px",
      cursor: "not-allowed",
    },
    likeButtonHover: {
      backgroundColor: "#CC0000",
    },
    likeCount: {
      display: "inline-block",
      marginLeft: "10px",
      fontSize: "16px",
      color: "#555",
    },
    addPostForm: {
      display: "flex",
      flexDirection: "column" as "column",
      marginBottom: "20px",
      alignItems: "center",
    },
    input: {
      marginBottom: "10px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "100%",
    },
    addButton: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#28a745",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    addButtonHover: {
      backgroundColor: "#218838",
    },
    fileInput: {
      display: "none",
    },
    fileInputLabel: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#007BFF",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "10px",
    },
    iconButton: {
      display: "inline-block",
      marginTop: "10px",
      marginLeft: "10px",
      padding: "10px",
      fontSize: "16px",
      color: "#007BFF",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    icon: {
      fontSize: "20px",
    },
    commentSection: {
      marginTop: "20px",
    },
    comment: {
      backgroundColor: "#f0f2f5",
      margin: "10px 0",
      padding: "10px",
      borderRadius: "5px",
    },
    commentInput: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    addCommentButton: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#007BFF",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    addCommentButtonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Feed</h1>
      <div style={styles.addPostForm}>
        <input
          style={styles.input}
          type="text"
          placeholder="Titre de la publication"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={styles.input}
          placeholder="Contenu de la publication"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="fileInput" style={styles.fileInputLabel}>
          Choisir un fichier
        </label>
        <input
          id="fileInput"
          type="file"
          style={styles.fileInput}
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
        />
        <button
          style={styles.addButton}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.addButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.addButton.backgroundColor)
          }
          onClick={handleAddPost}
        >
          {editingPost ? "Modifier Publication" : "Ajouter Publication"}
        </button>
      </div>
      {posts
        .sort((a, b) => b.likes - a.likes)
        .map((post) => (
          <div key={post.id} style={styles.post}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.postContent}>{post.content}</p>
            {post.photo && (
              <img src={post.photo} alt={post.title} style={styles.postImage} />
            )}
            <button
              style={
                likedPosts.has(post.id)
                  ? styles.likeButtonDisabled
                  : styles.likeButton
              }
              onMouseOver={(e) => {
                if (!likedPosts.has(post.id)) {
                  e.currentTarget.style.backgroundColor =
                    styles.likeButtonHover.backgroundColor;
                }
              }}
              onMouseOut={(e) => {
                if (!likedPosts.has(post.id)) {
                  e.currentTarget.style.backgroundColor =
                    styles.likeButton.backgroundColor;
                }
              }}
              onClick={() => handleLike(post.id)}
              disabled={likedPosts.has(post.id)}
            >
              <FontAwesomeIcon icon={faHeart} /> J'adore
            </button>
            <span style={styles.likeCount}>{post.likes} j'adore</span>
            <button
              style={styles.iconButton}
              onClick={() => handleEditPost(post)}
            >
              <FontAwesomeIcon icon={faEdit} style={styles.icon} />
            </button>
            <button
              style={styles.iconButton}
              onClick={() => handleDeletePost(post.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} />
            </button>
            <div style={styles.commentSection}>
              {post.comments.map((comment) => (
                <div key={comment.id} style={styles.comment}>
                  {comment.text}
                </div>
              ))}
              <textarea
                style={styles.commentInput}
                placeholder="Ajouter un commentaire"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                style={styles.addCommentButton}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.addCommentButtonHover.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.addCommentButton.backgroundColor)
                }
                onClick={() => handleAddComment(post.id)}
              >
                Ajouter Commentaire
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Feed;
