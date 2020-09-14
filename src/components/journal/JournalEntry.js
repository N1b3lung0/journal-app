import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    sdgasgsdgf
                </p>
                <p className="journal__entry-content">
                    dhgdas gasg asfasd fFfafFD sgfd
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>
        </div>
    )
}
