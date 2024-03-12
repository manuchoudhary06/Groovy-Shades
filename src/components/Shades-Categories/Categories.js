import './Categories.scss'

const Categories = () => {
    return ( <section class="eyewear-collection">
    <h2>FIND EYEWEAR FOR YOUR ACTIVITY</h2>
    <ul className="list-imgs">
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/cycling.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Cycling</span> </a></h3>
        </div>
      </li>
      {/* <!--   Second LI   --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/fishing.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Fishing</span> </a></h3>
        </div>
      </li>
      {/* <!--   Third LI   --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media//wysiwyg/Activity_Icons/ski-snowboard-menu.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Snow</span> </a></h3>
        </div>
      </li>
      {/* <!--   Fourth LI   --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/golf-activity.png" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Golf</span> </a></h3>
        </div>
      </li>
      {/* <!--  Fifth LI    --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/safety.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Safety/ANSI</span> </a></h3>
        </div>
      </li>
      {/* <!--   Sixth LI   --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/motorcycle.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Motorcycle</span> </a></h3>
        </div>
      </li>
      {/* <!--   Seventh LI   --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/home_running.jpg" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>Running</span> </a></h3>
        </div>
      </li>
      {/* <!--  8th LI    --> */}
      <li className="slick-slide-1">
        <div className="img-center">
          <img src="https://www.sportrx.com/media/wysiwyg/Activity_Icons/more-activity.png" alt="cycling" width="288" height="210" loading="lazy" />
          <h3><a className="img-caption" title="Cycling" href="/shopby/best_sports-cycling.html"> <span>MORE ACTIVITIES</span> </a></h3>
        </div>
      </li>
    </ul>
  </section> );
}
 
export default Categories;