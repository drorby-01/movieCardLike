import React,{useState} from "react"
import "./index.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rank from "../rank";
import Like from "../like"

export interface IMovie {
    title: string
    poster: string
    year: string,
    type: string,
    rate: number,
    id: string,
    baseAdditionalInfoUrl: string,
       
}
export default function Movie(props: IMovie) {

    const backGround ={backGroundColor:"white"}
    const [color,setColor]= useState(backGround)

    function addBackGroundColor(){
        if(color.backGroundColor === "white")
        setColor({backGroundColor:color.backGroundColor="yellow"})
        else {
            setColor({backGroundColor:color.backGroundColor="white"})
        }
    }

    function removeCard(){
        const card:HTMLElement|null = document.getElementById(props.id)
        if(card !== null) card.remove()
    }

    const showLink = isValidUrl(props.baseAdditionalInfoUrl);
    return <Card style={{ width: '18rem',backgroundColor:color.backGroundColor}} id={props.id}>
        <Card.Img variant="top" src={props.poster} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.year}
            </Card.Text>
            {showLink && <Card.Link href={`${props.baseAdditionalInfoUrl}/${props.id}`}>Go To</Card.Link>}
            <Rank stars={props.rate} />
            <Like></Like>
            <Button onClick={addBackGroundColor}>background color</Button>
            <Button onClick={removeCard} className="mt-2">remove card</Button>
        </Card.Body>
    </Card>
}

function isValidUrl(url: string): boolean {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(url)
}
