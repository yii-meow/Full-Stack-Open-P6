import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        return anecdotes.filter(a => {
            return a.content.includes(filter)
        })
    })

    const vote = (id, content) => {
        dispatch(voteAnecdote(id))
        dispatch(createNotification(`you voted '${content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000);
    }

    return (
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>

                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
            </div>
        )
    )
}

export default AnecdoteList