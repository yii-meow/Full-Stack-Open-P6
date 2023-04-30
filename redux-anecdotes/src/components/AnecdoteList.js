import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        return anecdotes.filter(a => {
            return a.content.includes(filter)
        })
    })

    const vote = (id, content) => {
        dispatch(voteAnecdotes(id))
        dispatch(setNotification(`you voted '${content}'`, 10))
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