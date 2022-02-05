import React, { useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

export const StatusListCard = ({ data }) => {
  const [checked, setChecked] = useState();
  const navigate = useNavigate()
  const [out, setOut] = useState();
  const [status,setStatus ] = useState(data.status)

  const handleCheck = () => {
    setStatus('Checked In')
    alert(
      ` ${data.name} was successfully Checked In Room Number 214 `
    );
  };
  const handleOut = () => {
    setStatus('Checked Out');
    alert(
      ` ${data.name} was successfully Checked Out, Collect Keys For Room Number 214 `
    );
  };
  setTimeout (()=>{

  },5000)

  return (
    <div key={data.guest_id} className="statusList">
      <div>
       <h5> {data.name}</h5>
        <p>{data.province},{data.city}</p>
        <p style={{marginTop:'-5%',display:'flex'}}>Status:<p style={{color:'#f26741'}}>{data.status}</p></p>
      </div>
      <div style={{ display: "flex", marginRight: "20%" }}>
        <button
          type="submit"
          className="check"
          style={{ height: 40, width: '80%' }}
          onClick={() => handleCheck()
          }
        >
          CheckIn
        </button>
        <button
          type="submit"
          className="check"
          style={{ height: 40, width: 100 }}
          onClick={() => handleOut()}
        >
          CheckOut
        </button>
      </div>
    </div>
  );
};
