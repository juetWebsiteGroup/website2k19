import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import LazyLoad from "react-lazyload";

const SliderItem = props => {
  return <>{props.children}</>;
};

const SliderAcademicItem = props => {
  let TextData = [];
  let iconMember = "";
  TextData.push(props);
  return TextData.map(data => {
    if (data.iconOpt) {
      iconMember = <FontAwesomeIcon color='#ffffff' icon={data.iconOpt} style={{ fontSize: "2rem" }} />;
    }
    return (
      <div className='AdminItem1'>
        <div className='AdminItemTextContainer'>
          <p>
            {iconMember}
            <br />
            {data.AdminTextToDisplay}
          </p>
        </div>
      </div>
    );
  });
};

const SliderStudentItem = props => {
  let TextData = [];
  let iconMember = "";
  TextData.push(props);
  return TextData.map(data => {
    if (data.iconOpt) {
      iconMember = <FontAwesomeIcon color='#ffffff' icon={data.iconOpt} style={{ fontSize: "2rem" }} />;
    }
    return (
      <div className='StudentItem1'>
        <div className='StudentItemTextContainer'>
          <p>
            {iconMember}
            <br />
            {data.StudentTextToDisplay}
          </p>
        </div>
      </div>
    );
  });
};
class IntroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderImageData: [
        {
          id: "1",
          index: 0,
          image: "/static/images/g2_d.jpg",
          TextTitle: "D'Equinox 2k19",
          TextContent: "A Cultural Fest by Jaypee University of Engineering & Technology,Guna",
          iconOpt: faCalendarPlus
        },
        {
          id: "2",
          index: 1,
          image: "/static/images/campus2.jpg",
          TextTitle: "University Main Gate",
          TextContent: "Jaypee University of Engineering & Technology,Guna",
          iconOpt: null
        },
        {
          id: "3",
          index: 2,
          image: "/static/images/juetFountain.jpg",
          TextTitle: "Beautiful Campus & Lush Green Environment",
          TextContent: "Pic Credit: Nameh Dhiman",
          iconOpt: null
        },
        {
          id: "4",
          index: 3,
          image: "/static/images/juetLake1.jpg",
          TextTitle: "Campus Lake Point",
          TextContent: "Pic Credit: Nameh Dhiman",
          iconOpt: null
        },
        {
          id: "5",
          index: 4,
          image: "/static/images/juetLake2.jpg",
          TextTitle: "Evening View",
          TextContent: "Pic Credit: Nameh Dhiman",
          iconOpt: null
        }
      ]
    };
    this.nextImage = this.nextImage.bind(this);
  }
  componentWillMount() {
    this.setState({ sliderImageDataProperty: this.state.sliderImageData[0] });
  }

  nextImage = whereTo => {
    if (whereTo >= 0 && typeof whereTo === "number") {
      event.target.className = "point active";
      this.setState({ sliderImageDataProperty: this.state.sliderImageData[whereTo] });
    }
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        var newImageIndex = this.state.sliderImageDataProperty.index + 1;
        if (newImageIndex > this.state.sliderImageData.length - 1) {
          newImageIndex = 0;
        }
        this.setState(prevState => {
          return {
            sliderImageDataProperty: prevState.sliderImageData[newImageIndex]
          };
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    let iconMember = "";
    return (
      <div className='college_introSection'>
        <div className='photosContainer' style={{ gridTemplateColumns: `repeat(${this.state.sliderImageData.length},1fr)` }}>
          <SliderItem>
            {this.state.sliderImageDataProperty &&
              this.state.sliderImageData.map(data => {
                if (data.iconOpt) {
                  iconMember = <FontAwesomeIcon color='#ffffff' icon={data.iconOpt} style={{ fontSize: "0.95rem" }} />;
                }
                return (
                  <LazyLoad once>
                    <div
                      key={data.id}
                      className={`item image_${data.index}`}
                      style={{
                        transform: `translateX(-${this.state.sliderImageDataProperty.index * 100}%)`,
                        background: `url(${data.image}) no-repeat`,
                        backgroundSize: "cover"
                      }}>
                      <div className='TextContainer'>
                        <p className='TextTitle'>{data.TextTitle}</p>
                        <p className='TextContent'>
                          {iconMember}&nbsp;&nbsp;{data.TextContent}
                        </p>
                      </div>
                    </div>
                  </LazyLoad>
                );
              })}
          </SliderItem>
          <div className='indicatePoints'>
            {this.state.sliderImageDataProperty &&
              this.state.sliderImageData.map((data, i) => (
                <a ref={`ImagePoint_${i}`} onClick={() => this.nextImage(i)} className='point' />
              ))}
          </div>
        </div>
        <div className='LatestHappenings'>
          <LazyLoad once>
            <div className='AdminRelated' title='Academics News'>
              <SliderAcademicItem iconOpt={faTrophy} AdminTextToDisplay='NIRF - Ranking 150-200 Accredited With Grade A by NAAC' />
              <SliderAcademicItem iconOpt={faTrophy} AdminTextToDisplay='NIRF - Ranking 150-200 Accredited With Grade A by NAAC' />
              <SliderAcademicItem iconOpt={faTrophy} AdminTextToDisplay='NIRF - Ranking 150-200 Accredited With Grade A by NAAC' />
              <SliderAcademicItem iconOpt={faTrophy} AdminTextToDisplay='NIRF - Ranking 150-200 Accredited With Grade A by NAAC' />
            </div>
          </LazyLoad>

          <div className='StudentRelated' title='Student News'>
            <LazyLoad once>
              <SliderStudentItem
                iconOpt={faCalendarPlus}
                StudentTextToDisplay='Teachers Training Workshop on Python Programming from 05-07th.Apr.19'
              />
              <SliderStudentItem iconOpt={faCalendarPlus} StudentTextToDisplay='Mozilla AR/VR Workshop on 20th.Oct.18' />
              <SliderStudentItem iconOpt={faCalendarPlus} StudentTextToDisplay='Workshop on PHP Programming By CSI from 17-19th.Nov.18' />
              <SliderStudentItem
                iconOpt={faCalendarPlus}
                StudentTextToDisplay='Workshop on Arduino Programming By ISF from 17-19th.Dec.18'
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroSection;
