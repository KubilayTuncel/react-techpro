import HelloReact from "../02-hello-react/hello-react";
import Jsx1 from "../03-jsx/Jsx1";
import Jsx2 from "../03-jsx/Jsx2";
import Jsx3 from "../03-jsx/Jsx3";
import Jsx4 from "../03-jsx/Jsx4";
import Jsx5 from "../03-jsx/Jsx5";
import Jsx6 from "../03-jsx/Jsx6";
import Style1 from "../04-styles/Style1";
import Style2 from "../04-styles/Style2";
import Style3 from "../04-styles/Style3";
import Style4 from "../04-styles/Style4";
import Clock1 from "../05-clock1/clock1";
import Greetings from "../06-props/gretings";
import ProductCard from "../07-props02/productCard";
import Products from "../07-props02/products";
import Clock2 from "../08-clock2/clock2";

const HelloWorld = ()=>{
    return(
        <div>Hello World
           {/* <HelloReact/>
            <Jsx1/>
            <Jsx2/>
            <Jsx3/>
            <Jsx4/>
            <Jsx5/>
            <Style1/>
            <Style2/>
            <Style3/>
            <Style4/>
            <Jsx6/>
            <Clock1/>
            <Greetings/>
            */}
            <Products/>
            <Clock2 textColor="red" bgColor="yellow"/>
        </div>
    )
}

export default HelloWorld;