import React from "react";
import Header from "../Header";

function Feature() {
  return (
    <div className="Feature">
      <Header></Header>
      <h2>Feature</h2>
      <div className="all-feature">
        <div className="F1">
          <h5>URL</h5>
          <p>
            We wrap our content first with BrowserRouter. Then we define our
            Routes. An application can have multiple Routes. Our basic example
            only uses one. s can be nested. The first has a path of / and
            renders the Layout component. The nested s inherit and add to the
            parent route. So the blogs path is combined with the parent and
            becomes /blogs. The Home component route does not have a path but
            has an index attribute. That specifies this route as the default
            route for the parent route, which is /. Setting the path to * will
            act as a catch-all for any undefined URLs. This is great for a 404
            error page.
          </p>
        </div>
        <div className="F2">
          <h5>About URL</h5>
          <p>
            We wrap our content first with BrowserRouter. Then we define our
            Routes. An application can have multiple Routes. Our basic example
            only uses one. s can be nested. The first has a path of / and
            renders the Layout component. The nested s inherit and add to the
            parent route. So the blogs path is combined with the parent and
            becomes /blogs. The Home component route does not have a path but
            has an index attribute. That specifies this route as the default
            route for the parent route, which is /. Setting the path to * will
            act as a catch-all for any undefined URLs. This is great for a 404
            error page.
          </p>
        </div>
        <div className="F3">
          <h5>AI implementaion URL</h5>
          <p>
            We wrap our content first with BrowserRouter. Then we define our
            Routes. An application can have multiple Routes. Our basic example
            only uses one. s can be nested. The first has a path of / and
            renders the Layout component. The nested s inherit and add to the
            parent route. So the blogs path is combined with the parent and
            becomes /blogs. The Home component route does not have a path but
            has an index attribute. That specifies this route as the default
            route for the parent route, which is /. Setting the path to * will
            act as a catch-all for any undefined URLs. This is great for a 404
            error page.
          </p>
        </div>
        <div className="F4">
          <h5>Automation URL</h5>
          <p>
            We wrap our content first with BrowserRouter. Then we define our
            Routes. An application can have multiple Routes. Our basic example
            only uses one. s can be nested. The first has a path of / and
            renders the Layout component. The nested s inherit and add to the
            parent route. So the blogs path is combined with the parent and
            becomes /blogs. The Home component route does not have a path but
            has an index attribute. That specifies this route as the default
            route for the parent route, which is /. Setting the path to * will
            act as a catch-all for any undefined URLs. This is great for a 404
            error page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
