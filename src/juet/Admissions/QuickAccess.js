import React from 'react'
import {Link} from 'react-router-dom'
export default class QuickAccess extends React.Component
{
    render()
    {
        return (
            <div className="Admission__QuickAccess">
            <ul>
                <li><h2>Quick Access</h2></li>
                <li><Link to="/">Admission Home</Link></li>
                {/* <li><Link to="/admissions">Home</Link></li>  */}
				{/*<li><Link to="/admissions/Procedure">Admission Procedure</Link></li>*/}
                <li><Link to="/admissions/Intake">Admission Intake</Link></li>
                <li><Link to="/admissions/Scholarship">Scholarships</Link></li>
                <li><Link to="/admissions/EDULoan">Education Loan</Link></li>
                <li><Link to="/admissions/Fees">Fee Structure</Link></li>
				<li><a href="/static/2019/FeeConcession.pdf">Reservation/Fee Concession for Armed Forces/PMF</a></li>
                <li><Link to="/admissions/FeeInstruction">Fee Instruction</Link></li>
            </ul>
        </div>
        )
    }
}