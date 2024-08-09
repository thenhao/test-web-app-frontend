import React from 'react'

const FilterTagComponent = ({tagData}) => {
    
    //different word, different css tag
    let tagClassNameCss;
    let iconToDisplay;
    const maleIcon =<svg xmlns="http://www.w3.org/2000/svg" fill="#2F9D77" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
    const femaleIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#2F9D77" width="24" height="24" viewBox="0 0 24 24"><path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/></svg>
    switch(tagData){
        case 'All packages':
            tagClassNameCss='w-[139px]';
            break;
        case 'Male':
            tagClassNameCss='w-[78px]';
            iconToDisplay='Male'
            break;
        case 'Female':
            tagClassNameCss='w-[94px]';
            iconToDisplay='Female'
            break;
        default:
            break;
    }

  return (
    <button className={`flex h-[32px] rounded-[24px] p-3 gap-1 border border-[#2F9D77] text-[#2F9D77] text-center items-center justify-center font-sans font-semibold text-[14px] ${tagClassNameCss}`}>
     {iconToDisplay === 'Male'? maleIcon : iconToDisplay === 'Female' ? femaleIcon : <></>}{tagData}
    </button>
  )
}

export default FilterTagComponent;
