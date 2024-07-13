
import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import '../Styles/Header.css'
export const Footer =() =>  {
  return (
    <div class='footer'>
        <MDBFooter className='text-center text-white' >
        <div class = 'diagonal-gradient'>
        <MDBContainer className='p-4'></MDBContainer>
            <div className='text-center p-3' >
                © 2024 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                Actividad_1_Inventario.com
                </a>
            </div>
        </div>
        </MDBFooter>
        
    </div>
    
  );
}