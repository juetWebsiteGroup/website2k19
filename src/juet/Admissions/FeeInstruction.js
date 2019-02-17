import React from 'react'
import './styles/Admission.css'

import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';

export default class FeeInstruction extends React.PureComponent {
  
    componentDidMount() {
        document.title="Fee Instruction - Jaypee University of Engineering and Technology, Guna"
    }
    render()
    {
        return (
            <>
            <AdmissionUpperLook UpperTitle={`"Bringing Together Talented and Innovative Minds".`} />
            <div className="Admission__MainWindow">
            <AdmissionInfoLook MainTitle={`Fee Instruction`}>
            <div className="FeeInstruction">
              <h3 className="__Title">PROVISION REGARDING FEE TO BE CHARGED FROM THE STUDENTS</h3>
              
              <p>All the courses in the University will be run on self-finance mode. The following types of fees may be charged from the students;
        
                  <ul className="__ul1">
                      <li>(a) Caution Money - Once in the whole Study (Refundable)</li>
                      <li>(b) Prospectus/ Registration form fee - On purchase</li>
                      <li>(c) Tuition fee - Semester wise</li>
                      <li>(d) Hostel Charges - Semester wise</li>
                      <li>(e) Development Fee - Semester wise</li>
                  </ul>
        
                  The University can introduce other heads of fees from time to time.
                  <ul className="__ul2">
                      <li>In addition, charges for duplicate mark sheets, issuance of degree and such others examinations or result related fee may be charged from the students, as prescribed by the ordinance.</li>
                      <li>The components of fee may vary from course to course and shall be decided by the board of management for each course.</li>
                      <li>The fee structure of various courses and provision of exemption from tuition fee will be decided by the board of management from time to time and will be made available to the students along with the prospectus for the concerning session.</li>
                      <li>The tuition fees for the various courses will be defined in their respective ordinances.</li>
                      <li>It shall determine admission procedure and fixation of fees in accordance with the norms on the guidelines of the regulatory bodies.</li>
                  </ul>
              </p>
        
            </div>
            </AdmissionInfoLook>
            <QuickAccess/>
            </div>
            </>
        )
    }

} 