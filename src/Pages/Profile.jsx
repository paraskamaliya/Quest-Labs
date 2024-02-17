import React, { useEffect, useState } from 'react'
import LoadingIndicator from '../Components/LoadingIndicator';

function Profile() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [load, setLoad] = useState(false);

    const fetchImageData = async () => {
        try {
            let res = await fetch(`https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08`, {
                method: "GET",
                headers: {
                    apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
                    userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
                }
            })
            let data = await res.json();
            setImage(data.data.imageUrl)
            setName(data.data.name)
        } catch (error) {

        }
    }


    useEffect(() => {
        fetchImageData();
    }, [])


    if (load) {
        return <LoadingIndicator />
    }
    return (
        <div className="profile">
            <h2>Profile</h2>
            <img src={image} alt="" id='profileImg' />
            <div className='card'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
export default Profile