import "./download.css";

export default function Download(){
    return(<>

   <section className="Download" id="Download">
   <div className="share">
           
   <div class="event-box">
        <div className="events">
            <h1>Download our app now</h1>
            <div className="events-desc">
                <div className="event-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eos, sint consequuntur sunt 
                 ipsum reprehenderit at corrupti ut ducimus aliquid ipsam quisquam autem consectetur fugit repellat
                  ex quod! Voluptatem, praesentium!</p>
                  {/* <a href="" class="btn">Download Now</a> */}
                  <input type="submit" value="Download Now" class="btn" />
                </div>

            </div>
            
        </div>
        <div className="events-img">
            <img src="https://www.subscriptionflow.com/wp-content/uploads/2021/12/hero-img.png" alt="" />
        </div>

</div>

    </div>
    
   </section>
       
    </>);

}