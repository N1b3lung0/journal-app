import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    className="notes__title-input"
                    placeholder="Some awesome title"
                    autoComplete="off"
                />

                <textarea 
                    className="notes__textarea"
                    placeholder="What happened today"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg"
                        alt=""
                    />
                </div>

            </div>

        </div>
    )
}
