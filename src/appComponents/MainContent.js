import React from 'react'
import Posts from './MainComponents/Posts'
import Users from './MainComponents/Users'
import Comments from './MainComponents/Comments'

const MainContent = ({ data, fetchError, isLoadingData, view }) => {
    console.log(view, data)
    return (
        
        <>
            {
                view === "posts" &&
                <Posts data={data} fetchError={fetchError} isLoadingData={isLoadingData} />
            }
            {
                view === "users" &&
                <Users data={data} fetchError={fetchError} isLoadingData={isLoadingData} />
            }
            {
                view === "comments" &&
                <Comments data={data} fetchError={fetchError} isLoadingData={isLoadingData} />
            }
        </>
    )
}

export default MainContent
