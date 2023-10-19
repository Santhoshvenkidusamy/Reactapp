import React from 'react'
const style = {
    color: {
      backgroundColor: "#02060C",
    },
  };
const Spin = () => {
  return (
    <div>
      <div className="w-[100%] h-[350px]  flex flex-col justify-center items-center -mt-2" style={style.color}>
        <div className="w-20 h-20 border-4 border-l-transparent text-white rounded-[50%] animate-spin"></div>
        <h1 className='text-white mt-9 text-2xl'>Looking for great food near you ...</h1>
      </div>
    </div>
  );
}

export default Spin;