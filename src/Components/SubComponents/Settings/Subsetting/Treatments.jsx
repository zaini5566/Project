// Treatments.js
import React from 'react';

const Treatments = ({ onSkinImprovementClick }) => {
  return (
    <div className='flex flex-col gap-x-2'>
      <h1 className='mt-[80px] ml-[28px] text-[20px] font-bold'>Treatment</h1>
      <div className='ml-[28px] mt-[10px] inline-block'>
        <ul className='bg-white inline-block rounded-2xl py-1 px-1'>
          <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3'>Injectables</li>
          <li className='h-[48px] w-[252px] font-medium text-[14px] text-blue-600 pt-3 pl-3 bg-gray-200 rounded-2xl cursor-pointer'
              onClick={() => {
                console.log('Skin Improvement Clicked');
                onSkinImprovementClick();
              }}>
            Skin Improvement
          </li>
          <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3'>Hair Removal</li>
          <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3'>Plastic Surgery</li>
        </ul>
      </div>
    </div>
  );
};

export default Treatments;
