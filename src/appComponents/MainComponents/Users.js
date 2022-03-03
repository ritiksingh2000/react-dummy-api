import React from 'react'

const Users = ({ fetchError, isLoadingData, data }) => {
    return (
        <div className="row g-0">
            <div className="col-11 mx-auto shadow p-2 border rounded">
                <p className="h3 my-2">Users</p>

                {
                    fetchError &&
                    <div className="alert alert-danger fs-5 text-center" role="alert">
                        Unabe To Fetch Data. Please Relod
                    </div>
                }
                {
                    isLoadingData &&
                    <button className="btn btn-light border" type="button" disabled>
                        <span className="spinner-border mx-3 spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading Data...
                    </button>
                }
                {
                    !fetchError && !isLoadingData &&
                    data.map((user) =>
                        <div className="card my-3 shadow" key={user.id}>
                            <div className="card-header fs-5">
                                {user.name}
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Email : {user.email}</li>
                                    <li className="list-group-item"><b>Phone No. : </b>{user.phone}</li>
                                    <li className="list-group-item"><b>Address : </b>{JSON.stringify(user.address)}</li>
                                </ul> 
                            </div>
                        </div>
                    )

                }



            </div>
        </div>
    )
}

export default Users
