import React from 'react'
import './styles/Admission.css'
import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';
import {LoadingView} from '../LoadingView/Loading'

import fetch from 'isomorphic-fetch'


const GetIntakeTable = ({data,YesJEE,YesBoard}) => {
     let TotalValue = 0;
    return (
    <div className="Intake">
    <div className="container">
       <h2>{data.Title}</h2>
        <table className="IntakeTable">
            <thead>
                <th>S.No</th>
                <th colSpan={2}>Programme</th>
                <th>Total</th>
                {YesJEE && <th>Through JEE</th>}
                {YesBoard && <th>Through 10+2</th>}
            </thead>
            <tbody>
            {data.IntakeProgramme.map((dataObj,i)=>{
                TotalValue += dataObj.Total;
             return (<tr key={i}>
                    <td>{i+1}.</td>
                    <td colSpan={2}>{dataObj.branch} ({dataObj.id})</td>
                    <td>{dataObj.Total}</td>
                    {dataObj.JEE!=null   && <td>{dataObj.JEE}</td>}
                    {dataObj.Board!=null && <td>{dataObj.Board}</td>}
                    </tr> )
            })}
            <tr><td></td><td colSpan={2}><b>Total :</b></td><td>{TotalValue}</td></tr>
            </tbody>
        </table>

    </div>
    </div>
      )
}

export default class AdmissionIntake extends React.Component
{
    static fetchData()
    {
       
    }
    constructor(props)
    {
        super(props)
        this.state = {
            IntakeData:undefined
        }
    }
    componentDidMount()
    {
        document.title="Admission Intake - Jaypee University of Engineering and Technology, Guna"
        fetch(`${process.env.FETCH_URL}/api/admission/Intake`)
        .then(res => res.json())
        .then(data => this.setState({IntakeData:data}))
    }
       render()
       {
        return (
            <>
             <AdmissionUpperLook UpperTitle={`"Bringing Together Talented and Innovative Minds".`} />
                <div className="Admission__MainWindow">
                <AdmissionInfoLook MainTitle={`Admission Intake - ${new Date().getFullYear()}`}>
                 
                 {this.state.IntakeData ?
                     <div>
                           <GetIntakeTable data={this.state.IntakeData.BTech} YesBoard={true} YesJEE={true} />
                           <GetIntakeTable data={this.state.IntakeData.MTech} YesBoard={false} YesJEE={false} />

                           <div className="Intake">
                             <div className="container">
                                <h2>{this.state.IntakeData.PhD.Title}</h2>
                                 <span className="OtherIntakeValue">{this.state.IntakeData.PhD.Intake}</span>
                             </div>
                           </div>
                           <div className="Intake">
                             <div className="container">
                                <h2>{this.state.IntakeData.Bsc.Title}</h2>
                                 <span className="OtherIntakeValue">{this.state.IntakeData.Bsc.Intake}</span>
                             </div>
                           </div>
                           <div className="Intake">
                             <div className="container">
                                <h2>{this.state.IntakeData.Msc.Title}</h2>
                                 <span className="OtherIntakeValue">{this.state.IntakeData.Msc.Intake}</span>
                             </div>
                           </div>
                     </div>
                    : <LoadingView />}
                </AdmissionInfoLook>
                <QuickAccess/>
                </div>
            </>
        )
       }    
}

