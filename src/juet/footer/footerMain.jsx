import React,{Component} from 'react';

import FooterAddContact from './footerContact';
import FooterAddDisclosures from './footerDisclosures';
import FooterAddImpLinks from './footerImpLinks';
//import FooterAddTCPrograms from './footerTCPrograms';

import './styles/footer.css';

class FooterMake extends Component
{
render()
{
    return(
        <footer id="footer">
                <FooterAddDisclosures />
                <FooterAddImpLinks />
                <FooterAddImpLinks />
                <FooterAddContact />
        </footer>
    )
}
}

export default FooterMake;