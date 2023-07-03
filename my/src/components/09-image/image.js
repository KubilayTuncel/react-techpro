
import kubilay from "../../assets/img/KubilayTuncel.png"
const Image = ()=>{
    return(
        <>
            {/* Statik yöntemde görüntüler public klasörü icinde aranir*/}
            <img src="assets/img/KubilayTuncel.png" width="300"/>

            {/*import ve require yönteminde dosyalar src icinde olmalidir.*/}
            <img src={kubilay} width="300"/>
            <img src={require("../../assets/img/KubilayTuncel.png")} width="300"/>
        </>

    )
}

export default Image;