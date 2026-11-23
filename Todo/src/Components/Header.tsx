import {Anime} from '../Components/Assets/index'
function Header() {
  return (
    <div className="text-white font-mono font-bold text-md flex items-center justify-between p-4">
        <h1>CCCXLVII</h1>
        <img src={Anime} alt=""  className='h-8'/>
        <h1>Todo's App</h1>
    </div>
  )
}

export default Header