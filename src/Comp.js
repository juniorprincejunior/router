
import { useState} from 'react';
import React from 'react';




export const Comp = () => {
    





    const [movie, setMovie] = useState([
        {
            title:'Charmed',
            description:'trop cool',
            commentaire : 'cool',
            posteURL: "https://flxt.tmsimg.com/assets/p15533415_b_v13_aj.jpg"
        },

        {
            title:'Flash',
            description:'trop cool',
            commentaire : 'cool',
            posteURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuOcdPJ7-wIXV9M8exVo2yZd2lxmCK3NtVQ&usqp=CAU"
        },


        {
            title:'Casa De Papel',
            description:'trop cool',
            commentaire : 'cool',
            posteURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJhePtXUwt5T7xn_lzPD_ZV9z_JKGOIdNXQ&usqp=CAU"
        }
        
    ],)

    const addTitle = (title,posteURL,description, commentaire) => {
        const newtitle = [...movie,{title,posteURL,description, commentaire}];
        setMovie(newtitle)
    }

    function Form(){

        const [value, setValue] = useState('')
        const [photo, setPhoto] = useState('')
        const [description, setDescription] = useState('')
        const [commentaire, setCommentaire] = useState('')
        const add= e => {
            e.preventDefault()
            if(!value || !photo || !description || !commentaire) return;
                addTitle(value, photo, description, commentaire);
                setPhoto('')
                setValue('')
                setDescription('')
                setCommentaire('')
        }
    

        return (
            <form style={{width : '100%'}} className = 'd-flex justify-content-center align-items-center container '>
                <input style={{width:'50%', textAlign:'center'}} className='form-control' type="text" placeholder="Titre" value={value} onChange={e => setValue(e.target.value)}/>
                <input style={{width:'50%', textAlign:'center'}} className='form-control' type="text" placeholder="Photo" value={photo} onChange={e => setPhoto(e.target.value)}/>
                <input style={{width:'50%', textAlign:'center'}} className='form-control' type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
                <input style={{width:'50%', textAlign:'center'}} className='form-control' type="text" placeholder="Commentaire" value={commentaire} onChange={e => setCommentaire(e.target.value)}/>
                <button style={{width:'50%', textAlign:'center'}}  className="btn btn-primary" onClick={add}>ajouter</button>
    
            </form>
        )
    }
    





    function Search(){


        const [searchTerm, setSearchTerm] = React.useState("");
    
        const handleChange = event => {
        setSearchTerm(event.target.value);
        };
    
        const results = !searchTerm
        ? movie : movie.filter(person => person.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    
        function Title({mov, index}){
            return(<h5 style={{textAlign: 'center', marginTop: '5px'}} >Titre : {mov.title}</h5>)
        }
        
        return(
            <div>
                <input className='form-control container' type="text" placeholder="Search by title" value={searchTerm} onChange={handleChange}/>
                <div  style={{display:'flex', justifyContent:'center', flexDirection: 'row', textAlign:'center', flexWrap:'wrap'}} >
                {results.map((mov,index) => (
                    <div >
                    
                        <img style={{margin:'10px', width:'300px', height:'300px'}} alt='ok'   src={mov.posteURL}/>
                        <Title key={index} index={index} mov={mov}/>
                        
                        <h5 style={{textAlign:'center', marginTop: '5px'}} >Description : {mov.description}</h5>
                        <h5 style={{textAlign: 'center'}}  > commentaire : {mov.commentaire}</h5>
                    </div>
                    ))}
                </div>
                    
                </div>
            )
        
    }
    
    return (
        <div >
            <Search />
            <Form/>
        </div>
    )
}


export default Comp
