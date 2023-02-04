import React, { useState } from "react";
import * as XLSX from "xlsx";

const Fileupload = () => {
  const [items, setItems] = useState([]);
  console.log(`items`, items);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">SL.</th>
            <th scope="col">appointmentDate</th>
            <th scope="col">email</th>
            <th scope="col">patientname</th>
            <th scope="col">phone</th>
            <th scope="col">price</th>
            <th scope="col">slot</th>
            <th scope="col">treatment</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.SL}>
              <th>{d.SL}</th>
              <td>{d.appointmentDate}</td>
              <td>{d.email}</td>
              <td>{d.patientname}</td>
              <td>{d.phone}</td>
              <td>{d.price}</td>
              <td>{d.slot}</td>
              <td>{d.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fileupload;
