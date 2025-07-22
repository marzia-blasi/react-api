import { useState, useEffect } from "react";

function App() {
  const url = "https://lanciweb.github.io/demo/api/actresses/";

  const [api, setApi] = useState(url);
  const [actData, setActData] = useState(null);

  useEffect;
  () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  },
    [api];

  return (
    <>
      <p>prova</p>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
