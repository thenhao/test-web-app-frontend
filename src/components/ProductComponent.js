import React from 'react'

const ProductComponent = ({data, index, setIsOpen, setSelectedData}) => {
    //things needed:
    //product name, clinic name, details, price
    //product name have image and the product name
    //clinic name have image and clinic name
    //details have basic details and can show more. 
    //show more to show modal ?
    //just show more to show the details in the modal for the product itself
    //price just show price
    function setModalOpen(){
        setSelectedData(data);
        setIsOpen(true);
    }
  return (
    <div className="bg-gray-200 w-[600px] flex flex-col gap-8 p-4">
        {/* currently {index + 1}    */}
        {/* {data.brandPic} */}
        <div id="clinicImageSection" className='w-48'>
            <img src={data.clinicImage} alt={"clinicLogo"}/>
        </div>
        <div id="productTextSection" className='flex flex-col items-start gap-4'>
            <div>
                {data.productName}
            </div>
            
            {/* {data.clinicName} */}

            <div id="priceAndShowMore" className='flex flex-row justify-between w-full'>
                <div>${data.price}</div>
                <div>
                    <button onClick={setModalOpen}>Show More</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductComponent
