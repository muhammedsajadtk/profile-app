import React from "react";
import styled from "styled-components";

const CustomInput = ({ value, setValue, ...props }) => {
	const handleWheel = (e) => {
		if (props.item.type === "number") {
			e.target.blur();
		}
	};

	let key = props.item.key;

	const handleChange = (e) => {
		setValue((prev) => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	return (
		<InputContainer>
			<Label>{props.item.label}</Label>
			<Input
				onWheel={handleWheel}
				placeholder={props.item.label}
				type={props.item.type}
				value={value[props.item.key]}
				onChange={handleChange}
			/>
		</InputContainer>
	);
};

export default CustomInput;

const InputContainer = styled.div`
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	padding: 0 13px;
	border: 1px solid #cccccc;
	border-radius: 8px;
	transition: border-color 0.3s;
	height: 40px;
	font-size: 15px;
	font-family: "PTSans-Regular";

	&:focus {
		border-color: #007bff;
	}

	&::placeholder {
		color: #767b85;
		font-family: "PTSans-Regular";
	}
`;

const Label = styled.label`
	position: absolute;
	top: -10px;
	left: 10px;
	color: #1c1e26;
	font-family: "PTSans-Bold";
	font-size: 13px;
	background-color: #fff;
	padding: 0 5px;
	transition: top 0.3s, font-size 0.3s;
`;
