import React, { useState } from "react";

const baseURL = "https://arvr-api.vercel.app";

const infoData = {
  1: { name: "Table", description: "A wooden dining table, perfect for family meals.", url: `${baseURL}/table` },
  2: { name: "Chair", description: "A comfortable ergonomic office chair.", url: `${baseURL}/chair` },
  3: { name: "Plastic Chair", description: "A lightweight and durable plastic chair.", url: `${baseURL}/plastic-chair` },
  4: { name: "Modern Arm", description: "A stylish modern armchair with cushioned seating.", url: `${baseURL}/modern-arm` },
  5: { name: "Steel Frame", description: "A sturdy steel-framed chair for outdoor use.", url: `${baseURL}/steel-frame` },
  6: { name: "Cabinet", description: "A spacious wooden cabinet for storage.", url: `${baseURL}/cabinet` },
};

const Home = () => {
  const [data, setData] = useState({});

  const fetchData = (id) => {
    setData((prevData) => ({ ...prevData, [id]: infoData[id] }));
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      <div className="container mt-5" style={{ maxWidth: "1200px" }}>
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-md-4">
              <div className="card shadow-sm border-0" style={{ borderRadius: "12px", overflow: "hidden" }}>
                <div className="card-body text-center" style={{ background: "linear-gradient(135deg, #eceff1, #e3f2fd)" }}>
                  <h5 className="card-title text-primary fw-bold">{infoData[item].name}</h5>
                  <p className="card-text">Click below to view details.</p>
                  <button 
                    className="btn btn-outline-primary fw-bold px-4 py-2" 
                    onClick={() => fetchData(item)}
                    style={{ transition: "0.3s", borderRadius: "8px" }}
                  >
                    View Info
                  </button>
                  <a 
                    href={infoData[item].url} 
                    className="btn btn-primary ms-2 fw-bold px-4 py-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ transition: "0.3s", borderRadius: "8px" }}
                  >
                    Visit Page
                  </a>
                </div>
              </div>
              {data[item] && (
                <div className="card mt-3 shadow-sm border-0" style={{ backgroundColor: "#fff3e0", borderRadius: "12px" }}>
                  <div className="card-body text-center">
                    <h5 className="card-title text-warning fw-bold">{data[item].name}</h5>
                    <p className="card-text text-muted">{data[item].description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
