import React from 'react'
import Ambulance from '../../../Assets/Ambulance.png'
import Capsule from '../../../Assets/Capsule.png'
import Doctor from '../../../Assets/Doctor.png'
import DrugStore from '../../../Assets/Drugstore.png'
import Hospital from '../../../Assets/Hospital.png'


import './SearchBox.css'
import SearchBar from '../../DynamicComponents/SearchBar/SearchBar'
function SearchBox() {
  return (
    <div className='searchBox'>
      <SearchBar/>
      <div className='middleText'>
        <p>You may be looking for</p>
      </div>
      <div className='cardBody'>
        <div className='card'>
            <div>
                <img src={Doctor} alt="" style={{width:"60px",height:"60px"}}/>
            </div>
            <p>Doctors</p>
        </div>
        <div className='card'>
            <div>
                <img src={DrugStore} alt="" style={{width:"60px",height:"60px"}}/>
            </div>
            <p>Labs</p>
        </div>
        <div className='card'>
            <div>
                <img src={Hospital} alt="" style={{width:"60px",height:"60px"}}/>
            </div>
            <p>Hospitals</p>
        </div>
        <div className='card'>
            <div>
                <img src={Capsule} alt="" style={{width:"60px",height:"60px"}}/>
            </div>
            <p>Medical Store</p>
        </div>
        <div className='card'>
            <div>
                <img src={Ambulance} alt="" style={{width:"60px",height:"60px"}}/>
            </div>
            <p>Ambulance</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
