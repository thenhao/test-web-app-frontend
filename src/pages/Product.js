import React, { useEffect, useState } from 'react'
import axios from 'axios';

import ProductComponent from '../components/ProductComponent';
import ModalComponent from '../components/ModalComponent';

const axiosInstance = axios.create({
    // baseURL: "http://localhost:7777/",
    baseURL: "",
    // timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

const Product = () => {
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

  return (
    <div>
        <div id="productListTitle" className='text-xl text-start p-4'>
            Product List
        </div>
        
        <div id="productDisplaySection" className='flex flex-col gap-2'>
            {retrievedProductData ? retrievedProductData.map(function(data, index) {
                return (
                    <div>
                        {/* clinic name:  {data.clinicName} */}
                        <ProductComponent data={data} index={index} setIsOpen={setIsOpen} setSelectedData={setSelectedData}/>
                    </div>
                    )
            }): <></>
            }
        </div>
        
        {/* modal section here if modal is set to open we then set the data that is in productcomponent */}
        {isOpen ? <ModalComponent setIsOpen={setIsOpen} isOpen={isOpen} setSelectedData={setSelectedData} selectedData={selectedData}/> : <></>}
    </div>
  )
}

export default Product
