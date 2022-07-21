import React from 'react'

const minutesEmoji = (minutes) => {
    let emoji = '☕️'
    let number = Math.floor(minutes / 5)

    if (minutes >= 30) {
        emoji = '🍱'
        number = Math.ceil(minutes / 10) 
    }

    return emoji.repeat(number)
}

const Article = ({ title, date ='January 1, 1970', preview, minutes}) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutesEmoji(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article

