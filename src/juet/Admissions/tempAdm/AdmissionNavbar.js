import React from 'react'

export const AdmissionNavbar = (props) => {
    return (
        <section id="AdmissionsHeader">
        <nav className="AdmissionNavbar">
            <div className="TitleHeader">
                    <img src="/static/images/juet_trans1.jpg" alt="JUET,Guna" />
                     <div className="Headerline"></div>
                     <label>Admissions 2019</label>
            </div>
            <ul>
               <li><a href="#Engineering">B.Tech. Admission</a></li>
               <li>M.Tech. Admission</li>
               <li>B.Sc. &amp; M.Sc.</li>
               <li>Ph.D.</li>
            </ul>
        </nav>
    </section>
    )
}
