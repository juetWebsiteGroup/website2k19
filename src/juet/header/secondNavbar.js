import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'

import LazyLoad from 'react-lazyload'
const RenderSubNavMoreOptions = (props) =>{
    if(props.renderData.length===0)
    {
        return (
            <div></div>
        )
    }
    else
    {
        return (
            <div className="SubNavMoreOptions">
                <ul>
                    {props.renderData.map((subOptionsData)=>(<li key={subOptionsData.id}><Link to={subOptionsData.Link_to}>{subOptionsData.title}</Link></li>))}
                </ul>
            </div>
        )
    }

};

class SecondNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
            dataContainer: [],
            dataContainerSubOptions:[],
            Classes:'main_nav'
        }
    }
    componentWillMount()
    {
        this.setState(()=>{return {
            dataContainer: [
                {id: 'NavUL2_1', Link_to: '/', title: 'Home', is_SubOpt: false},
                {id: 'NavUL2_2', Link_to: '/About', title: 'About', is_SubOpt: true},
                {id: 'NavUL2_3', Link_to: '/admissions', title: 'Admission', is_SubOpt: false},
                {id: 'NavUL2_4', Link_to: '', title: 'Academics', is_SubOpt: true},
                {id: 'NavUL2_5', Link_to: '', title: 'Placement', is_SubOpt: false},
                {id: 'NavUL2_6', Link_to: '', title: 'Facilities', is_SubOpt: true}
            ],
            dataContainerSubOptions: {
                About:
                    {
                        University: [
                            {id: 'SubNavOptions1_1', Link_to: '/About', title: 'About us'},
                            {id: 'SubNavOptions1_2', Link_to: '/MissionVision', title: 'Mision & Vision'},
                            {id: 'SubNavOptions1_3', Link_to: '/JPGroup', title: 'Jaypee Group'},
                            {id: 'SubNavOptions1_4', Link_to: '/ChancellorMessage', title: 'Message From Chancellor'},
                            {id: 'SubNavOptions1_5', Link_to: '/JSS', title: 'JSS'},
                            {id: 'SubNavOptions1_6', Link_to: '/faculty', title: 'Faculty'},
                            {id: 'SubNavOptions1_7', Link_to: '/Staff', title: 'Staff'},
                            {id: 'SubNavOptions1_8', Link_to: '/sisterInstitutes', title: 'Sister Institutes'}
                        ],
                Administration: [
                    {id: 'SubNavOptions2_2', Link_to: '/Gbody', title: 'Government Body'},
                    {id: 'SubNavOptions2_3', Link_to: '/BOM', title: 'Board of Management'},
                    {id: 'SubNavOptions2_4', Link_to: '/AcadCouncil', title: 'Academic Council'},
                    {id: 'SubNavOptions2_5', Link_to: '/BOS', title: 'Board of Studies'},
                    {id: 'SubNavOptions2_6', Link_to: '/Admin/VC', title: 'Vice Chancellor'},
                    {id: 'SubNavOptions2_7', Link_to: '/Admin/Registrar', title: 'Registrar'},
                    {id: 'SubNavOptions2_8', Link_to: '/Admin/Dean', title: 'Dean'},
                    {id: 'SubNavOptions2_9', Link_to: '/Admin/COE', title: 'Controller of Examination'},
                    {id: 'SubNavOptions2_10', Link_to: '/Admin/CFC', title: 'Chief Finance Controller'},
                    {id: 'SubNavOptions2_11', Link_to: '/Admin/AsstRegAcad', title: 'Assistant Registrar (Academics)'},
                    {id: 'SubNavOptions2_12', Link_to: '/Admin/AsstRegAdmin', title: 'Assistant Registrar (Administration)'},
                ],
                Research: [
                    {id: 'SubNavOptions3_2', Link_to: '', title: 'Ph.D. Admission Procedure'},
                    {id: 'SubNavOptions3_3', Link_to: '', title: 'Ph.D. Ordinance'},
                    {id: 'SubNavOptions3_4', Link_to: '', title: 'Research Areas'},
                    {id: 'SubNavOptions3_5', Link_to: '', title: 'Research Journal'},
                    {id: 'SubNavOptions3_6', Link_to: '', title: 'Research Centre'},
                    {id: 'SubNavOptions3_7', Link_to: '', title: 'More >>'}
                ],
                FacultiesAndDepartments: [
                    {id: 'SubNavOptions4_2', Link_to: '', title: 'Faculty of Engineering',subOptions:[
                        {id:'subOption1_SubNavOptions4_2',Link_to:'/faculty/Chemical',title:'Chemical Engineering'},
                        {id:'subOption2_SubNavOptions4_2',Link_to:'/faculty/Civil',title:'Civil Engineering'},
                        {id:'subOption3_SubNavOptions4_2',Link_to:`/faculty/${encodeURI('Computer Science')}`,title:'Computer Science & Engineering'},
                        {id:'subOption4_SubNavOptions4_2',Link_to:'/faculty/Electronics',title:'Electronics & Communication Engineering'},
                        {id:'subOption5_SubNavOptions4_2',Link_to:'/faculty/Mechanical',title:'Mechanical Engineering'},
                        {id:'subOption6_SubNavOptions4_2',Link_to:'/faculty/Chemistry',title:'Chemistry'},
                        {id:'subOption7_SubNavOptions4_2',Link_to:'/faculty/HSS',title:'Humanities and Social Sciences'},
                        {id:'subOption8_SubNavOptions4_2',Link_to:'/faculty/Mathematics',title:'Mathematics'},
                        {id:'subOption9_SubNavOptions4_2',Link_to:'/faculty/Physics',title:'Physics'},
                        ]},
                    {id: 'SubNavOptions4_3', Link_to: '', title: 'Faculty of Mathematical Sciences',subOptions:[]},
                    {id: 'SubNavOptions4_4', Link_to: '', title: 'Faculty of Sciences',subOptions:[]}
                ],
                TandPCell: [
                    {id: 'SubNavOptions5_2', Link_to: '', title: 'About the Cell'}
                ],
                WebsiteTeam: [
                    {id: 'SubNavOptions6_2', Link_to: 'https://www.linkedin.com/in/sushantr134/', title: 'Sushant Singh (Development & UX)'},
                    {id: 'SubNavOptions6_3', Link_to: '', title: 'Shishir Thakur (Maintaince & Deployment)'},
                    {id: 'SubNavOptions6_4', Link_to: '', title: 'Paras Saxena (Logo Redesigning)'},
                    {id: 'SubNavOptions6_5', Link_to: '', title: 'Zunaid Ahmed (Logo Redesigning)'}
                ]
            },
            Academics:
                {
                    ProgrammesOffered: [
                        {id: 'SubNavOptions7_3', Link_to: '', title: 'Know More >>'}
                    ],
                    PhilosophyOfTeaching:[
                        {id: 'SubNavOptions8_3', Link_to: '', title: 'Know More >>'}
                    ],
                    SchemeOfTeaching:[
                        {id: 'SubNavOptions9_2', Link_to: '', title: 'B.Tech'},
                        {id: 'SubNavOptions9_3', Link_to: '', title: 'M.Tech'},
                        {id: 'SubNavOptions9_4', Link_to: '', title: 'Ph.D.'},
                        {id: 'SubNavOptions9_5', Link_to: '', title: 'B.Sc.(Hons)'},
                        {id: 'SubNavOptions9_6', Link_to: '', title: 'M.Sc.'}
                    ]
                }
        }
        }})
    }
    componentDidMount()
    {
        $(window).scroll(function(){
            let sticky = $('.main_nav'),
                subNavList = $('.SubNavOptions');
            let scroll = $(window).scrollTop();
            if (scroll >= 165)
            {sticky.addClass('stick_header_top');
                subNavList.addClass('ShiftSubNavOptions');
            }
            else { sticky.removeClass('stick_header_top');
                subNavList.removeClass('ShiftSubNavOptions');
            }});
    }
    render() {
        return (
           <header>
               <input type="checkbox" id="nav_toggle"/>
               <label htmlFor = "nav_toggle" title="Click to Show Menu" className="nav_button"><div className="outer_shape"><div className="inner_shape"></div>
               </div></label>
            <div className={`${this.state.Classes}`} >
                <span>
                    <LazyLoad once>
                    <img src='/static/images/final_header_grey_txt.png' alt="JUET" className="college_logo" />
                    </LazyLoad>
                  </span>
                <nav>
                    <ul className="NavUL">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/About">About</Link>
                            <div className="SubNavOptions">
                                <ul className="SubNavOptionsUL">
                                    <li><h1>University</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.University.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                             )
                                    })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Administration</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.Administration.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Research</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.Research.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Faculties &amp; Departments</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.FacultiesAndDepartments.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link>
                                                    <RenderSubNavMoreOptions renderData={data.subOptions}/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <ul className="SubNavOptionsUL">
                                    <li><h1>T &amp;P Cell</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.TandPCell.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>NAAC Accredition &amp; Ranking</h1><br/><span className="line"></span></li>
                                    <li>
                                        <LazyLoad once>
                                        <img title="NAAC Accredition A Grade Certified" src="/static/images/naac-A.jpg"
                                             style={{"width":"100px","height":"100px"}} />
                                        </LazyLoad>
                                        </li>
                                    <li>Know More >></li>
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Website Development Team</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.About.WebsiteTeam.map((data) => {
                                            return(
                                                <li key={data.id}><a href={data.Link_to} rel="noreferrer" target="_blank">{data.title}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Campus Life</h1><br/><span className="line"></span></li>
                                    <li>Know More >></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to='/admissions'>Admission</Link></li>
                        <li><a href="">Academics</a>
                            <div className="SubNavOptions">
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Programmes Offered</h1><br/><span className="line"></span></li>
                                    <LazyLoad once>
                                    <img src="/static/images/Programmes.jpg" style={{"maxWidth":"100%","width":"100%"}}/>
                                    </LazyLoad>
                                   
                                    {
                                        this.state.dataContainerSubOptions.Academics.ProgrammesOffered.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Philosophy of Teaching</h1><br/><span className="line"></span></li>
                                    <figure>
                                        <LazyLoad once>
                                        <img src="/static/images/btech.jpg" style={{"maxWidth":"100%","width":"100%"}}/>
                                        </LazyLoad>
                                       
                                    </figure>
                                    {
                                        this.state.dataContainerSubOptions.Academics.PhilosophyOfTeaching.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="SubNavOptionsUL">
                                    <li><h1>Scheme of Teaching</h1><br/><span className="line"></span></li>
                                    {
                                        this.state.dataContainerSubOptions.Academics.SchemeOfTeaching.map((data) => {
                                            return(
                                                <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        </li>
                        <li><Link to="">Placement</Link></li>
                        <li><Link to="">Facilities</Link></li>
                    </ul>

                </nav>
            </div></header>

    );
    }
}

export default SecondNavbar;
