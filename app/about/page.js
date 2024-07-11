import Navber from "../component/navbar.js"

export default function Home() {
  return (

    <>
      <Navber /> 
      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src="img/3.png" alt="About Us Image" /></div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="text-muted"></span>
                <h2 className="display-5 fw-bold">About us</h2>
                <p className="lead">Selling the best clothing and accessories

</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </>

  );
}