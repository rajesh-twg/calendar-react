import React, { useState } from 'react'

function Main() {
    const [events, setEvents] = useState(null);

    const ListEvents = () => {
        return (
            <ul>
                {
                    events.map((item, index) => {
                        return <li key={index}>
                            {item.data}
                        </li>
                    })
                }
            </ul>
        );
    }

    const getEvents = async () => {
        await fetch('http://localhost:3000/calander')
            .then(res => res.json())
            .then(res => {
                setEvents(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            {!events ?
                <>
                    <button onClick={getEvents}>Get Events</button>
                </>
                :
                <>
                    <ListEvents />
                    <button onClick={() => setEvents(null)}>Clear Events</button>
                </>

            }
        </div >
    )
}

export default Main