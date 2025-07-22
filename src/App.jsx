import { useState, useEffect } from "react";

function App() {
  const url = "https://lanciweb.github.io/demo/api/actresses/";
  const urlm = "https://lanciweb.github.io/demo/api/actors/";

  // attrici
  const [api, setApi] = useState(url);
  const [actData, setActData] = useState(null);

  // attori
  const [apim, setApim] = useState(urlm);
  const [actDataM, setActDataM] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  }, [api]);

  useEffect(() => {
    fetch(apim)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActDataM(data);
      });
  }, [apim]);

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
          {actDataM &&
            actDataM?.map((actm) => {
              return (
                <div className="col" key={actm.id}>
                  <div className="card">
                    <img
                      src={actm.image}
                      className="card-img-top"
                      alt={actm.name}
                    />
                    <div className="card-body">
                      <p className="card-text">{actm.name}</p>
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
