import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AdmissionUpperLook extends Component {
  constructor(props)
  {
      super(props)
  }
    render() {
    return (
        <div className="Admission__Upper">
            <div className="container">
                    <label className="Admission__Title">
                            <h1>{this.props.UpperTitle}</h1>
                     </label>
                     <div className="Admission__news">
                     <ul>
                         <li><Link to="/admissions/Intake">Admission Intake 2019</Link></li>
                         <li><a href="https://www.juet.ac.in/TandP/Placement2019.php" target="_blank">Placements 2019</a></li>
                         <li><a href="https://www.juet.ac.in/Facilities/Hostel.php" target="_blank">Student Facilities</a></li>
                         <li><a href="https://www.juet.ac.in/StudentsActivities/StudentsActivities.php" target="_blank">Student Activities</a></li>
                     </ul>
                 </div>
            </div>
        </div>
    )
  }
}
