import React from 'react';
import './DHome.css'
import ChartB from '../Chart/ChartB';
import ChartL from '../Chart/ChartL';
import ChartP from '../Chart/ChartP';
import ChartR from '../Chart/ChartR';

const DHome = () => {
    return (
        <div className='dh'>
            <div className='lc'>
                <h3 className='dh-h3'></h3>
                <ChartL />
            </div>

            <div className='d-flex'>
                <div className='bc'>
                    <ChartB />
                </div>
                <div className='bc ms-3'>
                    <ChartP />
                </div>
                <div className='bc ms-3'>
                    <ChartR />
                </div>
            </div>
        </div>
    );
};

export default DHome;