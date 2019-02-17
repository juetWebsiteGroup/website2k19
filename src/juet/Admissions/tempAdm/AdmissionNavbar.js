import React from 'react'

export const AdmissionNavbar = (props) => {
    return (
        <header id="AdmissionsHeader">
        <nav className="AdmissionNavbar">
            <div className="TitleHeader">
                    <img src="/static/images/juet_trans1.jpg" alt="JUET,Guna" />
                     <div className="Headerline"></div>
                     <label>Admissions 2019</label>
            </div>
            <ul>
               <li><a href="/#Engineering">B.Tech. Admission</a></li>
               <li><a href="/#Mtech">M.Tech. Admission</a></li>
               <li><a href="/#Sciences">B.Sc. &amp; M.Sc.</a></li>
               <li><a href="/#PhD">Ph.D.</a></li>
            </ul>
        </nav>
    </header>
    )
}
