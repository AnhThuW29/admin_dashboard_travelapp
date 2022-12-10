import React from 'react'
// import img from '../../imgs/blank.png'
import './PostCard.css'
import SimpleBlogCard from '../Cards/BlogCards/index'

export default function PostCard({ post }) {
    if (!post) return null
    const { title, thumbnail, tags, content, createAt } = post
    return (
        <div>
            <img src={thumbnail || '../../imgs/blank.png'} alt="title" />
            <h1>{title}</h1>
            <p>{content}</p>

            <p>{createAt}</p>
            <p>{tags.join(', ')}</p>
        </div>

    )
}


