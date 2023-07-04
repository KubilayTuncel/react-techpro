import {Component} from "react";

export default class  ClassComp extends Component{
    constructor(props) { //props lari burada karsiliyoruz.

        //props lar extend edilen class in cont. ina gönderilmelidir.
        super(props);

        this.state = {
            message: "Emotionally damaged!",
            hour : 15,
            minute : 35
        }
    }

    componentDidMount() {
        console.log("Ilk giriste calisir Render modu")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("re-render durumunda calisir.")
        if(prevState.hour !== this.state.hour){
            console.log("hour was changed")
        }

        if(prevState.minute !== this.state.minute){
            console.log("Minute was changed")
        }
        /*burada yukardaki if statementlerde bir degere göre degisimi izliyoruz. Bu upmounting ikinci versiyonu*/
    }

    render() {
        return <div>
            <h1>{this.state.message}</h1>
            <h2>{this.state.hour} : {this.state.minute}</h2>
            <button onClick={()=> this.setState({hour: 19})}>Set Hour</button>
            <button onClick={()=> this.setState({minute: 19})}>Set Minute</button>
        </div>
    }
}