import React, { useEffect, useState } from 'react'
import LoadingIndicator from '../Components/LoadingIndicator';

function Profile() {
    const [load, setLoad] = useState(true);

    const [image, setImage] = useState("");
    const [name, setName] = useState("");

    const [points, setPoints] = useState(0);
    const [rank, setRank] = useState(0);
    const [level, setLevel] = useState(0);

    const [active, setActive] = useState(2);

    const [badges, setBadges] = useState([]);
    const [pointHistory, setPointHistory] = useState([]);

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
            console.error(error);
        }
    }

    const fetchLevelandPointsData = async () => {
        try {
            let res = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp`, {
                method: "GET",
                headers: {
                    apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
                    userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
                }
            })
            let data = await res.json();
            setLevel(data.tier);
            setPoints(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchRankData = async () => {
        try {
            let res = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank`, {
                method: "GET",
                headers: {
                    apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
                    userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
                }
            })
            let data = await res.json();
            setRank(data.data.position)
        } catch (error) {
            console.error(error);
        }
    }

    const fetchPointHistoryData = async () => {
        try {
            let res = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history`, {
                method: "GET",
                headers: {
                    apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
                    userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
                }
            })
            let data = await res.json();
            setPointHistory(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchBadgeData = async () => {
        try {
            let res = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges`, {
                method: "GET",
                headers: {
                    apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
                    userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
                }
            })
            let data = await res.json();
            setBadges(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchImageData();
        fetchLevelandPointsData();
        fetchRankData();
        fetchPointHistoryData();
        fetchBadgeData();
        setTimeout(() => {
            setLoad(false);
        }, 1000)
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
                <div className='userData'>
                    <div>
                        <p>{points}</p>
                        <p>Points</p>
                    </div>
                    <div>
                        <p>#{rank}</p>
                        <p>Rank</p>
                    </div>
                    <div>
                        <p>{level}</p>
                        <p>Level</p>
                    </div>
                </div>
                <div>
                    <div className='subMenu'>
                        <div style={{ borderBottom: active == 1 && "2px solid #7052FF" }}>
                            <p style={{ color: active == 1 && "#7052FF" }}
                            >Membership</p>
                        </div>
                        <div style={{ borderBottom: active == 2 && "2px solid #7052FF" }}>
                            <p style={{ color: active == 2 && "#7052FF" }} onClick={() => { setActive(2) }}>Badges</p>
                        </div>
                        <div style={{ borderBottom: active == 3 && "2px solid #7052FF" }}>
                            <p style={{ color: active == 3 && "#7052FF" }} onClick={() => { setActive(3) }}>Point History</p>
                        </div>
                    </div>
                </div>
                {active == 2 && <div className='badgeWrapper'>
                    {badges.length > 0 && badges.map((el) => {
                        return <img src={el.imageUrl} alt="" key={el._id} />
                    })}
                </div>}
                {active == 3 && <div className='pointWrapper'>
                    {pointHistory.length > 0 && pointHistory.map((el) => {
                        return <div className='pointsRow' key={el._id}>
                            <p>{el.title}</p>
                            <p>{el.xp}</p>
                        </div>
                    })}
                </div>}
            </div>
        </div>
    )
}
export default Profile