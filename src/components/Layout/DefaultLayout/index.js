import React from 'react';
import Headers from './Header';

function DefaultLayout({children}) {
    return (
        <div>
            <Headers />
            <div className='w-full'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;