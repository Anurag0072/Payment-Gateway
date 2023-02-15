import {ChangeEvent, Component, FormEvent} from "react";
import { generateSerialNumbers } from "../utils/array";
import ConformPayment from "./ConformPayment";
//import SuccessPayment from "./SuccessPayment";


type State = {
   ccNumber: string,
   name: string,
   month: number,
   year: number,
   cvv: number,
   showSuccessPayment: boolean;
}


class CreditDebitCard extends Component{
    state = {
        ccNumber: '0',
        name: '',
        month: 0,
        year: 0,
        cvv: 0,
        showSuccessPayment:false
    };
    
//define event handelers with arrow function syntax (this is set up to the class object instead of undefined )
    setValue = ( event: ChangeEvent<HTMLInputElement> )=>{
       const { name,value } = event.target;
       this.setState({
        [name]: value
       } as unknown as State)
    }

    setIntValue = ( event: ChangeEvent<HTMLSelectElement | HTMLInputElement> )=>{
        const { name,value } = event.target;
        this.setState({
         [name]: parseInt(value)
        } as unknown as State)
     }

     submitHandler =(event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        this.setState({
            showSuccessPayment: true
        });

     }

     hideSuccessPayment = (event:any) => {
        this.setState({
            showSuccessPayment: false
        });
     }

    render(){

        const {
            ccNumber,
            name,
            month,
            year,
            cvv,
            showSuccessPayment
        } = this.state;

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="ccNumber">
                                        Credit Card Number:
                                        (12 Digit number)
                                    </label>
                                </td>
                                <td>
                                    <input id="ccNumber"
                                    min="100000000000"
                                    max ="999999999999"
                                    name="ccNumber"
                                    value={ccNumber}
                                    onChange={this.setValue}
                                    ></input>
                                </td>
                            </tr>
                       {/* 2nd row */}
                            <tr>
                                <td>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                </td>
                                <td>
                                    <input id="name"
                                    name="name"
                                    value={name}
                                    onChange={this.setValue}
                                    ></input>
                                </td>
                            </tr>
                        {/*3rd row  */}
                            <tr>
                                <td>
                                    <label>
                                        Expiry date
                                    </label>
                                </td>
                                <td>
                                    <select id="month"
                                    name="month"
                                    value={month}
                                    onChange={this.setIntValue}
                                    >
                                        {
                                            generateSerialNumbers(1,12).map(
                                                x => (
                                                    <option value={x} key={x}>
                                                        {(''+x).padStart( 2,'0' )}
                                                        </option>
                                                )
                                            )
                                        }
                                    </select>
                                    <select id="year"
                                    name="year"
                                    value={year}
                                    onChange={this.setIntValue}
                                    >
                                        {
                                            generateSerialNumbers(2023,2033).map(
                                                x => (
                                                    <option value={x} key={x}>
                                                        {x}
                                                        </option>
                                                )
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                             {/* 4th row */}
                             <tr>
                                <td>
                                    <label htmlFor="cvv">
                                        CVV
                                    </label>
                                </td>
                                <td>
                                    <input id="cvv"
                                    name="cvv"
                                    value={cvv}
                                    onChange={this.setIntValue}
                                    ></input>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                   showSuccessPayment === true && <ConformPayment onNo={this.hideSuccessPayment}/>
                }
            </div>
        );
    }
}

export default CreditDebitCard;