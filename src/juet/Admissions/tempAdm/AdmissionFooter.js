import React from 'react'
import Ionicon from 'react-ionicons';

export const AdmissionFooter = (props) => {
    return (
        <footer id="Admission__Footer">
        <div className="container">
            <div className="socialLinksFooter">
                    <span title="Facebook">
                            <Ionicon color="#ffffff" fontSize="2rem" icon="logo-facebook"></Ionicon>
                    </span>
                    <span title="YouTube">
                            <Ionicon color="#ffffff" fontSize="2rem" icon="logo-youtube"></Ionicon>
                    </span>
                    <span title="Linked-In">
                            <Ionicon color="#ffffff" fontSize="2rem" icon="logo-linkedin"></Ionicon>
                    </span>
            </div>
            <p>&copy; copyright 2019 Jaypee University of Engineering and Technology, Guna</p>
            <p>New Website 2019 update coming soon.</p>
        </div>
      </footer>
    )
}
