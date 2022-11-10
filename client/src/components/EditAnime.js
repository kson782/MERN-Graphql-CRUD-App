import {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {UPDATE_ANIME} from '../Mutations';
import {GET_ANIME, GET_ANIMES} from '../Queries';
import {useMutation, useQuery} from '@apollo/client';


function EditAnime() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data} = useQuery(GET_ANIME, {variables: {id}});
    const [updateAnime] = useMutation(UPDATE_ANIME, {
        refetchQueries: [{query: GET_ANIMES}],
    })
    const [studio, setStudio] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        updateAnime({variables: {id: id, studio: studio}})
        navigate('/animes')
    }

  return (
    <div className='flex flex-col items-center m-2 p-2 border-2 border-black rounded-md w-1/2'>
        <div>
            {
                <h1 className='text-xl underline font-medium'>{data?.anime.title}</h1>
            }
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center m-2 p-2'>
                <label htmlFor="studio">Studio</label>
                <input className='rounded-md p-1 m-1 border-1 border-black'
                type="text" name='studio' onChange={(e) => 
                {setStudio(e.target.value)}}/>
                <button className='bg-blue-500 text-white rounded-md py-1 px-3 m-1' 
                type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default EditAnime
