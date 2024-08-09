import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ProductComponent from '../components/ProductComponent';
import ModalComponent from '../components/ModalComponent';
import FilterTagComponent from '../components/FilterTagComponent';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
console.log('current backend url is: ', BACKEND_URL);
const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {'X-Custom-Header': 'foobar'}
  });

const Product = () => {
 //useNavigate hook to go to product page with the productname
 const navigate = useNavigate();   
//useState to store the productData
const [productInfo, setProductInfo] = useState({});
//useState for modal open
const [isOpen, setIsOpen] = useState(false);
//useState for setting data that opened that modal
const [selectedData, setSelectedData] = useState({});

//call api for product data
useEffect( () => {
   const fetchProductData = async () =>{
        const productData = await axiosInstance.get('product');
        console.log('product data is: ', productData.data);
        setProductInfo(productData.data);
    }
    fetchProductData();
}, []);

//check if there is data sent back from the call and that it is not empty
//Object can be undefined when api has not been called hence ? at the object type and attribute
const retrievedProductData = (productInfo?.data?.length ?? 0) > 0 ? productInfo.data : false;
console.log('value of retrievedProductData: ', retrievedProductData);
// background: linear-gradient(134.12deg, #FEFEFB 20.97%, #EBF9F4 88.29%);
//  from-indigo-500 from-20.97% to-emerald-500 to-88.29%
//bg-gradient-[134.12deg] from-[#FEFEFB] from-20.97% to-[#EBF9F4] to-88.29%
//using plugin to write the linear gradient
//top rect 80px bottom is 970px from top
//body is 690px

//144-80-38=64px padding from the top, can put 64px for the bottom too
//padding left and right is 284px
//background: var(--SEMANTIC-Editorial-Title, #313534);

//TODO
//pagination of results, 8 results a page, on filter click change result and pages accordingly
//on click filter accordingly, go to page one of filtered results

  return (
    <div className='bg-gradient-134.12 from-[#FEFEFB] from-20.97% to-[#EBF9F4] to-88.29% w-full h-[1144px] flex flex-col'>
        {/* banner rectangle  background: var(--SEMANTIC-Static-Container, #247559);*/}
        <div className='bg-[#247559] w-full h-[80px]'></div>
        
        <div className='w-full h-[898px] px-[284px] py-[64px]'>
            <div id="productListTitle" className='w-[872px] h-[38px] flex flex-row text-xl text-start text-[#313534] font-semibold flex mb-[24px] justify-between'>
                <div id="productListTitle" className='w-[418px] h-[38px] font-sans text-[32px] text-start flex'>
                    Health Screening Packages
                </div>
                <div className='w-[327px] h-[32px] flex flex-row gap-1'>
                    <FilterTagComponent tagData={'All packages'}/>
                    <FilterTagComponent tagData={'Male'}/>
                    <FilterTagComponent tagData={'Female'}/>
                </div>
            </div>
            
            <div className='w-[871px] h-[676px] max-h-[676px] flex flex-row gap-2'>
                <div id="productDisplaySection" className='w-[871px] h-[676px] max-h-[676px] flex flex-row flex-wrap gap-6'>
                    {retrievedProductData ? retrievedProductData.map(function(data, index) {
                        return (
                            <div>
                                {/* clinic name:  {data.clinicName} */}
                                <ProductComponent data={data} index={index} setIsOpen={setIsOpen} setSelectedData={setSelectedData} navigate={navigate}/>
                            </div>
                            )
                    }): <></>
                    }
                </div>
            </div>
            
        </div>
        
        
        {/* modal section here if modal is set to open we then set the data that is in productcomponent */}
        {/* {isOpen ? <ModalComponent setIsOpen={setIsOpen} isOpen={isOpen} setSelectedData={setSelectedData} selectedData={selectedData}/> : <></>} */}
        {/* Footer rectangle */}
        <div className='top-[978px] bg-[#247559] w-full h-[166px]'></div>
    </div>
  )
}

export default Product;
