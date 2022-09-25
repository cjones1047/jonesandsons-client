import {React, useEffect, useState} from 'react';

import { Spinner } from 'react-bootstrap';

import { getAllPictures } from '../api/gallery';

const Gallery = () => {

    const [allPictures, setAllPictures] = useState(null)

    useEffect(() => {
        getAllPictures()
            .then(res => setAllPictures(res.data))
            .catch(error => {
                console.log(error)
            })
    }, [])

    if(!allPictures) return (
        <Spinner/>
    )

    return(
        <div>
            {allPictures.length}
        </div>
    )
}

export default Gallery