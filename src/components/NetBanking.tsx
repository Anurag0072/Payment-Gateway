import { ChangeEvent, Component, FormEvent } from "react";
import ConformPayment from "./ConformPayment";

type State = {
    mobileNumber: number,
    name: string,
    account_no: string,
    otp: number,
    showSuccessPayment: boolean;
}
class NETBANKING extends Component {

    state = {
        mobileNumber: 0,
        name: ' ',
        account_no: ' ',
        otp: 0,
        showSuccessPayment: false
    };

    setValue = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as unknown as State)
    }
    setIntValue = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: parseInt(value)
        } as unknown as State)
    }

    submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({
            showSuccessPayment: true
        });
    }
    hideSuccessPayment = (event:any)=>{
        this.setState({
            showSuccessPayment: false
        });
    }

    
    render() {
        const {
            mobileNumber,
            name,
            account_no,
            otp,
            showSuccessPayment
        } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="mobileNumber">
                                        MobileNumber:
                                        (10 digit number)
                                    </label>
                                </td>
                                <td>
                                    <input id="mobileNumber"
                                        name="mobileNumber"
                                        value={mobileNumber}
                                        onChange={this.setIntValue}
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
                            {/* 3rd row */}
                            <tr>
                                <td>
                                    <label htmlFor="account_no">
                                        Account Number:
                                        (12 digit number)
                                    </label>
                                </td>
                                <td>
                                    <input id="account_no"
                                        min="100000000000"
                                        max="999999999999"
                                        name="account_no"
                                        value={account_no}
                                        onChange={this.setValue}
                                    ></input>
                                </td>
                            </tr>
                            {/* 4th row */}
                            <tr>
                                <td>
                                    <label htmlFor="otp">
                                        Enter Otp
                                    </label>
                                </td>
                                <td>
                                    <input id="otp"
                                        name="otp"
                                        value={otp}
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

export default NETBANKING;