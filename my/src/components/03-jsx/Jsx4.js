const Jsx4 = ()=>{

    const age = 18;

    return(
        <>
            {age>=18 && <h1>Ehliyet alabilir</h1>}
            {age>=18 || <h1>Ehliyet alamaz</h1>}
        </>
    )
}

export default Jsx4;