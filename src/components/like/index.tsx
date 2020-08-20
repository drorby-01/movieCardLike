import React ,{useState} from "react"
import Button from 'react-bootstrap/Button'


//  class Like extends React.Component{
//     public state ={likes:0} 
//     constructor(arg:any){
//          super(arg)
//      }

//      addLike(){
//         this.setState({
//             likes:this.state.likes +1
//         })        
//     }

//     removeLike(){
        
//         this.setState({
//             likes:this.state.likes - 1
//         })
//     }

//     render()
//     {
//         return <React.Fragment>
//             <Button variant="danger" className ="m-1" onClick={()=>this.removeLike()}>Unlike</Button>
//             <span>{this.state.likes}</span>
//             <Button variant="success" className ="m-1" onClick={()=>this.addLike()}>Like</Button>
//            </React.Fragment>    
//     }
    
// }

function Like (){
    const likesObject = {laikim:0,dislaikim:0}
    let [likes,setLikes] = useState(likesObject)

    function disLike(){
        setLikes({laikim:likes.laikim,dislaikim:++likes.dislaikim})
    }

    function addLike(){
        setLikes({laikim:++likes.laikim,dislaikim:likes.dislaikim})
    }

    return <React.Fragment>
             <img src="https://i.pinimg.com/originals/37/9f/00/379f00ceb97d6a0b0672933022755b3a.png" height="36px" width="36px" style={{marginRight:"10px"}} onClick={addLike} />
             <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS03w4Ec-g8IWyMvCmEgYm9KfU6bEG91JV2Q&usqp=CAU" height="36px" width="36px" onClick={disLike}/>

             <p>Likes: {likes.laikim}</p>
             <p>disLikes: {likes.dislaikim}</p>
             <p>total: {likes.laikim +likes.dislaikim}</p>
            </React.Fragment>  
}

export default Like;