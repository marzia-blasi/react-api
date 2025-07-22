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
                      <h5 className="card-title">{act.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{act.birth_year}</li>
                      <li className="list-group-item">{act.nationality}</li>
                      <li className="list-group-item">{act.biography}</li>
                    </ul>
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
                      <h5 className="card-title">{actm.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{actm.birth_year}</li>
                      <li className="list-group-item">{actm.nationality}</li>
                      <li className="list-group-item">{actm.biography}</li>
                    </ul>
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
