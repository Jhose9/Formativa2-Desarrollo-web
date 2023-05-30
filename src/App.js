import React from "react";
import Card from "../src/components/card.js";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-primary">
        we are committed expert partners
      </h1>
      <p className="text-center">
        we place huge value on strong relationships and have seen the benefit
        they <br></br> bring to our business. Customer feedback is vital in helping us to
        get it right
      </p>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="mb-4">
          <Card
            img="https://img.freepik.com/vector-premium/retrato-mujer-joven_478440-98.jpg"
            txt="Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi elementum tempor nostra mi sed dictum accumsan, congue viverra massa iaculis malesuada vulputate. Lacus enim tempor nec varius urna pellentesque hendrerit tempus montes, integer praesent suscipit ad facilisis laoreet scelerisque vulputate fames, mus lobortis eget ridiculus vel risus pulvinar orci. Aenean magna auctor mi hac nascetur sollicitudin dictum eu odio diam bibendum, at dictumst feugiat nec penatibus rutrum pretium lectus vestibulum."
            color='#FFC0CB'
          />
        </div>
        <div>
          <Card
            img="https://img.freepik.com/vector-premium/retrato-hermoso-mujer-joven-pelo-largo_478440-141.jpg?w=826"
            txt = "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi elementum tempor nostra mi sed dictum accumsan, congue viverra massa iaculis malesuada vulputate. Lacus enim tempor nec varius urna pellentesque hendrerit tempus montes, integer praesent suscipit ad facilisis laoreet scelerisque vulputate fames, mus lobortis eget ridiculus vel risus pulvinar orci. Aenean magna auctor mi hac nascetur sollicitudin dictum eu odio diam bibendum, at dictumst feugiat nec penatibus rutrum pretium lectus vestibulum."
            color = "#90CAF9"
          />
        </div>
        <div>
        <Card
            img="https://img.freepik.com/vector-premium/retrato-mujer-joven-belleza_573652-342.jpg"
            txt = "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi elementum tempor nostra mi sed dictum accumsan, congue viverra massa iaculis malesuada vulputate. Lacus enim tempor nec varius urna pellentesque hendrerit tempus montes, integer praesent suscipit ad facilisis laoreet scelerisque vulputate fames, mus lobortis eget ridiculus vel risus pulvinar orci. Aenean magna auctor mi hac nascetur sollicitudin dictum eu odio diam bibendum, at dictumst feugiat nec penatibus rutrum pretium lectus vestibulum."
            color='#66BB6A'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
