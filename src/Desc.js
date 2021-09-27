import { Link, useLocation} from "react-router-dom"
import {data} from "./Comp"



const Desc = () =>{
   // const {yo} = useParams(new1)
  
   const u = useLocation()
    let ca= u.pathname
    let tab = ca.split('')
    let tab2 = tab[tab.length - 1]
    let tab3 = parseInt(tab2)
    let tab4 = data[tab3]
    console.log(tab4);
    return (
        <>
        <div style={{height:'50px', color:'#fff',background:'#000'}}>
            
            <div>
            <Link style={{color:'#fff'}} to='/'>home</Link>
            </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '10px' }}><iframe style={{margin: "5 auto"}} width="560" height="315" src={tab4.anonce} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
                <p style={{ textAlign: 'center', marginTop: '10px', fontSize:'50px' }}>{tab4.title}</p>
            <div>
                
            </div>
        </>
    )
}

export default Desc


