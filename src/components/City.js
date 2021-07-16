import React from 'react'
import Options from './Options'
import Town from './Town'
const City = ({city}) =>{

    let[cityValue,setCityValue]=React.useState(0)

    const onChangeHandle =(e) =>{
        setCityValue(e.target.value)
    }
    return(
        <div>
             <div id="city-name" className="selection-box">

                 <div>
                     <label htmlFor="city">{"Cities : "}</label>
                     <select id="city" name="city" onChange={onChangeHandle}>
                      {
                          city.map((ele,index)=>{
                              return <Options key={ele.name} item={ele} index={index} />
                          })
                      }
                     </select>
                 </div>

                 <div className="desc-box">
                      <div id="city-title">{city[cityValue].name}</div>
                      <div id="city-description">{city[cityValue].description}</div>
                 </div>
             </div>
             <Town town={city[cityValue].landmarks}/>
        </div>
    )
}

export default City;