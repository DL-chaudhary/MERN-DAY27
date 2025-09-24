import React from 'react'
import "./Home.css";

function Card() {
  return (
    
       <>
    
<div className="container">
  
    <article className="card" aria-labelledby="card-title">
<div className="card__media">
<div>
<h1 id="card-title" className="title">Card Title</h1>
<p className="subtitle">This is the subtitle</p>
</div>
</div>


<div className="card__content">
<p className="description">This card shows a concise title, a supporting subtitle and a short description. Use it for profile previews, product highlights, or informational snippets. It is responsive and has subtle hover motion for better UX.</p>


<div className="actions">
<button className="btn btn--primary">Primary</button>
<button className="btn">Secondary</button>
</div>


<div className="meta">
<span className="avatar" aria-hidden="true"></span>
<span>By <strong>Author Name</strong> • 2 days ago</span>
</div>
</div>
</article></div></>
  )
}

export default Card