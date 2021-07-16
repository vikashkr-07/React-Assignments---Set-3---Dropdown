import React from 'react';
import Options from './Options';

const Town = ({town}) =>{

    console.log(town)
  
    let [townValue,setTownValue]=React.useState(0);
     
    let onChangeHandle = (e) =>{
        setTownValue(e.target.value);
    }
    return(
         <div>
             <div id="landmark-name" className="selection-box">
                
                <div>
                    <label htmlFor="town">{"Towns : "}</label>
                    <select name="landmark" id="landmark" onChange={onChangeHandle}>
                     {
                       town.map((ele,index)=>{
                           return <Options key={ele.name} item={ele} index={index}/>;
                       }) 
                     }
                    </select>
                </div>
                <div className="desc-box">
                   <div id="landmark-title">{town[townValue].name}</div>
                   <div id="landmark-description">{town[townValue].description}</div>
                </div>
             </div>
         </div>
    )
}
export default Town;