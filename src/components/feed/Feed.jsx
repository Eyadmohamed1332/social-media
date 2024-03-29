import Post from "../posts/Post"
import Share from "../share/Share"
import "./feed.css"
import React from 'react'
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}
