import React from 'react';
import Select from 'react-select';
import '../styles/halls.css';

import Card from '../components/Global/Card';

function Halls() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className="rooms-topmost-container p-4 d-flex">
            <div className="col-12 col-md-3 p-2 ">
                <div className="border rounded bg-light shadow-sm p-3" style={{ position: 'sticky', top: 80 }}>
                    <div className="mb-2">
                        <label htmlFor="select-halls-category" className="m-0 small text-muted">
                            select hall category
                        </label>
                        <Select id="select-halls-category" className="" options={options} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="select-halls-type" className="m-0 small text-muted">
                            select hall type
                        </label>
                        <Select id="select-halls-type" className="" options={options} />
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <button className="btn btn-sm  btn-success">filter</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-9 p-2 ">
                <div className="border rounded bg-white ">
                    <section className="halls-breadcrum bg-white shadow-sm p-2" style={{ position: 'sticky', top: 53 }}>
                        <h6>
                            Halls <i className="fas fa-angle-right"></i> Halls category
                        </h6>
                    </section>
                    <section className="d-flex flex-wrap justify-content-center">
                        <div className="my-2">
                            <Card />
                        </div>
                        <div className="my-2">
                            <Card />
                        </div>
                        <div className="my-2">
                            <Card />
                        </div>
                        <div className="my-2">
                            <Card />
                        </div>
                        <div className="my-2">
                            <Card />
                        </div>
                        <div className="my-2">
                            <Card />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Halls;
