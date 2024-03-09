import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/transactions.css";

function Transactions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/transactions"); // Replace '/api/data' with your actual backend endpoint

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      {data ? (
        <ul className="list">
          {data.data.map((trans) => (
            <li className="list-item">
              <h3>{trans.attributes.description}</h3>
              <p>
                <span className="currency">
                  {trans.attributes.amount.currencyCode}
                </span>{" "}
                {trans.attributes.amount.value}
              </p>
              <p className={`status ${trans.attributes.status}`}>
                {trans.attributes.status}
              </p>
              <p>
                Settled at:{" "}
                {new Date(trans.attributes.settledAt).toLocaleString()}
              </p>
              <p>
                Created at:{" "}
                {new Date(trans.attributes.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Transactions;
