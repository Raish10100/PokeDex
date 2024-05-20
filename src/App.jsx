import { Link } from 'react-router-dom'
import './App.css'
import CustomRoute from './routes/CustomRoutes'

function App() {

  return (
    <>
    <Link to={'/'}>
        <h1 className='title text-center shadow text-[40px] font-serif py-[20px]  tracking-[8px] text-white'>PokeDex</h1>
    </Link>
        <CustomRoute />
    </>
  )
}

export default App
