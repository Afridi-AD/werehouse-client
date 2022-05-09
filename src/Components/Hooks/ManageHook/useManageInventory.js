import { useEffect, useState } from "react"

const useMangeInventory = ()=>{
const [items, setItems] = useState([]);

useEffect(()=>{
    fetch('https://mighty-scrubland-10205.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setItems(data))
},[])


return [items, setItems];


}


export default useMangeInventory;
