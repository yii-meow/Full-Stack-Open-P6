import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = e => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''

        dispatch(createAnecdote(content))

        dispatch(createNotification(`you have created a new anecdote '${content}'`))

        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000);
    }

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={create}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>

    )
}

export default AnecdoteForm