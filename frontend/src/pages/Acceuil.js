

function Acceuil(){

    return(
        <div style={{marginTop:'', marginBottom:'', paddingBottom:''}}>
            <section data-bs-version="5.1" className="slider5 cid-sNBLwKVrvT" id="slider5-g">

            <div className="container-fluid">
                <div className="carousel slide" id="sOfLSe9R3d" data-ride="carousel" data-bs-ride="carousel" data-interval="3000" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item slider-image item active">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carLux.jpg" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carOffRoad.webp" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-image item">
                            <div className="item-wrapper">
                                <div className="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(38, 34, 33)"}}>
                                </div>
                                <img className="d-block w-100" src="images\carStandard.webp" alt="pic car"></img>
                                <div className="carousel-caption justify-content-center">
                                    <div className="row justify-content-center w-100">
                                        <div className="col-12 col-md-7 wrap">
                                            <h1 className="mbr-section-title mbr-fonts-style mbr-white w-100 display-1">LEAVE SOONER, DRIVE SLOWER, LIVE LONGER</h1>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev" href="#sOfLSe9R3d">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" data-bs-slide="next" href="#sOfLSe9R3d">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </section>
        


            <div style={{}}>
            <div className="header1" >
        <div className="formElem">
          <div className="reservation-item" >
            <form action="index.php" method="get" className="" >
                <div className="align-items-center justify-content-center">
                    <div className="form-check form-check-inline h-100 d-flex align-items-center justify-content-center text-white">
                        <input id="checkty" className="form-check-input" type="checkbox"></input><div style={{marginRight:'40px', marginLeft:'6px'}}>LUXURY</div>
                        <input id="checkty" className="form-check-input" type="checkbox"></input><div style={{marginRight:'40px', marginLeft:'6px'}}>OFF ROAD</div>
                        <input id="checkty" className="form-check-input" type="checkbox"></input><div style={{marginRight:'40px', marginLeft:'6px'}}>STANDARD</div>
                    </div>
                    <input name="lieu" id="lieu" style={{margin:'10px', height:'35px'}} placeholder="Pick-up location"></input>
                </div>
              <div className="encharge">

                <div className="prise centered-icon" >
                  <span className=""><i className="far fa-arrow-alt-circle-up"></i></span>
                </div>
                <div className="prise1">
                  <p>PICK-UP</p>
                </div>
                

                <div className="date">
                <input type="date" name="dateprise" value="" id="mois" placeholder="date :" style={{height:'35px'}}/>
                <select name="time" id="time" style={{height:'30px'}}>
                    <optgroup>
                        <option value="00:00">00:00</option>
                        <option value="00:30">00:30</option>
                        <option value="01:00">01:00</option>
                        <option value="01:30">01:30</option>
                        <option value="02:00">02:00</option>
                        <option value="02:30">02:30</option>
                        <option value="03:00">03:00</option>
                        <option value="03:30">03:30</option>
                        <option value="04:00">04:00</option>
                        <option value="04:30">04:30</option>
                        <option value="05:00">05:00</option>
                        <option value="05:30">05:30</option>
                        <option value="06:00">06:00</option>
                        <option value="06:30">06:30</option>
                        <option value="07:00">07:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                        <option value="23:00">23:00</option>
                        <option value="23:30">23:30</option>
                    </optgroup>
                </select>
                </div>
                </div>
                <div className="encharge" id="encharge">

                  <div className="prise centered-icon">
                    <span className=""><i className="far fa-arrow-alt-circle-down"></i></span>
                  </div>
                  <div className="prise1">
                    <p>DROP-OFF</p>
                  </div>
                  

                  <div className="date">
                  <input type="date" name="dateres" value="" id="mois" placeholder="date :" style={{height:'35px'}}/>
                  <select name="time" id="time" style={{height:'30px'}}>
                      <optgroup>
                          <option value="00:00">00:00</option>
                          <option value="00:30">00:30</option>
                          <option value="01:00">01:00</option>
                          <option value="01:30">01:30</option>
                          <option value="02:00">02:00</option>
                          <option value="02:30">02:30</option>
                          <option value="03:00">03:00</option>
                          <option value="03:30">03:30</option>
                          <option value="04:00">04:00</option>
                          <option value="04:30">04:30</option>
                          <option value="05:00">05:00</option>
                          <option value="05:30">05:30</option>
                          <option value="06:00">06:00</option>
                          <option value="06:30">06:30</option>
                          <option value="07:00">07:00</option>
                          <option value="08:30">08:30</option>
                          <option value="09:00">09:00</option>
                          <option value="09:30">09:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="11:30">11:30</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00">18:00</option>
                          <option value="18:30">18:30</option>
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                          <option value="21:30">21:30</option>
                          <option value="22:00">22:00</option>
                          <option value="22:30">22:30</option>
                          <option value="23:00">23:00</option>
                          <option value="23:30">23:30</option>
                      </optgroup>
                  </select>
                  </div>
                  </div>
                  <div className="encharge">
                    <div className="prise centered-icon">
                      <span><i className="fas fa-car"></i></span>
                    </div>
                    <div className="prise1">
                      <p>EXPECT ADDITIONAL FEES<br/> IF RETURNED IN<br/>ANOTHER CITY<br/><br/></p>
                    </div>
                     
                    </div>
                    <div>
                        <input type="button" value="Search" id="chercher" className="button bg-danger btn-custom" style={{margin:'10px', height:'35px'}} onclick="RESTITUTION()"/>
                    </div>
            </form>
          </div>
        </div>
      </div>

                
        </div>
        </div>
    )
}

export default Acceuil;