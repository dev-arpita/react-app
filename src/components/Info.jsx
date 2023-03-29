import React from "react"

export default function Info() {
    return(
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1573496773322-2567977fde08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="profile__img" />
            </div>
            <h1 className="title">Arpita Roy</h1>
            <p className="subtitle">Frontend Developer</p>
            <p className="website">arpitaroy.work</p>
            <div className="btn-container">
               <button>
                <span className="fa-solid fa-envelope"></span>
               Email</button>
               <button className="btn-dark">
               <span className="fa-brands fa-linkedin"></span>
               Linkedin</button>
            </div>
        </div>
    )
}
