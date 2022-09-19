import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Props from "./Components/Props";
import { useState } from "react";
import ClassComprops from "./Components/ClassComprops";
import InputFiealds from "./Components/InputFiealds";
import Toggle from "./Components/Toggle";
import HandleForm from "./Components/HandleForm";
import ConditionalRendering from "./Components/CondtionalRendering";
import FormValidation from "./Components/FormValidation";
import FormValid from "./Components/FormValidations/FormValid";
import FunctionAsp from "./Components/FunctionAsp";
import MembersFunAsProp from "./Components/MembersFunAsProp";
import Constructor from "./Components/Constructor";
import ConstructorDid from "./Components/ComponentDidMount/ConstructorDid";
import ConstructorUpdate from "./Components/ComponentUpdatMount/ConstructorUpdate";
import ShouldcomponentUpdate from "./Components/ShouldComponentUpdate/ShouldcomponentUpdate";
import ComponentWillUnmount from "./Components/ComponentWillUnmout/ComponentWilUnmount";
import UseEffectHook from "./Components/Hooks/UseEffect/UseEffectHook";
import UseEffect from "./Components/Hooks/UseEffect/UseEffect";
import Styles from "./Components/Styles/Styles";
import Array from "./Components/HandleArray/Array";
import NestedList from "./Components/HandleArray/NestedList";
import ReuseComp from "./Components/ReuseComponent/ReuseComp";
import LiftingStateUp from "./Components/LiftingStateUp/LiftingStateUp";
import ToggleA from "./Components/Toggle/ToggleA";
import CrudApp from "./Components/CrudApp/CrudApp";
import Drouting from "./Components/Routing/Drouting";
import GetMethod from "./Components/APIMethods/GetMethod";
import PostMethod from "./Components/APIMethods/PostMethod";
import Prefill from "./Components/APIMethods/Prefill";
import PreefillAgain from "./Components/APIMethods/PreefillAgain";
import InputChangeLabel from "./Components/InputChangelabel/InputChanageLabel";
import Loginapi from "./Components/APIMethods/Loginapi";
import InputChange from "./Components/InputChangelabel/InputChange";
import PreviPops from "./Components/PrevPropss/PreviProps";
import GetmethodAxios from "./Components/Axiosapis/GetmethodAxios";
import PostMethodAxios from "./Components/Axiosapis/PostMethodAxios";
import PostMethodAgain from "./Components/Axiosapis/PostmethodAgain";
import Mounting from "./Components/Lifecyclemethods/Mounting";
import Timer from "./Components/Timer/Timer";
import Timeragain from "./Components/Timer/Timeragain";
import Timerreact from "./Components/Timer/Timerreact";
import Timerhtml from "./Components/Timer/Timerhtml";
import Odoopost from "./Components/APIMethods/Odoopost";
import ContextApi from "./Components/ContextApi/ContextApis";
import ArrayDestring from "./Components/ArrayMethods/ArrayDestring";
import UserReducer from "./Components/Hooks/UserReducer";
import XlsxReading from "./Components/XlsxReading/XlsxReading";
import MemoHook from "./Components/Hooks/MemoHook";
import RefHook from "./Components/Hooks/RefHook";
function App() {
	function getData() {
		alert("This is from get data");
	}

	return (
		<div className="App">
			{/* <InputFiealds /> */}
			{/* <Toggle /> */}
			{/* <HandleForm /> */}
			{/* <ConditionalRendering /> */}
			{/* <FormValidation /> */}
			{/* <FunctionAsp data={getData}/>
     <FunctionAsp data={getData}/>
     <FunctionAsp data={getData}/>
     <MembersFunAsProp data={getData}/> */}
			{/* <Constructor />
     <ConstructorDid /> */}
			{/* <ConstructorUpdate name='ali' class='first year'/> */}
			{/* <ShouldcomponentUpdate />
      <ComponentWillUnmount /> */}
			{/* <UseEffectHook/> */}
			{/* <UseEffect /> */}
			{/* <Styles/> */}
			{/* <Array /> */}
			{/* <NestedList /> */}
			{/* <ReuseComp /> */}
			{/* <LiftingStateUp />  */}
			{/* <ToggleA /> */}
			{/* <Drouting /> */}
			{/* <GetMethod /> */}
			{/* <PostMethod /> */}
			{/* <Prefill /> */}
			{/* <PreefillAgain /> */}
			{/* <Loginapi /> */}
			<InputChangeLabel />
			{/* <PreviPops /> */}

			{/* Apis Axios Methods */}

			{/* <GetmethodAxios /> */}
			{/* <PostMethodAxios />  */}
			{/* <PostMethodAgain /> */}
			{/* <Mounting /> */}
			{/* <Timer /> */}
			{/* <Timeragain /> */}
			{/* <Timerreact /> */}
			{/* <Odoopost /> */}
			{/* <ContextApi /> */}
			{/* <ArrayDestring /> */}
			{/* <UserReducer />  */}
			{/* <XlsxReading /> */}
			{/* <MemoHook /> */}
			<RefHook />
		</div>
	);
}

export default App;
