import React from 'react'
import Fade from 'react-reveal/Fade';
import imageHero from 'assets/images/img-hero/img-hero.svg'
import imageHeroFrame from 'assets/images/img-hero/img-hero-frame.svg'
import iconCities from 'assets/images/icons/ic_cities.svg'
import iconTraveler from 'assets/images/icons/ic_traveler.svg'
import iconTreasure from 'assets/images/icons/ic_treasure.svg'

import Button from 'components/atoms/button';
import FormatNumber from 'components/utils/formatnumber';
export default function index(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
    return (
        <Fade top>
        <section className="container pt-4">
            <div className="row align-items-center">
               <div className="col-auto pr-5" style={{ width: 530 }}>
                  <h1 className="font-weight-bold line-height-1 mb-4">
                     Forget Busy Work, <br/>
                     Start Next Vacation
                  </h1>
                  <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                     We provide what you need to enjoy your holiday with family. Time to
                     make another memorable moments.
                  </p>
                  <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                    Show Me Now
                  </Button>
                  <div className="row" style={{ marginTop: 80 }}>
                     <div className="col-auto" style={{marginRight: 30}}>
                         <img width="36" height="37" src={iconTraveler} alt="{`${props.data.travelers} Travelers`}"/>
                         <h6 className="mt-3">
                            {FormatNumber(props.data.travelers)}{" "}
                            <span className="text-gray-500 font-weight-light">travelers</span>
                         </h6>
                     </div> 
                     <div className="col-auto" style={{marginRight: 30}}>
                         <img width="36" height="37" src={iconTreasure} alt="{`${props.data.treasure} Treasure`}"/>
                         <h6 className="mt-3">
                            {FormatNumber(props.data.treasures)}{" "}
                            <span className="text-gray-500 font-weight-light">treasure</span>
                         </h6>
                     </div> 
                     <div className="col-auto" style={{marginRight: 30}}>
                         <img width="36" height="37" src={iconCities} alt="{`${props.data.cities} Cities`}"/>
                         <h6 className="mt-3">
                            {FormatNumber(props.data.cities)}{" "}
                            <span className="text-gray-500 font-weight-light">cities</span>
                         </h6>
                     </div> 
                  </div>
               </div>
               <div className="col-6 pl-5">
                  <div style={{ width: 520, height: 410 }}>
                      <img src={imageHero} alt="Room with couches" className="img-fluid position-absolute" style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                      <img src={imageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0" }} />
                  </div>
               </div>
            </div>
        </section>
        </Fade>
    )
}
