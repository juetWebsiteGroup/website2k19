import BodyMainLandingPage from "./juet/LandingPage/bodyMain.jsx";
import About from '../src/About.jsx'
import FacultyListAll from './juet/faculty/FacultyListAll'
import FacultyDepartmentProfile from './juet/faculty/FacultyListDepartmentWise'
import AdmissionHome from './juet/Admissions/AdmissionMain'
import AdmissionProcedure from './juet/Admissions/AdmissionProcedure'
import FeeStructure from './juet/Admissions/FeeStructure'
import EducationLoan from './juet/Admissions/EducationLoan'
import AdmissionIntake from './juet/Admissions/AdmissionIntake'
import FeeInstruction from "./juet/Admissions/FeeInstruction";
import Scholarship from './juet/Admissions/Scholarship'

export const routes = [
    // {
    //     path: "/",
    //     component: BodyMainLandingPage,
    //     exact: true
    // },
    // {
    //     path: "/About",
    //     component: About,
    //     exact: true
    // },
    // {
    //     path: "/faculty",
    //     component: FacultyListAll,
    //     exact: true
    // },
    // {
    //    path:"/faculty/:dept",
    //    component:FacultyDepartmentProfile,
    //    exact:true
    // },
    {
        path:"/",
        component:AdmissionHome,
        exact:true,
    },
    {
        path:"/admissions/Procedure",
        component:AdmissionProcedure,
        exact:true,
    },
    {
        path:"/admissions/EDULoan",
        component:EducationLoan,
        exact:true,
    },
    {
        path:"/admissions/Fees",
        component:FeeStructure,
        exact:true,
    },
    {
        path:"/admissions/FeeInstruction",
        component:FeeInstruction,
        exact:true,
    },
    {
        path:"/admissions/Intake",
        component:AdmissionIntake,
        exact:true,
    },
    {
        path:"/admissions/Scholarship",
        component:Scholarship,
        exact:true,
    }

  ];
  