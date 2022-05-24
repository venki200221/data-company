import "./home.css"

export default function Home (){
    return (
        <>
<section class="home" id="home">
<img class="logo" src="https://thumbs.dreamstime.com/b/digital-tech-icon-vector-set-technologies-illustration-sign-collecion-information-symbol-data-center-logo-can-be-used-web-185753730.jpg" alt="logo" />

<div className="content">
<div class="event-box">
        <div className="events">
            <h1>Save Your data storage here.</h1>
            <div className="events-desc">
                <div className="event-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eos, sint consequuntur sunt 
                 ipsum reprehenderit at corrupti ut ducimus aliquid ipsam quisquam autem consectetur fugit repellat
                  ex quod! Voluptatem, praesentium!</p>
                 
                  <input type="submit" value="Learn More" class="btn" />

                </div>

            </div>
            
        </div>
        <div className="events-img">
            <img src="https://www.processmaker.com/wp-content/uploads/2020/08/processmaker-accelerate-digital-transformation.png" alt="" />
        </div>

</div>
</div>

</section>


<div className="share">
<div className="event-box">
       
       <div className="events-img">
           <img src="https://www.subscriptionflow.com/wp-content/uploads/2021/12/hero-img.png" alt="" />
       </div>

       <div className="events">
           <h1>We are a high-level data storage bank</h1>
           <div className="events-desc">
               
               <div className="event-text">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eos, sint consequuntur sunt 
                ipsum reprehenderit at corrupti ut ducimus aliquid ipsam quisquam autem consectetur fugit repellat
                 ex quod! Voluptatem, praesentium!</p>
               </div>

        </div>
           
       </div>
       

</div>

</div>



        </>
    );
}