import "./footer.css"

export default function Footer(){
    return(
        <>
        <section class="footer">
        <div className="box-container">
            <div className="box">
                <h3>Try For Free!</h3>
                <p>Get Unlimited Free try our features</p>
            </div>
            <div className="box">
            <input type="submit" value="Learn More" class="btn h " />
            <input type="submit" value="Request Demo →" class="btn h f1" />
            </div>
           
        </div>
    <div class="box-container">
        <div class="box">
            <h3>Insignia</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit itaque voluptatibus placeat eveniet voluptatem saepe quo, praesentium minus alias
             inventore, porro molestiae unde aliquam nulla. Sit sequi numquam suscipit.</p>
        </div>
        <div class="box">
            <h3>About</h3>
            <a href="">Profile</a>
            <a href="">Features</a>
            <a href="">Carrier</a>
            <a href="">DW News</a>
        </div>
        <div class="box">
            <h3>Help</h3>
            <a href="">Support</a>
            <a href="">Sign Up</a>
            <a href="">Guide</a>
            <a href="">Reports</a>
            <a href="">Q & A</a>
           

          
        </div>
        <div class="box">
            <h3>Follow US</h3>
             <a href="https://www.facebook.com/" target="blank"><i class="fab fa-facebook btn"></i>facebook</a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="blank"><i class="fab fa-instagram btn"></i>instagram</a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="blank"><i class="fab fa-twitter btn"></i>twitter</a>

             
            
        </div>
    </div>
    <h1 class="credit">Ⓒ<span>Insigina 2020</span>|all rights reserved</h1>
</section>
        
        </>
    );
}