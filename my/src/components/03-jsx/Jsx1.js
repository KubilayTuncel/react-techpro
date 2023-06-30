const Jsx1 = ()=>{
    return(
        <>
            <div>Tüm elementler tek bir root icerisinde olmalidir</div>
            <div className="msg">Class isimleri className icinde verilir ve attribute lar camelCase olarak yazilir.</div>
            <div>Parent atarken bos tag yazarak da atayabiliriz ya da React.Fragment yazmamizda ayni sekilde ise yariyor.</div>
        </>

    )
}

export default Jsx1;