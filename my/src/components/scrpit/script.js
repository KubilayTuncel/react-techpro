
const Script = () => {

    let stadt = "";
    let plz = "";
    let stadt_und_plz = "22113 Hamburg";

    var regex = /^[a-zA-Z]+/;

    for (var i = 0; i < stadt_und_plz.length; i++) {
        if (regex.test(stadt_und_plz[i])) {
            plz = stadt_und_plz.substring(0, i);
            stadt = stadt_und_plz.substring(i, stadt_und_plz.length);
            if (plz.substring(i-1,i) ===" "){
                plz = plz.trim()
            }
            break;
        }
    }

    console.log("PLZ:", plz.length);
    console.log("Stadt:", stadt.length);



    return(
       <>
       </>
    )
}

export default Script