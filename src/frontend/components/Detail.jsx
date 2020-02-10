import React from 'react';
import './../styles/components/app.scss';

const Detail = () => (
  <div className="vip-nav-bounds">
    <div className="layout-main u-clearfix">
      <div className="layout-col layout-col--left">
        <div className="vip-gallery-container ">
          <img
            src="https://http2.mlstatic.com/ventilador-de-pie-pared-turbo-18-pulgadas-105-watts-oferta-D_NQ_NP_850226-MLA40243107943_122019-O.webp"
            width={475}
            height={500}
            srcSet="
            https://http2.mlstatic.com/ventilador-de-pie-pared-turbo-18-pulgadas-105-watts-oferta-D_NQ_NP_850226-MLA40243107943_122019-F.webp 2x
          "
          />
        </div>
        <section className="main-section item-description ">
          <h2 className="main-section__title item-description__title">
            Descripción
          </h2>
          <div id="description-includes" className="item-description__content ">
            <div className="item-description__text">
              <p>
                Somos CHAVAY TIENDA Nos encontramos en el barrio de Villa
                Devoto. Horario de atención: Lunes a Viernes 9:00 a 18:00 hs /
                Sábados de 9:00 a 13:00 hs
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="layout-col layout-col--right">
        <div className="layout-description-wrapper" data-js-desc-wrap>
          <section
            className="short-description core-item short-description--static"
            data-js-short-desc
            data-fixed
            id="short-desc"
            style={{ minHeight: 884 }}
          >
            <div>
              <dl className="vip-title-info">
                <div className="item-conditions">
                  Nuevo &nbsp;-&nbsp; 1608 vendidos
                </div>
              </dl>
              <header className="item-title">
                <h1 className="item-title__primary ">
                  Ventilador De Pie, Pared Turbo 18 Pulgadas 105 Watts Oferta
                </h1>
              </header>
              <div className="item-price item-price__four">
                <span className="price-tag">
                  <span className="price-tag-symbol" content={2691.0}>
                    $
                  </span>
                  <span className="price-tag-fraction">2.691</span>
                </span>
              </div>
              <div className="vip-actions-wrapper  vip-actions-wrapper--cart-item">
                <div className="vip-actions item-actions u-clearfix">
                  <div className="vip-action-primary">
                    <input
                      type="submit"
                      defaultValue="Comprar"
                      className="ui-button ui-button--primary vip-narrow-button ch-shownby-pointerenter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Detail;
