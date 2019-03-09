import React from 'react'

export const AdmissionNavbar = (props) => {
    return (
        <section id="AdmissionsHeader">
        <nav className="AdmissionNavbar">
            <div className="TitleHeader">
                    <a href="https://www.juet.ac.in/"><img src="/static/images/juet_trans1.jpg" alt="JUET,Guna" /></a>
                     <div className="Headerline"></div>
                     <label>Admissions 2019</label>
            </div>
            <ul>
               <li><a href="/#Engineering">B.Tech. Admission</a></li>
               <li><a href="/#Mtech">M.Tech./Ph.D. Admission</a></li>
               <li><a href="/#Sciences">B.Sc. &amp; M.Sc.</a></li>
            </ul>
        </nav>
    </section>
    )
}
