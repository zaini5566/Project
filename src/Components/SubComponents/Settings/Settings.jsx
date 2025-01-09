// Settings.js
import React, { useState } from 'react';
import Treatments from './Subsetting/Treatments';
import TreatmentSelector from './Subsetting/Subtreatments/Subtreatment';
const Settings = () => {
    const [active, setactive] = useState(false)
    const [showTreatment, setShowTreatment] = useState(false);
    const [showSkinImprovement, setShowSkinImprovement] = useState(false);

   
    return (
        <div className='flex w-[206px] ml-[32px]'>
            <div className='flex flex-col'>
                <h1 className='mt-[22px]  text-[30px] font-bold'>Settings</h1>
                <div className=' mt-[10px] inline-block'>
                    <ul className='bg-gray-200 inline-block rounded-2xl py-1 px-1'>
                        <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3 cursor-pointer' > General</li>
                        <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3 cursor-pointer'>Password</li>
                        <li className='h-[48px] w-[252px] font-medium text-[14px] text-text-color pt-3 pl-3 cursor-pointer'>Price</li>
                        <li className='h-[48px] w-[252px] font-medium text-[14px] text-blue-600 bg-white rounded-2xl pt-3 pl-3 cursor-pointer'
                            onClick={() => {
                              console.log('Treatment Clicked');
                              setShowTreatment(!showTreatment);
                            }}>
                          Treatments
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold"></h2>
                {showTreatment && <Treatments onSkinImprovementClick={() => {
                  console.log('Skin Improvement Function Called');
                  setShowSkinImprovement(true);
                }} />}
            </div>
            <div className="flex flex-col">
                {showSkinImprovement && <TreatmentSelector />}
            </div>
        </div>
    );
};

export default Settings;
