import React, { useState } from 'react'; 
import plus from '../../../../../assets/plus.png'
import crox from '../../../../../assets/x.png'
const TreatmentSelector = () => {
    const allTreatments = [
        { id: 1, name: 'Chemical Peels' },
        { id: 2, name: 'Microdermabrasion' },
        { id: 3, name: 'Laser Treatments' },
        { id: 4, name: 'Light Therapies' }
    ];

    const [selectedTreatments, setSelectedTreatments] = useState([]);
    const [currentSelection, setCurrentSelection] = useState('');

    const addTreatment = () => {
        const treatment = allTreatments.find(t => t.id === parseInt(currentSelection));
        if (treatment && !selectedTreatments.find(t => t.id === treatment.id)) {
            setSelectedTreatments([...selectedTreatments, treatment]);
            setCurrentSelection(''); 
        }
    };

    const removeTreatment = (treatmentId) => {
        setSelectedTreatments(selectedTreatments.filter(t => t.id !== treatmentId));
    };

    const availableTreatments = allTreatments.filter(treatment => !selectedTreatments.some(st => st.id === treatment.id));

    return (
        <div className=" mt-[150px] ml-[20px] w-[500px] border-2 p-1 bg-gray-200 rounded-2xl">
             <h1 className=' ml-[28px] text-[15px] font-bold'>Skin improvments</h1>
            <div className="mb-4 text-text-color bg-white rounded-2xl text-[12px] font-medium">
                {selectedTreatments.map(treatment => (
                    <div key={treatment.id} className="flex items-center justify-between border-b p-2">
                        <span>{treatment.name}</span>
                        <button onClick={() => removeTreatment(treatment.id)} className=" text-white p-1 w-[56px] flex items-center justify-center border-l-2 "><img src={crox} alt="" /></button>
                    </div>
                ))}
            </div>
            <div className=" border-2  flex">
                <select className="border-2 border-gray-400  w-[90%]  h-[48px] p-2 px-4 text-text-color rounded-2xl" value={currentSelection} onChange={(e) => setCurrentSelection(e.target.value)}>
                    <option value="">Select Treatment...</option>
                    {availableTreatments.map(treatment => (
                        <option key={treatment.id} value={treatment.id}>{treatment.name}</option>
                    ))}
                </select>
                <button  onClick={addTreatment} className="ml-2 flex justify-center items-center text-blue-500 border-2 border-gray-400  w-[48px] h-[48px]   rounded-2xl"><img src={plus} alt=""  width={24} height={24}/></button>
            </div>
            <div className="w-[687px] px-[12px] py-[8px] flex gap-2" >
                <button className='w-[35%] h-[48px] rounded-2xl border-2 border-button-bg-color bg-white text-button-bg-color '>Cancel</button>
                <button className='w-[35%] h-[48px] bg-button-bg-color text-white rounded-2xl  '>Save</button>
                
               
            </div>
        </div>
    );
};

export default TreatmentSelector;
