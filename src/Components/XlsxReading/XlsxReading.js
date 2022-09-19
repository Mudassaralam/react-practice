import React, { useState } from "react";
import MaterialTable from "material-table";
import * as XLSX  from 'xlsx';


function XlsxReading() {

  
  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();
  const EXTENSIONS = ['xlsx','xlx','csv'];

  const getExtensions = (file)=>{
      // console.log(file);
      const parts = file.name.split('.');
     const FileExten = parts[parts.length-1];
    //  console.log(FileExten)
    return EXTENSIONS.includes(FileExten);
 
  } 

  //Onchange Function
    const ImportExcel = (e)=>{
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        
        const reader = new FileReader();

        // Convert Data Into json

        const convertToJson = (headers,data)=>{
            const rows = [];
            data.forEach(row => {
                let rowData = {}
                row.forEach((element,index)=>{
                    rowData[headers[index]] = element;

                })
                rows.push(rowData);
            });
            return rows 

        }

        reader.onload = (event)=>{
            // console.log(event);

            //Parse Data
            const BSTR = event.target.result;
            const WorkBooK = XLSX.read(BSTR,{type:'binary'});

            //Get First Sheet

            const WorkSheetName = WorkBooK.SheetNames[0];
            const WorkSheet =  WorkBooK.Sheets[WorkSheetName];
            // console.log(WorkSheet);

            //Conver to Array

            const FileData = XLSX.utils.sheet_to_json(WorkSheet,{header:1});
            // console.log(FileData[0]);  

            // Headers 

            const headers = FileData[0];
            // console.log("This is header",headers)
            

            const heads = headers.map(head=>({title:head,field:head}));
            console.log(heads);
            setColDefs(heads);

            // Remove header from the file 
            FileData.splice(0,1);
           setData(convertToJson(headers,FileData));
           
        } 
         if(getExtensions(file)){
          reader.readAsBinaryString(file);
         }else{
           alert("Invalid file. Select EXCEL Or CSV file.. !")
         }
        
        
    }


  return (
    <>
      <div style={{ height: 400, width: "100%", }}>
        <h1>Import Data From XLSX File</h1>
        <input type="file" onChange={ImportExcel} />
        <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={colDefs}
          data={data}
          title="XLSX File "
        />
      </div>
      </div>
     
    </>
  );
}
export default XlsxReading;
