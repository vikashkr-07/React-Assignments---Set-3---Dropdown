
import React from 'react'
import Options from './Options';
import City from './City'

const States=({states})=>{

    // console.log(states);
    let [stateValue,setStateValue]=React.useState(0)

    let onChangeHandle = (e)=>{
         setStateValue(e.target.value);
    }

   return(
        <div>
            <div id="state-name" className="selection-box">
                <div>
                    <label htmlFor="state">{"States : "}</label>
                    <select name="state" id="state" onChange={(e)=>onChangeHandle(e)}>
                       {
                           states.map((ele,index)=>{
                            //    console.log(ele.name)
                               return <Options key={ele.name} item={ele} index={index} />;
                           })
                       }
                    </select>
                </div>

                <div className="desc-box">
                     {console.log(states[stateValue].name)}
                     <div id="state-title">{states[stateValue].name}</div>
                     <div id="state-description">{states[stateValue].description}</div>
                </div>
            </div>
              <City city={states[stateValue].city}/>
        </div>
   )
}
export default States;