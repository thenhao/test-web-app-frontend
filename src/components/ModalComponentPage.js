import React from 'react';
// import closeicon from '../assets/close-icon.png';

const ModalComponentPage = ({selectedData}) => {

// items-center //fixed
  return (
    <div className={`inset-0 flex flex-row justify-center transition-colors h-lvh`}>
        {/* div for holding the info together */}
        <div className='w-96 border-solid border-white bg-white flex flex-col overflow-auto items-stretch h-full gap-2'>
            {/* banner plus X button */}
            <div id={"productHeader"} className='flex w-full justify-end bg-white'>
                <div id="bannerImageSection" className='flex flex-row w-full bg-white items-stretch w-full'>
                    <img src={selectedData.brandPic} alt={"brandPic"} className='w-full'></img>
                </div>
            </div>
            {/* Body with the description */}
            <div id={"productDescription"} className='bg-white h-full flex flex-col items-start gap-2 p-1'>
                    {/* <>{selectedData.details}</> */}
                    <div>
                        <div className="flex flex-row items-start">
                            <strong>Clinic:</strong> 
                            {selectedData.clinicName}
                        </div>

                        <div className="flex flex-row items-start">
                            <strong>Package:</strong>
                            {selectedData.productName}
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-start content-start place-items-start text-start" dangerouslySetInnerHTML={{__html: selectedData.details}}></div>
            </div>
        </div>
        {/* <div id="close button" className='w-12 h-10'>
            <button onClick={setModalOpen}>
                <img src={closeicon}></img>
            </button>
        </div> */}
        
    </div>
  )
}

export default ModalComponentPage
