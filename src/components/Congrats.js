import congo from '../Images/congo.jpg'
const Congrats = () =>{
    return(
        <>
        <div className="flex justify-center items-center ">
              <img  className=' h-[70vh]'src={congo} alt='congo'/>
        </div>
         <div className='flex justify-center'>
         <span className='font-bold text-pink-500'>Congratulations! 🎉</span>
         <span className='font-bold'>Your order has been Placed Succesfully!</span>
   </div>
   </>
    )
}
export default Congrats