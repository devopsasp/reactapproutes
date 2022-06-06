import { useParams } from "react-router-dom";
import Coffee from "./coffelist";
export default function ViewCoffee()
{
    const params=useParams()
    console.log(params)
    const coffeedetails=Coffee(params.id)
    return <div
    style={{backgroundColor:"blanchedalmond",fontSize:"30px"}}>
        Coffee Name :{coffeedetails.coffeename}<br/>
     Price :{coffeedetails.price}


    </div>
}