import Loadable from "react-loadable";

import BodyMainLandingPage from "./juet/LandingPage/bodyMain.jsx";
import { LoadingView } from "./juet/LoadingView/Loading";

const AdmissionHome_Async = Loadable({
  loader: () => import("./juet/Admissions/AdmissionMain"),
  loading: LoadingView
});

const AdmissionProcedure_Async = Loadable({
  loader: () => import("./juet/Admissions/AdmissionProcedure"),
  loading: LoadingView
});

const FeeInstruction_Async = Loadable({
  loader: () => import("./juet/Admissions/FeeInstruction"),
  loading: LoadingView
});

const Scholarship_Async = Loadable({
  loader: () => import("./juet/Admissions/Scholarship"),
  loading: LoadingView
});

const FeeStructure_Async = Loadable({
  loader: () => import("./juet/Admissions/FeeStructure"),
  loading: LoadingView
});

const AdmissionIntake_Async = Loadable({
  loader: () => import("./juet/Admissions/AdmissionIntake"),
  loading: LoadingView
});

const EducationLoan_Async = Loadable({
  loader: () => import("./juet/Admissions/EducationLoan"),
  loading: LoadingView
});

const AboutMain_Async = Loadable({
  loader: () => import("./juet/About/AboutMain"),
  loading: LoadingView
});

const MissionVision_Async = Loadable({
  loader: () => import("./juet/About/MissionVision"),
  loading: LoadingView
});

const JPGroup_Async = Loadable({
  loader: () => import("./juet/About/JPGroup"),
  loading: LoadingView
});

const FacultyListAll_Async = Loadable({
  loader: () => import("./juet/faculty/FacultyListAll"),
  loading: LoadingView
});

const FacultyDepartmentProfile_Async = Loadable({
  loader: () => import("./juet/faculty/FacultyListDepartmentWise"),
  loading: LoadingView
});

const FacultyIndividualProfile_Async = Loadable({
  loader: () => import("./juet/faculty/FacultyListIndividual"),
  loading: LoadingView
});

export const routes = [
  {
    path: "/",
    component: BodyMainLandingPage,
    exact: true
  },
  {
    path: "/Webkiosk",
    component: () => {
      window.open("https://webkiosk.juet.ac.in", "_blank");
      return null;
    }
  },
  {
    path: "/About",
    component: AboutMain_Async,
    exact: true
  },
  {
    path: "/MissionVision",
    component: MissionVision_Async,
    exact: true
  },
  {
    path: "/JPGroup",
    component: JPGroup_Async
  },
  {
    path: "/faculty",
    component: FacultyListAll_Async,
    exact: true
  },
  {
    path: "/faculty/profile/:id",
    component: FacultyIndividualProfile_Async,
    exact: true
  },
  {
    path: "/faculty/:dept",
    component: FacultyDepartmentProfile_Async,
    exact: true
  },
  // {
  //     path:"/",
  //     component:AdmissionHome,
  //     exact:true,
  // },
  {
    path: "/admissions",
    component: AdmissionHome_Async,
    exact: true
  },
  {
    path: "/admissions/Procedure",
    component: AdmissionProcedure_Async,
    exact: true
  },
  {
    path: "/admissions/EDULoan",
    component: EducationLoan_Async,
    exact: true
  },
  {
    path: "/admissions/Fees",
    component: FeeStructure_Async,
    exact: true
  },
  {
    path: "/admissions/FeeInstruction",
    component: FeeInstruction_Async,
    exact: true
  },
  {
    path: "/admissions/Intake",
    component: AdmissionIntake_Async,
    exact: true
  },
  {
    path: "/admissions/Scholarship",
    component: Scholarship_Async,
    exact: true
  }
];
