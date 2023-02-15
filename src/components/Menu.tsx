import './Menu.css';
import {useState} from 'react';
import PaymentOptions from '../models/PaymentOptions';
import CreditDebitCard from './CreditDebitCard';
import NETBANKING from './NetBanking';
import UPI from './UPI';

const paymentOptions = [
    PaymentOptions.CARD,
    PaymentOptions.NETBANKING,
    PaymentOptions.UPI
];


const Menu = () => {
    const [selectedOption, setSelectedOption] = useState( '' );
    return (
        <section className='menu'>
            <div className="payment-options">
                {/*
               This is an object 
                <button className='payment-option'>Credit/Debit Card</button>
                */
                }
                {
                    /*
                    [
                        <button className='payment-option'>Credit/Debit Card</button>,
                        <button className='payment-option'>Credit/Debit Card</button>,
                        <button className='payment-option'>Credit/Debit Card</button>
                    ]
                    */
                }

                {
                    //this map generate the excet ersult as above array of button objects
                    paymentOptions.map(
                         paymentOption =><
                            button className={`payment-option ${paymentOption === selectedOption ? 'payment-option-selected' : ''} `} 
                            key={paymentOption}
                            onClick ={()=>setSelectedOption( paymentOption )}
                            >
                            {paymentOption}</button>
                    )
                }
                

            </div>
            <div className="payment-details">
               {
                selectedOption === PaymentOptions.CARD && <CreditDebitCard />       
              }
               {
                selectedOption === PaymentOptions.NETBANKING && <NETBANKING />       
              }
               {
                selectedOption === PaymentOptions.UPI && <UPI />       
              }
            </div>
        </section>
    );
}

export default Menu;
