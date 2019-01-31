import React from 'react'
import './styles/Admission.css'

import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';

export default class Scholarship extends React.PureComponent {
  
    componentDidMount() {
        document.title="Scholarships - Jaypee University of Engineering and Technology, Guna"
    }
    render()
    {
        return (
            <div>
            <AdmissionUpperLook UpperTitle={`"Bringing Together Talented and Innovative Minds".`} />
            <div className="Admission__MainWindow">
            <AdmissionInfoLook MainTitle={`Scholarships`}>
            <div className="Scholarships">
            </div>
            </AdmissionInfoLook>
            <QuickAccess/>
            </div>
            </div>
        )
    }

} 