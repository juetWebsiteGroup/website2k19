import React from 'react'
import './styles/Admission.css'
import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';
import {LoadingView} from '../LoadingView/Loading'

import fetch from 'isomorphic-fetch'
export default class FeeStructure extends React.Component
{
    static fetchData()
    {
       
    }
    constructor(props)
    {
        super(props)
        this.state = {
            FeesData:undefined
        }
    }
    componentDidMount()
    {
        document.title="Fees - Jaypee University of Engineering and Technology, Guna"
        fetch(`${process.env.FETCH_URL}/api/admission/fees`)
        .then(res => res.json())
        .then(data => this.setState({FeesData:data}))
    }
       render()
       {
        return (
            <div>
             <AdmissionUpperLook UpperTitle={`"Bringing Together Talented and Innovative Minds".`} />
                <div className="Admission__MainWindow">
                <AdmissionInfoLook MainTitle={`Academic Fee Structure - ${new Date().getFullYear()}`}>
                 <div className="Fees">
                 {this.state.FeesData ?  <table className="FeeTable">
                      <thead>
                      <th scope="col" colSpan={2} >Programmes</th>
                      <th scope="col">Tuition Fee <br/><span style={{fontSize:"1vmax"}}>(Per Semester)</span></th>
                      <th scope="col">Development Fee <br/><span style={{fontSize:"1vmax"}}> (Per Semester)</span></th>
                      <th scope="col">Caution Money <br/><span style={{fontSize:"1vmax"}}>(One-Time)*</span></th>
                      </thead>
                      {this.state.FeesData.IndianStudent.Academic.map((data,i)=>{
                          return (<tr key={i}>
                          <td colSpan={2}><h3>{data.CourseName}</h3></td>
                          <td>{data.TuitionFee}</td>
                          <td>{data.DevelopmentFee}</td>
                          <td>{data.CautionMoney}</td>
                          </tr>)
                      })}
                      
                          <tr>
                              <td colSpan={5}><h4>Hostel Charges {this.state.FeesData.IndianStudent.Hostel.Fee} Per Semester {this.state.FeesData.IndianStudent.Hostel.isFood_Laundry ? "(Including Food,Laundry,etc..)" : "(Including Food etc..)"}</h4></td>
                              </tr>
                              <tr>
                              <td colSpan={5}><h4>*Refundable</h4></td>
                              </tr>
                              <tr>
                              <td colSpan={5}><h4>**Free Accommodation for Full Time Ph.D. Scholars</h4></td>
                              </tr>
                              <tr>
                                <td colSpan={5}><h4>Academic fee discount for wards of Defence / Paramilitary forces</h4>
                                    <ul>
                                        <li>30% in Tuition and Development Fee</li>
                                        <li>Additional 5% concession to wards of war widows and PWD (Persons With Disability)</li>
                                    </ul>
                                </td>
                              </tr>
                      
                  </table> : <LoadingView />}

                  {this.state.FeesData ?  <table className="FeeTable">
                      <thead>
                      <th scope="col" colSpan={2} >Programme</th>
                      <th scope="col">Tuition Fee Per Year</th>
                      <th scope="col">Development Fee - Yearly</th>
                      </thead>
                      {this.state.FeesData.NRIStudent.Academic.map((data,i)=>{
                          return (<tr key={i}>
                          <td colSpan={2}><h3>{data.CourseName}</h3></td>
                          <td>{data.TuitionFee}</td>
                          <td>{data.DevelopmentFee}</td>
                          </tr>)
                      })}
                      
                          <tr>
                              <td colSpan={4}><h4>Hostel Charges {this.state.FeesData.NRIStudent.Hostel.Fee} {this.state.FeesData.IndianStudent.Hostel.isFood_Laundry ? "(Including Food,Laundry,etc..)" : "(Including Food etc..)"}</h4></td>
                              </tr>
                              
                  </table> : <LoadingView />}
                  
                 </div>   
                </AdmissionInfoLook>
                <QuickAccess/>
                </div>
            </div>
        )
       }    
}

