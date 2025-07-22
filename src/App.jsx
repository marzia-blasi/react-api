import { useState, useEffect } from "react";

function App() {
  const url = "https://lanciweb.github.io/demo/api/actresses/";

  const [api, setApi] = useState(url);
  const [actData, setActData] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  }, [api]);
  return (
    <>
      <p>prova</p>

      <div className="container">
        <div className="row">
          {actData &&
            actData?.map((act) => {
              return (
                <div className="col" key={act.id}>
                  <div className="card">
                    <img
                      src={act.image}
                      className="card-img-top"
                      alt={act.name}
                    />
                    <div className="card-body">
                      <p className="card-text">{act.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
