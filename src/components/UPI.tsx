import {ChangeEvent, Component} from "react";
import ConformPayment from "./ConformPayment";

type State={
    UPI_id: string,
    showSuccessPayment:boolean
}
class UPI extends Component{
   state = {
    UPI_id:'0',
    showSuccessPayment:false
   };

   setValue=(event: ChangeEvent<HTMLInputElement>)=>{
      const{name,value} = event.target;
      this.setState({
        [name]: value
      }as unknown as State)
   }
   submitHandler=(event:ChangeEvent<HTMLFormElement>)=>{
      event.preventDefault();

      this.setState({
        showSuccessPayment:true
      });
   }

   hideSuccessPayment=(event:any)=>{
    this.setState({
        showSuccessPayment:false
    });
   }

    render(){
        const {
            UPI_id,
            showSuccessPayment
          } = this.state;

        return(
            <div>
               <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="UPI_id">
                                   Enter UPI ID:
                                   (@axl,@okicici)
                                </label>
                            </td>
                            <td>
                                <input id="UPI_id"
                                name="UPI_id"
                                value={UPI_id}
                                onChange={this.setValue}
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

export default UPI;