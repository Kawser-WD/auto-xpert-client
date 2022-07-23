import image1 from '../../../images/car-mechanic-customer-shaking-hands.jpg';
import image2 from '../../../images/car-mechanic-repair-shop-20445550.jpg';
import image3 from '../../../images/car-mechanic-wearing-white-uniform-stand-holding-wrench.jpg';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
    <div>
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The best services of car repair for you</h5>
        <p>Whatever you need we'll provide with the best offer.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>The best services of car repair for you</h5>
        <p>Whatever you need we'll provide with the best offer.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>The best services of car repair for you</h5>
        <p>Whatever you need we'll provide with the best offer.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    );
};

export default HeaderMain;

