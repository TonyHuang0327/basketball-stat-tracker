import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Awards(){
    const [prizes,setPrizes] = useState({});

    useEffect(()=>{
        fetch('/data/Awards.json')
        .then(response => response.json())
        .then((data) => {
            setPrizes(data.awards);
        })
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    if(!prizes){
        return <p>Loading...</p>;
    }
    return(
        <div className='Awards'>
            <h1>Season Awards</h1>
        </div>
    )
}
export default Awards ;