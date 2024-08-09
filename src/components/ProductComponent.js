import {React, useEffect, useState} from 'react';
import TagComponent from './TagComponent';

const ProductComponent = ({data, index, setIsOpen, setSelectedData, navigate}) => {

    const arrayOfTags = (data?.tags?.length ?? 0) > 0 ? data.tags : false;
    // const [arrayOfTags, setArrayOfTags] = useState([]);

    
    // useEffect(() => {
    //     //Runs only on the first render
    //     if((data?.tags?.length ?? 0) > 0 ){
    //         setArrayOfTags(data.tags);
    //     }else{
    //         setArrayOfTags([]);
    //     }
    //   }, [data]);
    
    
    console.log('arrayOfTags is :', arrayOfTags);
    console.log('arrayOfTags is :', typeof(arrayOfTags));

    //things needed:
    //product name, clinic name, details, price
    //product name have image and the product name
    //clinic name have image and clinic name
    //details have basic details and can show more. 
    //show more to show modal ?
    //just show more to show the details in the modal for the product itself
    //price just show price
    function setModalOpen(){
        // navigate(`/product/${data.productName}`);
        setSelectedData(data);
        setIsOpen(true);
        //need to check the text for any '/' and change it to a certain sign
        const productName = data.productName;
        const checkedProductName = productName.replace('/','Or');
        navigate(`${checkedProductName}`, {state: data});
    }

  return (
    <div className="bg-gray-200 w-[423px] h-[157px] flex flex-col gap-8 pt-[24px] pr-[16px] pb-[16px] pl-[16px] border-t-4 border-[#9D2235] shadow-[2px_4px_8px_0_#E4E7E6] justify-between">
        {/* currently {index + 1}    */}
        {/* {data.brandPic} */}
        {/* Upper section of Main */}
        <div className='h-[51px] flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <div id="clinicImageSection" className='w-[82px] max-w-[235px] h-[24px]'>
                    <img src={data.clinicImage} alt={"clinicLogo"}/>
                </div>
                {/* If there are tags it would be inside this section */}
                {/* <div className='w-[39px] h-[22px] rounded-[100px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-1 bg-[#FBEAEA] font-sans font-medium text-[#D94344] text-[10px]'>
                    {data.tags[0]}
                    {/* Need to make it a component so that we can differentate the color and word */}
                    {/* Whole div is the component so that we can map out the color too */}
                
                {/* {arrayOfTags.length > 0 ? arrayOfTags.map(function (tag){
                return <><TagComponent tagData={tag} /></>} ) : <></>} */}

                { arrayOfTags.length > 0 ?
                arrayOfTags.map(function (tag, index) {
                    return <TagComponent key={index} tagData={tag} />;
                }
                ): <></>}

                
            </div>
            
            <div className=' max-w-[235px] h-[19px] text-left font-sans font-semibold text-base '>
                {data.productName}
            </div>
        </div>
        
        
        {/* Lower section of Price */}
        <div id="productTextSection" className='flex flex-col items-start'>
            <div id="priceAndShowMore" className='flex flex-row justify-between w-full'>
                <div className='font-sans font-lg text-base'>
                    ${data.price}
                </div>
                <div className='h-[16px] font-sans font-semibold text-base text-[#2F9D77]'>
                    <button onClick={setModalOpen}>
                        <div className='flex flex-row gap-x-1'>
                            <div>
                                Book now
                            </div>
                            <div className='flex flex-row items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        
                    </button>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductComponent
