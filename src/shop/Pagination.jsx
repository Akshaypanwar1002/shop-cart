 


const Pagination = ({productsPerPage,totalProducts,paginate,activePage}) => {
    const pageNumbers=[];
    for(let i=1;i<= Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <ul className='default-pagination lab-ul'>

        <li>
            <a href="#" onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage-1)
                }
            }}>
                <li className="icofont-rounded-left"></li>
            </a>
        </li>


        {
            pageNumbers.map((number)=>(
                <li key={number} className={`page-item ${number===activePage ? "bg-warning" : ""}`}>
                    <button onClick={()=>paginate(number)} className="bg-transparent">{number}</button>
            
                </li>
            ))
        }

<li>
            <a href="#" onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage+1)
                }
            }}>
                <li className="icofont-rounded-right"></li>
            </a>
        </li>
    </ul>

  )
}

export default Pagination