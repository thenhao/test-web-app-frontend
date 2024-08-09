import React from 'react'
import ModalComponentPage from '../components/ModalComponentPage';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from'../../src/assets/back-icon.png';

const ProductInfo = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  const selectedData = location.state;

  function prevPage(){
    navigate(-1);
  }

  // TODO:
  // row height and container boundary (same style as care app)
  // ICON for back button (same style as care app)
  // take out the modal and make it a page instead showing information


  return (
    <div className='flex flex-col'>
      {/* This is a navigated page */}
      {/* back button here navigate back to the previous page, usenavigate ? */}
      <div className='flex flex-row w-full h-[80px] content-center'>
        {/* text-center content-center items-center justify-items-center justify-center */}
        <div className='flex flex-row w-full self-stretch items-stretch'>
          {/* <div className='w-1/12'>
            <button onClick={prevPage}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlFpskj6jxJ6yIUdGeLeEzXrvch28ecF3dg&s'} alt={"clinicLogo"}/>
              </button>
          </div> */}
    
          <div className='flex flex-row w-full justify-center text-center items-center text-xl'>
            <button className='absolute left-5' onClick={prevPage}>
                <img 
                className='w-[30px] h-[30px]'
                src={backIcon} 
                alt={"clinicLogo"}/>
            </button>
              Package Details
          </div>
        </div>
        
      </div>

      <ModalComponentPage selectedData={selectedData}/> 
    </div>
  )
}

export default ProductInfo;
