import { useQuery } from "@apollo/client";
import {GET_ANIME} from '../Queries';
import {useParams, Link} from 'react-router-dom';

function AnimeItem () {
    const {id} = useParams();
    const {data, error} = useQuery(GET_ANIME, {variables: {id}});

    if (error) return <p>Error</p>;
    
  return (
    <div className='flex flex-col items-center m-2 p-2 border-2 border-black rounded-md w-1/2'>
        {
        <div>
          <h1 className="text-xl underline font-medium">{data?.anime.title}</h1>
          <p>{data?.anime.studio}</p>
          <Link to='/animes'>
            <button className='bg-blue-500 text-white rounded-md py-1 px-3 m-1'>Back</button>
          </Link>
        </div>
        }
    </div>
  )
}

export default AnimeItem
