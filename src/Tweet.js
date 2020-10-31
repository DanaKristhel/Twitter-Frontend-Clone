import React from 'react'

const Tweet = (props) => {
    const text = props.text
    const author = props.author
    const date = props.date
    return (
    <div><h3>{text.toUpperCase()}</h3>
    <h6>By {author} on {date}</h6>
    </div>
        )
}
export default Tweet;