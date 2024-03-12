import './Brands.scss'

const Brands = () => {
  return (
    <div className="brands">
      <ul className="list-images">
        <li className="brand-child">
          <a title="Oakley" href="/brand/oakley.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/oakley_logo.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a title="Ray Ban" href="/brand/ray-ban.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/ray-ban_logo.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a title="Maui Jim" href="/brand/maui-jim.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/Maui-Jim.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a title="Costa" href="/brand/costa.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/costa_logo.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a title="Wiley X" href="/brand/wiley-x.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/wiley_x_logo_1.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a title="Nike" href="/brand/nike.html">
            <img src="https://www.sportrx.com/media/wysiwyg/Top_Brands/nike_logo.svg" />
          </a>
        </li>
        <li className="brand-child">
          <a className="more-brands" href="#">
            MORE BRANDS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Brands;
