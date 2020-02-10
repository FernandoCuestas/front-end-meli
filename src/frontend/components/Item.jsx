import React from 'react';
import ShippingLogo from './ShippingLogo';
import './../styles/components/app.scss';

const Item = () => (
  <li className="results-item highlighted article stack ">
    <div
      className="rowItem item highlighted item--stack item--has-row-logo new "
      id="MLA772824757"
    >
      <div className="item__image item__image--stack">
        <div
          className="images-viewer"
          item-url="https://articulo.mercadolibre.com.ar/MLA-772824757-camisa-entallada-pantalon-hombre-gabardina-arma-tu-combo-_JM?searchVariation=33427338439#searchVariation=33427338439&position=3&type=item&tracking_id=900b642c-7f46-458b-91fe-17574813f58d"
          item-id="MLA772824757"
          product-id
        >
          <div className="image-content">
            
            <a
              href="https://articulo.mercadolibre.com.ar/MLA-772824757-camisa-entallada-pantalon-hombre-gabardina-arma-tu-combo-_JM?searchVariation=33427338439#searchVariation=33427338439&position=3&type=item&tracking_id=900b642c-7f46-458b-91fe-17574813f58d"
              className="figure item-image item__js-link"
            >
              
              <img
                width={180}
                height={180}
                src="https://http2.mlstatic.com/D_NQ_NP_830237-MLA31100938083_062019-V.webp"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="item__info-container highlighted ">
        <div className="item__info item--hide-right-col ">
          <div className="price__container">
            <div className="item__price ">
              <span className="price__symbol">$</span>
              <span className="price__fraction">3.490</span>
              <ShippingLogo/>
            </div>
            <div className="country">CABA</div>
          </div>
          <h2 className="item__title list-view-item-title">
            
            <a
              href="https://articulo.mercadolibre.com.ar/MLA-772824757-camisa-entallada-pantalon-hombre-gabardina-arma-tu-combo-_JM?searchVariation=33427338439#searchVariation=33427338439&position=3&type=item&tracking_id=900b642c-7f46-458b-91fe-17574813f58d"
              className="item__info-title"
            >
              
              <span className="main-title">
                
                Camisa Entallada + Pantalón Hombre Gabardina - Arma Tu Combo
              </span>
            </a>
          </h2>
        </div>
      </div>
    </div>
  </li>
);

export default Item;
