import React from 'react'
import './styles/NotFound.css'

export const ErrorPageNotFound = (props) => {
 return (
      <div className="ErrorPageContainer">
          <div className="container">
              <label className="ErrorCodeText">404</label>
              <label className="ErrorSubText">Oops!! Page Not Found</label>
              <p>We're sorry, the page you requested could not be found. Please go to the homepage or 
                  contact us at webmaster@juet.ac.in
              </p>
          </div>
      </div>
 )

}