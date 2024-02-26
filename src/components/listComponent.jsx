
import './listComponent.css'
import { useEffect, useState } from 'react';

function Listcomponent() {

  const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []); 
  
  return (
<div  className='grid-Container'>
      {data && data.map(item => (
        <div key={item.id} className='listContainerCompnonet'>
          <div className='imgContainer'>
            <img className='imgList'  src={item.image} alt="" />
            <p className='imgPoistion'>popualr</p>
          </div>
          <div className="textContianer">
            <p className='nameText'>{item.name}</p>
            <p className='priceText'>{item.price}</p>
          </div>
          <div className="voting">
            <img src={item.ratingImage} alt="" />
            <p>{item.rating} <span>({item.votes} Votes)</span></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Listcomponent
