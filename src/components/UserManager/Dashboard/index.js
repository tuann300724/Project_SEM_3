import React from 'react';
import './Dashboard.scss';
function DashBoard(props) {
    return (
        <div className="container-xl">
            <h1 className="text-3xl font-bold mb-6">Overview</h1>
            <div className="flex-container">
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div className="flex-item bg-card  p-4 rounded-lg shadow">
                            <div className="flex items-center mb-2">
                                <i class="bi bi-people-fill mr-2"></i>
                                <span className=" font-semibold m-2">Contacts in the last 30 days</span>
                            </div>
                            <div className="text-2x1 font-bold">0 people</div>
                            <div className="text-muted-foreground text-success ">+ 0 new today</div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div className="flex-item bg-card p-4 rounded-lg shadow">
                            <div className="flex items-center mb-2">
                                <i className="bi bi-newspaper mr-2"></i>
                                <span className="m-2 font-semibold">Posts</span>
                            </div>
                            <div className="text-2xl font-bold">0 posts</div>
                            <div className="text-muted-foreground">Currently displaying</div>
                            <a href="#" className="text-destructive text-danger font-semibold hover:underline">Post &gt;</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div className="flex-item bg-card p-4 rounded-lg shadow">
                            <div className="flex items-center mb-2">
                                <i class="bi bi-currency-dollar mr-2" ></i>
                                <span className="m-2 font-semibold">Balance</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='pr-5 '>
                                    <div className="text-2xl font-bold">0 đ</div>
                                    <div className="text-muted-foreground">Main account</div>
                                </div>
                                <div className="vertical-line"></div>
                                <div className='pl-5'>
                                    <div className="text-2xl font-bold">0 đ</div>
                                    <div className="text-muted-foreground">Promotional account</div>
                                </div>
                            </div>
                            <a href="#" className="text-destructive text-danger font-semibold hover:underline">Top up &gt;</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default DashBoard;