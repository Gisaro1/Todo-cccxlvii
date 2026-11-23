import {AddBlack} from '../Components/Assets/index'
function MainContent() {
  return (
    <div className='flex items-center justify-center pt-32'>
        <form action="" className='flex items-center justify-center bg-white w-164 px-4 rounded-lg'>
            <input type="text" placeholder='Add todo..' className='text-black outline-none w-full'/>
            <button> <img src={AddBlack} alt="" className='h-10' /></button>
        </form>
    </div>
  )
}

export default MainContent