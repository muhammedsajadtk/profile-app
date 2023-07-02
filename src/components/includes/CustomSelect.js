import React from "react";
import styled from "styled-components";
import Arrow from "./../../assets/icons/select-arrow.svg";

const CustomSelect = ({ value, setValue, ...props }) => {
	let key = props.item.key;

	const handleChange = (e) => {
		setValue((prev) => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	return (
		<SelectContainer>
			<Select
				onChange={handleChange}
				value={value[props.item.key]}
				className={value[props.item.key] === "" ? "" : "selected"}
			>
				<option value="">{props.item.label}</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option3">Option 3</option>
			</Select>
			<ArrowIcon open={true} src={Arrow} alt="icon" />
		</SelectContainer>
	);
};

export default CustomSelect;

const SelectContainer = styled.div`
	position: relative;
	height: 40px;
`;

const Select = styled.select`
	height: 40px;
	width: 100%;
	padding: 10px;
	border: 1px solid #cccccc;
	border-radius: 8px;
	appearance: none;
	background-color: transparent;
	cursor: pointer;
	color: #767b85;
	font-size: 15px;
	font-family: "PTSans-Regular";

	&.selected {
		color: #000;
	}

	&::placeholder {
		color: #767b85;
		font-family: "PTSans-Regular";
	}
`;

const ArrowIcon = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 20px;
	height: 20px;
	/* position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	
	border-top: 2px solid #000000;
	border-right: 2px solid #000000;
	transition: transform 0.3s ease-in-out;
	pointer-events: none;
	transform-origin: center;
	${({ open }) => open && "transform: translateY(-50%) rotate(180deg);"} */
`;
