import React from 'react';
import Header from '../components/Header';
import BreadcrumbList from '../components/BreadcrumbList';
import SearchResults from '../components/SearchResults';
import Detail from '../components/Detail';
import './../styles/components/app.scss';

const App = ({ page }) => {
  if (page == 1) return <Header />;

  if (page == 2) {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section className="vip-section-navigation  vip-bg-alt no-deep-links">
            <nav className="vip-container u-clearfix">
              <div className="vip-navigation-breadcrumb">
                <BreadcrumbList />
              </div>
            </nav>
          </section>
          <SearchResults />
        </main>
      </React.Fragment>
    );
  }
  if (page == 3) {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section className="vip-section-navigation  vip-bg-alt no-deep-links">
            <nav className="vip-container u-clearfix">
              <div className="vip-navigation-breadcrumb">
                <BreadcrumbList />
              </div>
            </nav>
          </section>
          <Detail/>
        </main>
      </React.Fragment>
    );
  }
};

export default App;
