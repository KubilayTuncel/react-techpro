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
import Image from "../09-image/image";
import Gallery from "../09-image/gallery";
import ProfileCard from "../10-profile-card/profile-card";
import BootstrapDynamic from "../11-bootstrap/bootstrap-dynamic";
import Icon from "../12-icons/icon";
import Events from "../13-events/events";
import Shop from "../14-products/Shop";
import State from "../15-usestate/useState";
import Counter from "../16-counter/counter";
import Birthday from "../17-birthday/birthday";
import Clock3 from "../19-clock3/clock3";
import Useeffect2 from "../18-useeffect/useeffect2";
import CountryFilter from "../20-country-filter/country-filter";

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
            <Products/>
            <Clock3 textColor="red" bgColor="yellow"/>
            <Image/>
            <Gallery/>
             <ProfileCard avatar="KubilayTuncel.png" name="Kubilay Tuncel" location="Germany, Leipzig" shot="3" followers="1000" following="1"/>
            <BootstrapDynamic/>
            <Icon/>
            <Events/>
            <Shop/>
            <State/>
            <Counter/>
            <Birthday/>
            <Clock3/>
            <Useeffect2/>
            */}
           <CountryFilter/>
        </div>
    )
}

export default HelloWorld;