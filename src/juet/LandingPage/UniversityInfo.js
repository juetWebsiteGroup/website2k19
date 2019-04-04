import React from 'react'
import './styles/infoSection.css';

const InfoSection = (props) => {
    return (
        <div className="Academic">
        <h1>Academic News</h1>
        <div className="line"></div>
        <ul>
            <li>Anti-Ragging Undertaking, Medical Fitness Certificate Proforma</li>
            <li>Anti-Ragging Undertaking, Medical Fitness Certificate Proforma</li>
            <li>Anti-Ragging Undertaking, Medical Fitness Certificate Proforma</li>
        </ul>
      </div>
    )
}

export default class UniversityInfo extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {}

    }
    render()
    {
        return(
            <section className="UniversityInfo">
              <div className="container">
                {/*academic News Component */}
                <InfoSection />
                <InfoSection />
                <InfoSection />
              </div>
            </section>
        )
    }
}