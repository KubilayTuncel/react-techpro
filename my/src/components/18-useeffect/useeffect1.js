import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const Useeffect1 = () => {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    useEffect(()=>{
        console.log(`
        Mounting : Bu satir sadece render durumda calisir. ancak re-render larda calismaz.
        Amac Api ile backend den devamli data cekme islemiyapmayi engelliyoruz.
        `)
    },[])

    useEffect(()=>{
        console.log(`
       Updating: eger dependies eklemezsek her re render da useeffect de calisir.
       Tüm useEffectlerin hepsi asagidaki returnden sonra re render edilir.
       Bu useEffect özellikle alttaki elementlere useRef ile erismek icin kullanilir
        `)
    })

    useEffect(()=>{
        console.log(`
        Updating : Bu bölümdeki kodlar alt taraftaki yazilan dependency lerin (message) degismesi durumunda calisir.
        `)
    },[message])

    useEffect(()=>{
        console.log(`
        Mounting : Bu satir sadece render durumda calisir. ancak re-render larda calismaz.
        Amac Api ile backend den devamli data cekme islemiyapmayi engelliyoruz.
        `)
        return ()=>{
            console.log(`
            Unmounting : Bu bölüm component hafizadan atilmadan hemen önce calistirilir.
            genelde temizlik icin kullanilir.
            `)
        }
    },[])

    return(
        <div>
            <div>{message} - {error}</div>
            <Button variant="info" onClick={()=>setMessage("Hello")}>Set Message</Button>
            <Button variant="info" onClick={()=>setError("Some errors")}>Throw Error</Button>
        </div>
    )
}

export default Useeffect1