import React from 'react'

const Footer = () => {
    const width = {
        maxWidth:"75%",
    }
    return (
        
        <footer className='mt-4 py-3 shadow border-top'>
            <div className="row g-0">
                <div className="col-12 mx-auto py-4">
                    <h3 className="text-center">03-React-App</h3>
                    <center>
                    <hr style={width} className='my-2'/>
                    </center>
                    <p className="small text-center">
                        03-React-App | Copuright &copy; Ritik Singh
                    </p>
                </div>
            </div>
        </footer>

        )
}

export default Footer
