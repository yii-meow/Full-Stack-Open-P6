import { useQuery, useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from "../requests"
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
      dispatch({ type: "CREATE", payload: `A new anecdote '${newAnecdote.content}' created` })

    },
    onError: ({ response }) => {
      dispatch({ type: "CREATE", payload: `${response.data.error}` })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    setTimeout(() => {
      dispatch({ type: "REMOVE" })
    }, 5000);
  }

  return (

    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div >
  )
}

export default AnecdoteForm
