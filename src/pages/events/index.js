import React from "react";
import HomepageFeatures from "@partials/HomepageFeatures";
import MapComponent from "@partials/MapComponent";

export default function Index() {
  return (
    <main>
      <section>
        <div className="hero">
          <div className="container">
            <h1 className="hero__title">
              Where
              <span className="color-primary">
                Scala
                <br />
              </span>
              People Meet
            </h1>
            <p>
              Join the vibrant Scala Community and shape it's future with us.
              <br />
              Explore events and engage. Contact us to add your community to the
              map.
            </p>
          </div>
        </div>
      </section>
      <MapComponent />
      <HomepageFeatures />
      <ContactBox />
    </main>
  );
}
