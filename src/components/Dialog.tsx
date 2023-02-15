import { ReactNode } from 'react';
import './Dialog.css';
// import { ReactNode } from 'react';

type Props ={
    show: boolean,
    children: ReactNode
}

const Dialog = ( props: Props ) => {
    return (  
        <> {props.show && (
            <div className='dialog-overlay'>
                <div className='dialog'>{props.children}</div>
            </div>
            )} </>
    );
}
 
export default Dialog;