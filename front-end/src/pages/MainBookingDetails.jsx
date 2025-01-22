import axios from "axios";
import { useEffect, useState } from "react";

const MainBookingDetails = () => {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);

    // env url
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // get preBookdata details
    const fetchRoom = () => {
        setLoading(true);
        axios
            .get(`${BASE_URL}/booking-data`)
            .then((response) => {
                setBooking(response.data.data[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    // Fetch room fetch
    useEffect(() => {
        fetchRoom();
    }, []);

    console.log(booking);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    {/* Add Category Form */}
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Main Booking Details</h5>
                                <h1>{booking.length}</h1>
                            </div>

                            <div className="card-body">
                                <div className="col-12">
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <div className="table-responsive text-nowrap">
                                            {
                                                booking?.length == 0 ? <div className="alert alert-warning" role="alert">
                                                    No Data Found
                                                </div> : <table className="table order-4 border">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Phone</th>
                                                            <th>Address</th>
                                                            <th>Check In</th>
                                                            <th>Check Out</th>
                                                            <th>Room Number</th>
                                                            <th>Payment Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="table-border-bottom-0">
                                                        {booking.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.name} </td>
                                                                <td>{item.phone} </td>
                                                                <td>{item.address} </td>
                                                                <td>{item.checking_date_time} </td>
                                                                <td>{item.checkout_date_time} </td>
                                                                <td>{item.room_number} </td>
                                                                <td>{item.payment_status} </td>
                                                                <td>
                                                                   <button className="btn btn-primary">Invoice</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            }

                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="content-backdrop fade"></div>
        </div>
    );
};

export default MainBookingDetails;