import {useState} from 'react'
import { CREATE_ANIME } from '../Mutations'
import { GET_ANIMES } from '../Queries'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

function NewAnime() {
    const navigate = useNavigate();
    const [createAnime] = useMutation(CREATE_ANIME, {
      refetchQueries: [{query: GET_ANIMES}],
    });
    const [form, setForm] = useState({title: '', studio: ''});
    const handleSubmit = (e) => {
        e.preventDefault()
        createAnime({variables: {title: form.title, studio: form.studio}})
        navigate('/animes')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center border-2 border-black p-4 m-4 rounded-md w-1/2'>
            <label classname='text-center' htmlFor="title">Title</label>
            <input className='rounded-md p-1 m-1 border-1 border-black' type="text" name='title' onChange={(e) => 
            {setForm({...form, [e.target.name]: e.target.value})}}/>
            <label htmlFor="studio">Studio</label>
            <input className='rounded-md p-1 m-1 border-1 border-black' type="text" name='studio' onChange={(e) => 
            {setForm({...form, [e.target.name]: e.target.value})}}/>
            <button className='bg-blue-500 text-white rounded-md py-1 px-3 m-1' 
            type='submit'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default NewAnime
