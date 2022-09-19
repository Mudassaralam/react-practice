import React, { useState } from "react";
import "./inputchangelabel.css";
import { Table } from "react-bootstrap";
function InputChangeLabel() {
	const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
	});
	// const [example,setExample] = useState(true);

	const [newData, setNewdata] = useState([]);

	const inputHandler = (e) => {
		if (e.target.id === "fname") {
			setData({ ...data, fname: e.target.value });
			// Float Lablel First Name
			if (e.target.value.length >= 1) {
				const labelFloat = document.getElementById("labelFName");
				labelFloat.style.transform = "translateY(-1em)";
			} else {
				const labelFloat = document.getElementById("labelFName");
				labelFloat.style.transform = "translateY(0em)";
			}
		}
		if (e.target.id === "lname") {
			setData({ ...data, lname: e.target.value });
			// Float Lablel Last Name
			if (e.target.value.length >= 1) {
				const labelFloat = document.getElementById("labelLName");
				labelFloat.style.transform = "translateY(-1em)";
			} else {
				const labelFloat = document.getElementById("labelLName");
				labelFloat.style.transform = "translateY(0em)";
			}
		}
		if (e.target.id === "email") {
			setData({ ...data, email: e.target.value });
			// Float Lablel Email
			if (e.target.value.length >= 1) {
				const labelFloat = document.getElementById("labelEmail");
				labelFloat.style.transform = "translateY(-1em)";
			} else {
				const labelFloat = document.getElementById("labelEmail");
				labelFloat.style.transform = "translateY(0em)";
			}
		}
		if (e.target.id === "phone") {
			setData({ ...data, phone: e.target.value });
			// Float Lablel Phone
			if (e.target.value.length >= 1) {
				const labelFloat = document.getElementById("labelPhone");
				labelFloat.style.transform = "translateY(-1em)";
			} else {
				const labelFloat = document.getElementById("labelPhone");
				labelFloat.style.transform = "translateY(0em)";
			}
		}
		if (e.target.id === "password") {
			setData({ ...data, password: e.target.value });
			// Float Lablel Password
			if (e.target.value.length >= 1) {
				const labelFloat = document.getElementById("labelPassword");
				labelFloat.style.transform = "translateY(-1em)";
			} else {
				const labelFloat = document.getElementById("labelPassword");
				labelFloat.style.transform = "translateY(0em)";
			}
		}
		// console.log(e.target.value)

		// Float Lablel First Name

		// if(e.target.value.length >= 1){
		//     const labelFloat = document.getElementById('labelFName');
		//     labelFloat.style.transform =  'translateY(-1em)';
		// }else{
		//     const labelFloat = document.getElementById('labelFName');
		//     labelFloat.style.transform = 'translateY(0em)';
		// }

		// Float Lablel Last Name

		// if(e.target.value.length >= 1){
		//     const labelFloat = document.getElementById('labelLName');
		//     labelFloat.style.transform =  'translateY(-1em)';
		// }else{
		//     const labelFloat = document.getElementById('labelLName');
		//     labelFloat.style.transform = 'translateY(0em)';
		// }
	};

	const onsubmitform = (e) => {
		e.preventDefault();
		setNewdata([data]);

		setData({
			...data,
			fname: "",
			lname: "",
			email: "",
			phone: "",
			password: "",
		});

		if (
			setData({
				...data,
				fname: "",
				lname: "",
				email: "",
				phone: "",
				password: "",
			})
		) {
			const labelFNFloat = document.getElementById("labelFName");
			const labelLNFloat = document.getElementById("labelLName");
			const labelEFloat = document.getElementById("labelEmail");
			const labelPFloat = document.getElementById("labelPhone");
			const labelPSFloat = document.getElementById("labelPassword");
			labelFNFloat.style.transform = "translateY(0em)";
			labelLNFloat.style.transform = "translateY(0em)";
			labelEFloat.style.transform = "translateY(0em)";
			labelPFloat.style.transform = "translateY(0em)";
			labelPSFloat.style.transform = "translateY(0em)";
		} else {
			const labelFNFloat = document.getElementById("labelFName");
			const labelLNFloat = document.getElementById("labelLName");
			const labelEFloat = document.getElementById("labelEmail");
			const labelPFloat = document.getElementById("labelPhone");
			const labelPSFloat = document.getElementById("labelPassword");
			labelFNFloat.style.transform = "translateY(0em)";
			labelLNFloat.style.transform = "translateY(0em)";
			labelEFloat.style.transform = "translateY(0em)";
			labelPFloat.style.transform = "translateY(0em)";
			labelPSFloat.style.transform = "translateY(0em)";
		}
	};
	return (
		<>
			<div id="body">
				<h1>
					Floating <span> Label</span>
				</h1>
				<form onSubmit={onsubmitform}>
					<div id="input-div">
						<input
							type="text"
							id="fname"
							placeholder=" "
							value={data.fname}
							onChange={inputHandler}
							autoComplete="off"
						/>
						<label id="labelFName">First Name</label>
					</div>
					<div id="input-div">
						<input
							type="text"
							id="lname"
							placeholder=" "
							value={data.lname}
							onChange={inputHandler}
							autoComplete="off"
						/>
						<label id="labelLName">Last Name</label>
					</div>
					<div id="input-div">
						<input
							type="email"
							id="email"
							placeholder=" "
							value={data.email}
							onChange={inputHandler}
							autoComplete="off"
						/>
						<label id="labelEmail">Email</label>
					</div>
					<div id="input-div">
						<input
							type="phone"
							id="phone"
							placeholder=" "
							value={data.phone}
							onChange={inputHandler}
							autoComplete="off"
						/>
						<label id="labelPhone">Phone No</label>
					</div>
					<div id="input-div">
						<input
							type="password"
							id="password"
							placeholder=" "
							value={data.password}
							onChange={inputHandler}
							autoComplete="off"
						/>
						<label id="labelPassword">Password</label>
					</div>
					<div id="input-div">
						<button id="button" type="submit">
							Submit
						</button>
					</div>
				</form>
				<Table variant="dark">
					<thead>
						<tr>
							<td>Id</td>
							<td>First Name</td>
							<td>Last Name</td>
							<td>Email</td>
							<td>Phone No</td>
							<td>Password</td>
						</tr>
					</thead>
					<tbody>
						{newData.map((item, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{item.fname}</td>
									<td>{item.lname}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>{item.password}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</>
	);
}
export default InputChangeLabel;
