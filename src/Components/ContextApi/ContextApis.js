import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();
const BaseLocat = createContext();
const FloorNo = createContext();

function ContextApi() {
  return (
    <>
      <h1>Context Api In React Js Parent Component </h1>
      <FirstName.Provider value={"Viltco"}>
        <LastName.Provider value={"Technologies"}>
          <BaseLocat.Provider value={"Arfa Karem Tower"}>
            <FloorNo.Provider value={"Room 4 Floor No #07"}>
            <CompA />
            </FloorNo.Provider>
          </BaseLocat.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export default ContextApi;
export { FirstName, LastName, BaseLocat,FloorNo };
