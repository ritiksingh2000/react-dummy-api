import React from 'react'

const Comments = ({fetchError, isLoadingData, data}) => {
    return (
        <div className="row g-0">
                <div className="col-11 mx-auto shadow p-2 border rounded">
                    <p className="h3 my-2">Comments</p>

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
                        data.map((comment) =>
                            <div className="card my-3 shadow" key={comment.id}>
                                <div className="card-header fs-5">
                                    {comment.name}
                                </div>
                                <div className="card-body">
                                    <blockquote className="mb-0">
                                        <p className='small'>{comment.body}</p>
                                        <footer className="blockquote-footer fs-6 fst-italic"><b>By </b><cite title="Source Title">{comment.email}</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        )

                    }



                </div>
            </div>
    )
}

export default Comments
