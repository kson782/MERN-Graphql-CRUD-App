import {Link} from 'react-router-dom'

function Home () {
  return (
    <div className='bg-gray-300 flex flex-col items-center border-4 border-black p-4 m-4 rounded-md w-1/2'>
        <h1 className='text-3xl text-center p-2 m-2'>Anime Graphql CRUD App</h1>
        <Link to='/animes'>
            <button className='bg-blue-500 text-white rounded-md p-1 m-1'>
            Get Started
            </button>
        </Link>
    </div>
  )
}

export default Home