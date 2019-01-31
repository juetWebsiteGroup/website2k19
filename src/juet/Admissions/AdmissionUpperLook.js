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
                         <li>Placements 2019</li>
                         <li>Student Facilities</li>
                         <li>Student Activities</li>
                     </ul>
                 </div>
            </div>
        </div>
    )
  }
}
