import React from 'react'

const TagComponent = ({tagData}) => {
    
    //different word, different css tag
    let tagClassNameCss;
    switch(tagData){
        case 'new':
            tagClassNameCss='w-[39px] bg-[#FBEAEA] text-[#D94344]';
            break;
        case 'popular':
            tagClassNameCss='w-[63px] bg-[#FBF5E9] text-[#DB9624]';
            break;    
        default:
            break;
    }

  return (
    <div className={`h-[22px] rounded-[100px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-1 font-sans font-medium text-[10px] ${tagClassNameCss}`}>
        {/* convert to caps here */}
        {tagData.toUpperCase()}
    </div>
  )
}

export default TagComponent;
