import { Link } from "react-router-dom";

function Footer(){

    return(
        <div>
            <div style={{backgroundColor:'black',color:'white'}} className="" id="footer">
                <div style={{}} className="container p-4">
                    <div style={{}} className="row">
                        <div className="col-4">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <img style={{width:'200px', padding:'15px'}} src="images\logo eLocation.png" alt="logo"></img>
                            </Link>
                        </div>
                        <div className="col-4">
                            <strong>Navigation</strong>
                            <br/>
                            <small><Link className="text-white text-decoration-none" to='/'>Main</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/map'>Map</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/lux'>Luxury</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/populaire'>Populaire</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/about'>About</Link></small>
                        </div>
                        <div className="col-4">
                            <strong>Contacts</strong>
                            <br/>
                            <small><Link className="text-white text-decoration-none" to='tel:+212632452973'>+212 (6) 32 45 29 73</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='mailto:contact@e-location.company'>contact@e-location.company</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;