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
              <ol className="container">
                  <li>
                      <h3>POST METRIC SCHOLARSHIPS FOR SC/ST AND OBC STUDENTS OF MP</h3>
                       <p>
                       Government of Madhya Pradesh provides different types of scholarships for eligible students. Students are required to apply for scholarships through online on Govt. website thereafter submit a printout to the University Office with all supporting documents within stipulated time.
 	                   Website - <a target="_blank" href="http://scholarshipportal.mp.nic.in">http://scholarshipportal.mp.nic.in</a>
                       </p>
                       <h4>DOCUMENTS REQUIRED</h4>
                         <ul>
                             <li>Income Certificate issued by Tehsildar/SDM in original and photocopy.</li>
                             <li>Cast Certificate issued by SDM attested photocopy.</li>
                             <li>Domicile Certificate issued by Tehsildar/SDM attested photocopy.</li>
                             <li>Last two-year exam mark sheets attested copies.</li>
                             <li>Fee receipt photocopy.</li>
                             <li>Transfer Certificate for Fresh applicants.</li>
                             <li>Bank Account details.</li>
                             <li>Aadhar</li>
                             <li>Samagra ID</li>
                         </ul>
                       <p>
                       For more details, procedure, terms and conditions students may contact to Registrar Office and visit Govt. website –  <a target="_blank" href="http://scholarshipportal.mp.nic.in">http://scholarshipportal.mp.nic.in</a>
                       </p>
                    
                  </li>
                  
                  <li>
                  <h3>CHIEF MINISTER MERITORIOUS SCHOLARSHIP SCHEME FOR THE STUDENTS OF MADHYA PRADESH</h3>
                       <h4>ELIGIBILITY</h4>
                         <ul>
                             <li>Should be a domicile of Madhya Pradesh.</li>
                             <li>Securing up to 1.50 lakhs rank in all india jee mains.</li>
                             <li>Annual income of parents rs. 6 lakhs or less.</li>
                             <li>Securing minimum 70 and above % in mp board and 85 and above % in cbse board in 12 th exam.</li>
                         </ul>
                         <h4>BENEFITS</h4>
                         <ul>
                             <li>Students eligible up to 1.50 lakhs or actual fee if, the fee is less than 1.50 lakhs for admission in private engg. Universities / colleges.</li>
                         </ul>
                         <h4>CONDITIONS</h4>
                         <ul>
                             <li>Students should be clear/pass b. Tech course in four year. If, they fails to do so benefits of scheme will be discontinue.</li>
                             <li>Amount of scheme will be transferred in students account if they taking admission in private university / college.</li>
                             <li>If, the students getting benefits of other scheme from central govt. Or state govt. Agencies the amount of other schemes will de deducted from the above scheme.</li>
                             <li>All candidates who will be getting benefits are to willingly return the amount of above scheme for other students in govt. Account if they wish.</li>
                         </ul>
                         <h4>PROCEDURE FOR APPLYING</h4>
                         <ul>
                             <li>Students can apply for the above scheme through mp govt. Portal i.e. <a target="_blank" href="http://scholarshipportal.mp.nic.in">http://scholarshipportal.mp.nic.in</a> and the applications are verified by the concerned university / college.</li>
                         </ul>
                      
                  </li>


                  <li>
                      <h3>SCHOLARSHIP FOR MINORITY CATEGORY STUDENTS</h3>
                      <p>Govt. of India is providing Scholarship for Minority category students and other Govt. agencies like UGC, AICTE are also providing scholarship for students.<br/>
                      For more details, procedure, terms and conditions students may contact Registrar Office and visit Govt. website –  <a target="_blank" href="https://scholarships.gov.in">https://scholarships.gov.in</a></p>
                  </li>
                  
                  <li>
                      <h3>SCHOLARSHIP FOR OTHER STATE STUDENTS</h3>
                      <p>Other than Madhya Pradesh other states are also providing scholarship to their students who are studying in JUET, Guna. Some of the students of Jaypee University of Engineering & Technology, Guna (JUET) belonging to UP, Bihar, Jharkhand, Maharastra, Uttrakhand etc. have been getting scholarship from the parent state. Various state websites are as under : -</p>
                      <ul>
                          <li>Madhya Pradesh: <a target="_blank" href="http://scholarshipportal.mp.nic.in">http://scholarshipportal.mp.nic.in</a></li>
                          <li>Uttar Pradesh: <a target="_blank" href="http://scholarship.up.nic.in/">http://scholarship.up.nic.in/</a></li>
                          <li>Bihar: <a target="_blank" href="http://bcebcwelfare.bih.nic.in/">http://bcebcwelfare.bih.nic.in/</a></li>
                          <li>Uttrakhand: <a target="_blank" href="http://escholarship.uk.gov.in/">http://escholarship.uk.gov.in/</a></li>
                          <li>Jharkhand: <a target="_blank" href="https://ekalyan.cgg.gov.in/">https://ekalyan.cgg.gov.in/</a></li>
                          <li>Rajasthan: <a target="_blank" href="http://www.sje.rajasthan.gov.in/default.aspx">http://www.sje.rajasthan.gov.in/default.aspx</a></li>
                          <li>Chattisgarh: <a target="_blank" href="http://www.mpsc.mp.nic.in/cgpms">http://www.mpsc.mp.nic.in/cgpms</a></li>
                          <li>Minority Department: <a target="_blank" href="https://scholarships.gov.in/">https://scholarships.gov.in/</a></li>
                      </ul>
                  </li>
                  
                  <li>
                      <h3>BIHAR STUDENT CREDIT CARD SCHEME FOR THE STUDENTS OF BIHAR</h3>
                      <h4>ELIGIBILITY</h4>
                      <ul>
                          <li>Should be a domicile of bihar.</li>
                          <li>Pass 12 exams from bihar or nearby states.</li>
                          <li>Pursuing course from state or central government's authorized university / college.</li>
                          <li>Age limit of candidates for degree course not more than 25 years. For post graduate course not more than 30 years.</li>
                          <li>If the candidates quit the course during study, the scheme will be discontinue.</li>
                      </ul>
                      <h4>BENEFITS</h4>
                      <ul>
                          <li>Students will be eligible for education loan up to 4 lakhs and hostel fee if hostler for non hostler students will be eligible maintenance charges according to city.</li>
                          <li>Annual rate of interest (simple interest) for the above scheme is 4 %.</li>
                      </ul>
                      <h4>CONDITIONS</h4>
                      <p>All candidates who will be getting benefits are to refund the loan amount to govt for other students after moratorium time in 60 installment if amount up to rs. 2 lakhs and 84 installment if amount more than 2 lakhs.</p>
                      
                      <h4>PROCEDURE FOR APPLYING</h4>
                      <p>Students can apply for the above scheme through Bihar govt. Portal i.e. www.educationbihar.gov.in/studentcreditcard.aspx for detail information (eligible, application procedure, require documents etc) students can contact registrar office.</p>
                  </li>
              </ol>
            </div>
            </AdmissionInfoLook>
            <QuickAccess/>
            </div>
            </div>
        )
    }

} 