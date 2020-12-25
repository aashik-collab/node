import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFixedSize from '../components/Global/CardFixedSize';
import WholeScreenLoader from '../utils/WholeScreenLoader';
import { getHallsArr, setHallsArr } from '../states/hallPage';

function HallsV2() {
    const [halls, setHalls] = useState([]);

    const [wholeScreenLoader, setWholeScreenLoader] = useState(null);

    useEffect(() => {
        const hallsArr = getHallsArr();
        if (!hallsArr) {
            fetchHalls();
        }
        if (hallsArr) {
            setHalls(hallsArr);
        }

        return () => {};
    }, []);

    const fetchHalls = () => {
        setWholeScreenLoader(true);
        axios
            .get('/api/halls/fetch-all-halls')
            .then((res) => {
                // console.log(res);
                setWholeScreenLoader(null);
                if (res.data.success) {
                    setHalls(res.data.halls);
                    setHallsArr(res.data.halls);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setWholeScreenLoader(null);
            });
    };

    return (
        <>
            {!!wholeScreenLoader && <WholeScreenLoader />}
            <div className="container">
                <div className="d-flex my-3 flex-wrap justify-content-center">
                    {halls.map((hall) => {
                        return (
                            <div key={hall._id} className="m-3">
                                <CardFixedSize type={'hall'} item={hall} />
                            </div>
                        );
                    })}
                    {!halls.length && (
                        <div className="mt-5">
                            <h4 className="text-muted">No halls to show</h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HallsV2;
