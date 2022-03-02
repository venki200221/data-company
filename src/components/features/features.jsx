import "./features.css"

export default function Features(){
    return (<>
    
    <section className="features" id="features">
    <div className="share">
    <section className="services" id="services">
  <h1 className="heading">
     FEATURES
  </h1>

  <div className="box-container">
      <div className="box">
          <i className=" fas fa-clipboard"></i>
          <h3>Search Data</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio soluta magni quibusdam ducimus praesentium molestias eveniet earum, porro consequatur autem perspiciatis
               repellat consectetur temporibus inventore laboriosam iusto facilis? Consequatur!</p>

        <p className="learn">Learn More <span>→</span></p>
      </div>
      <div className="box">
      <i className="fas fa-print"></i>
        <h3>Print Out</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio soluta magni quibusdam ducimus praesentium molestias eveniet earum, porro consequatur autem perspiciatis
             repellat consectetur temporibus inventore laboriosam iusto facilis? Consequatur!</p>

       <p className="learn">Learn More <span>→</span></p>

    </div>
    <div className="box">
    <i className="fa-solid fa-shield-check"></i>
        <h3>Security Code</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio soluta magni quibusdam ducimus praesentium molestias eveniet earum, porro consequatur autem perspiciatis
             repellat consectetur temporibus inventore laboriosam iusto facilis? Consequatur!</p>

             <p className="learn">Learn More <span>→</span></p>

    </div>
    
  </div>

</section>

    </div>
    </section>
    
    </>);
}