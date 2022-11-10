import {useQuery, useMutation} from '@apollo/client';
import { GET_ANIMES } from '../Queries';
import { DELETE_ANIME} from '../Mutations';
import {Link} from 'react-router-dom';

function AnimeList() {
    const {data, refetch} = useQuery(GET_ANIMES)
    const [deleteAnime] = useMutation(DELETE_ANIME)


    return(
        <div className='flex flex-col items-center border-4 border-black p-4 m-4 rounded-md w-1/2'>
            {
                data?.animes.map((anime) => (
                    <div key={anime.id}>
                        <Link to={`/animes/${anime.id}`}><h1 className='text-xl font-medium underline hover:text-blue-500'>{anime.title}</h1></Link>
                        <Link to={`/animes/edit/${anime.id}`}>
                            <button className='bg-blue-500 text-white rounded-md py-1 px-3 m-1'>
                            Edit
                            </button>
                        </Link>
                        <button className='bg-blue-500 text-white rounded-md p-1 m-1' onClick={() => {
                            deleteAnime({variables: {id: anime.id}});
                            refetch();
                            }}>Delete</button>
                    </div>
                ))
            }
            <Link to='/animes/new'><button className='bg-blue-500 text-white rounded-md m-3 p-3'>Add Anime</button></Link>
        </div>
    )
}

export default AnimeList