import React from 'react';
import Headers from './Header';
import Footer from './Footer';

function DefaultLayout({children}) {
    return (
        <div>
            <Headers />
            <div className='container-fluid'>
                <div className='content'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;