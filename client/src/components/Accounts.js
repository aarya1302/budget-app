import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/accounts.css";

function Accounts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/accounts"); // Replace '/api/data' with your actual backend endpoint

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <div>
        {data ? (
          <ul>
            {data.data.map((account) => (
              <li>
                {
                  <div className="account-info">
                    <h2>{account.attributes.displayName}</h2>
                    <p>Account Type: {account.attributes.accountType}</p>
                    <p>Ownership Type: {account.attributes.ownershipType}</p>
                    <p>
                      Balance: {account.attributes.balance.value}{" "}
                      {account.attributes.balance.currencyCode}
                    </p>
                    <p>
                      Created At:{" "}
                      {new Date(account.attributes.createdAt).toLocaleString()}
                    </p>
                    <a href={account.relationships.transactions.links.related}>
                      View Transactions
                    </a>
                  </div>
                }
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Accounts;
