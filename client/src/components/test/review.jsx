import "./review.css";

export default function Review(){
    return(<>
        <div className="testimonial" id="testimonial">
        <div className="share">
    <section class="review" id="review">
    <h1 className="heading">
      TESTIMONIALS
      </h1>
    <div className="box-container">
        <div className="box">
            <div className="overlay">
            </div>
            <img src="https://www.worldlistmania.com/wp-content/uploads/2012/08/tom-cruise.jpg" alt="" />
            <h3>John</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat 
            reprehenderit non ratione tempore delectus iure ullam voluptatum perferendis, reiciendis fugiat 
            doloremque eveniet accusantium suscipit culpa similique quidem nulla quia. Ex.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        </div>
        <div className="box">
            <div className="overlay">
            </div>
            <img src="https://i.pinimg.com/originals/99/27/d0/9927d030413db350147f92d3b4d792c0.jpg" alt="" />
            <h3>Harry</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat 
            reprehenderit non ratione tempore delectus iure ullam voluptatum perferendis, reiciendis fugiat 
            doloremque eveniet accusantium suscipit culpa similique quidem nulla quia. Ex.</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        <div class="box">
            <div class="overlay">
            </div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/twilight-robert-pattinson-1626228958.jpeg" alt="" />
            <h3>Williams</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat 
            reprehenderit non ratione tempore delectus iure ullam voluptatum perferendis, reiciendis fugiat 
            doloremque eveniet accusantium suscipit culpa similique quidem nulla quia. Ex.</p>
            <div class="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        </div>
        </div>
</section>
    </div>
        </div>
      
<section class="contact" id="contact">

<h1 class="heading"> SUBSCRIBE! </h1>
<p>Join Our news Letter to never miss the latest news.</p>
<form action="mailto:venkatesh21np@gmail.com" method="post" enctype="text/plain">
    <input type="email" placeholder="your email adress here!" className="box" />
    <input type="submit" value="Join Us" class="btn" />
</form>

</section>

<hr/>
    </>);
}
