const Jsx5 = ()=>{

    const names = ["Ali", "Veli", "Ayse", "Fatma"]
    const cities = ["Istanbul","Izmir", "London", "Paris"]

    return(
        <>
        <ul>
            {names.map((name,i)=>
                <li key={i}>{name}</li>
            )}
        </ul>
            <select>
                {cities.map((city,i)=>
                <option key={i}>{city}</option>)}
            </select>
        </>
    )
}

export default Jsx5;