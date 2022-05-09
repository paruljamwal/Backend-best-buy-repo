import "./Sign.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export const SignUp = () => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		mobile: "",
	});
	const navigate = useNavigate();
	const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
		let inputName = e.target.name;
		setUser({
			...user,
			[inputName]: e.target.value,
		});
	};

	//   let postData = async (value) => {
	//     let res = await fetch("https://bluefly-api.herokuapp.com/user",{

	//         method: 'POST',
	//         headers: { 'Content-Type': 'application/json'},
	//         body: JSON.stringify({
	//             value,
	//         })
	//     })
	//      let data = await res.json();
	//      console.log(data);
	//   }

	//   const handleSubmit = (e) => {
	// 		e.preventDefault();
	// 		console.log(user);
	// 		axios.post('https://bluefly-api.herokuapp.com/user')
	// 			.then(function (response) {
	// 				console.log(response);
	// 			})
	// 			.catch(function (error) {
	// 				console.log(error);
	// 			});
	//         let value = user;
	//         postData(value)
	//   };

	const postData = async ({ firstName, lastName, email, password, mobile }) => {
		try {
			let res = await fetch("  http://localhost:8080/user", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
					mobile,
				}),
			});
			let data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let value = user;
		postData(value);
		alert("Registration Successful");
	};

	return (
		<div className="main">
			<h1 className="head1">Login And SignUp</h1>
			<form className="loginform" onSubmit={handleSubmit}>
				<label className="label">FIRST NAME</label>
				<br></br>
				<input
					name="firstName"
					type="text"
					placeholder=""
					className="login_username"
					onChange={handelchange}
				/>
				<br></br>
				<br></br>
				<label className="label">LAST NAME</label>
				<br></br>
				<input
					name="lastName"
					type="text"
					placeholder=""
					className="login_username"
					onChange={handelchange}
				/>
				<br></br>
				<br></br>
				<label className="label">EMAIL</label>
				<br></br>
				<input
					name="email"
					type="text"
					placeholder=""
					className="login_username"
					onChange={handelchange}
				/>
				<br></br>
				<br></br>
				<label className="label">PASSWORD</label>
				<br></br>
				<input
					name="password"
					type="password"
					placeholder=""
					className="login_username"
					onChange={handelchange}
					width="800%"
				/>
				<br></br>
				<br></br>
				<label className="label">PHONE NO.</label>
				<br></br>
				<input
					name="mobile"
					type="number"
					placeholder=""
					className="login_username"
					onChange={handelchange}
				/>
				<br></br>
				<br></br>
				<button
					id="signbtn"
					onClick={() => {
						navigate("/");
					}}
				>
					Log IN
				</button>
			</form>
			<br></br>
		</div>
	);
};
