

function Map(){

    return(
        <div style={{marginTop:'12px'}} className="">
            <div className="avant">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=casablanca%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{height:'1000px'}}></iframe>
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Map