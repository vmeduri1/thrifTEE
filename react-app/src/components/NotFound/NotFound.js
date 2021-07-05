import React from 'react'
import './notfound.css'
import {Button} from "@chakra-ui/react"
import {useHistory} from 'react-router-dom'

export default function NotFound() {

    const history = useHistory()

    const handleNotFound= () => {
        history.push('/')
    }
    return (


        <div className="notFound-container">
            <h1 className="notFound-headline">Sorry! The page you're looking for cannot be found.</h1>
            <div className ="notFound-img"><img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1625359990/404_bim36x.png" role="presentation" alt="not found" className="404-image"/></div>

            <p className="notFound-text">Try searching or go to our home page to continue shopping.</p>
            <div className="btn-notFound"> <Button onClick={handleNotFound} variant="outline" cursor="pointer">Go to thrifTEE Home Page</Button></div>


        </div>



    )
}
