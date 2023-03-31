import React,{useState} from "react";


 

function Home (){
    const [cur,change]=useState("")
    const [curr,tl] = useState(0)
    const [wr,wcunt] = useState(0)

    const cont = (e)=> {
        const x=e.target.value;
        change(x)
        tl(x.split(" ").join("").length)
        wcunt(x.trim().split(/\s+/).length)

    }
    const uppcse = () => {
        change(cur.toUpperCase())
    }
    const lowcse = () => {
        change(cur.toLowerCase())
    }
    
    return(
            <div> 
            <textarea id="textboxid" onChange={cont} className="ip" value={cur}/>
            <br></br>
            <button onClick={uppcse}>To Upper case</button>

            <button onClick={lowcse}>To Lower case</button>
            <p id="lngt"> Word Length {curr} </p>  <p id="lngt">Words {wr}</p>
            </div> 
            
    )
}

export default Home;