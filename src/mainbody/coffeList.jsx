import Listcomponent from '../components/listComponent'
import './coffeList.css'
function Coffelist() {


  return (

    <>

    <div className="listContainer">
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="btnContainer">
            <button className='firstBtn'>All Products</button>
            <button className='secondBtn'>Available Now</button>
        </div>
    <div className="gridCompo">
        <Listcomponent/>
    </div>
    </div>
    </>
  )
}

export default Coffelist
