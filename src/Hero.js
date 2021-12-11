function Hero() {
return(
<div className="container fluid-3 px-20 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="./image/family.png" className="d-block mx-lg-auto img-fluid" alt="family" width="500" height="500" loading="lazy"></img>
            </div>
      <div className="col-lg-6">
        <i><h1 className="display-5 fw-bold lh-1 mb-3">The Photography Studio</h1></i>
        <p className="lead">Photography is an austere and blazing poetry of the real</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">HomePage</button>
          <button type="button" className="btn btn-primary btn-lg px-4">Know More</button>
        </div>
      </div>
    </div>
  </div>


)


}

export default Hero;