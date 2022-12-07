import React from 'react'
import { useSelector } from 'react-redux'

const SingleFood = () => {

    const { food } = useSelector( state => state )

    const foodSelect = (ff) => {

        switch (ff) {
            case 'Alu':
                return 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTUNYRJGfr6dAmrrvtz8mF5qV0ojVV9cuEFzswwOcfqxd4EDeDD05eO-KSs2uLidN92YVgeCdcpdthCF4E'
            case 'Potol':
                return 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQK7zG3xCBuoFPkvh9bxRKNmxjUwsBOheIHd2s_sucKdcYE656FBlkUnzmrrSf3pfBD4lyCLOdMPac3a3s'
            case 'Lau':
                return 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQle3yfKo9TiLNIfsVhhf0_Ka0kcDJgdXD8vBwijtD5VU9jfHZtNf8HWU7919kWs2CwcXAy0QKVQ-X9a_Y'
            
        
            default:
                return '';
        }

    }
  return (
    <div className="single-food">
        {
            food && <img style={{width:'200px'}} src={ `${foodSelect(food)}` } alt="" />
        }

    </div>
  )
}

export default SingleFood