import React, { useState } from "react";
import styled from "styled-components";
import CustomInput from "../../includes/CustomInput";
import CustomSelect from "../../includes/CustomSelect";
import { ProfileFormDetails } from "./../../Constants";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/ProfileSlice";

function Profile() {
	const defaultValue = {
		first_name: "",
		middle_name: "",
		last_name: "",
		phone_number: "",
		office_number: "",
		location: "",
		work_type: "",
		deledation_1: "",
		deledation_2: "",
		image: "",
		email: "",
	};

	const [formData, setFormData] = useState(defaultValue);

	const [profilePic, setProfilePic] = useState(null);
	const [profileUrl, setProfileUrl] = useState(null);

	const onImageChange = (e) => {
		e.preventDefault();
		setProfilePic(e.target.files[0]);
		setProfileUrl(URL.createObjectURL(e.target.files[0]));
		setFormData((prev) => ({
			...prev,
			image: URL.createObjectURL(e.target.files[0]),
		}));
	};
	const dispatch = useDispatch();
	const userDetails = useSelector((state) => state.profile.profileData);

	const handleForm = () => {
		const withValue = {};
		Object.entries(formData).forEach(([key, value]) => {
			if (value) {
				withValue[key] = value;
			}
		});
		dispatch(updateProfile(withValue));
	};

	return (
		<MainContainer>
			<Container>
				<Top>
					<PlainBg />
					<ProfileContainer>
						<ProfileLeft>
							<ProfileImage
								src={
									profileUrl
										? profileUrl
										: userDetails.image
										? userDetails.image
										: require("./../../../assets/images/person.jpg")
								}
								alt="image"
							/>
						</ProfileLeft>
						<ProfileRight>
							<Name>
								{userDetails.first_name}{" "}
								{userDetails.middle_name}{" "}
								{userDetails.last_name}
							</Name>
							<Email>{userDetails.email}</Email>
							<EditBox htmlFor="image-file">
								<EditIcon
									src={
										require("./../../../assets/icons/edit.svg")
											.default
									}
									alt="image"
								/>
								<EditText>Change Profile Picture</EditText>
								<input
									type="file"
									id="image-file"
									accept="image/png,image/jpeg,image/jpg"
									style={{ display: "none" }}
									onChange={onImageChange}
									onClick={(e) => {
										e.target.value = null;
									}}
									size={100}
								/>
							</EditBox>
						</ProfileRight>
					</ProfileContainer>
				</Top>
				<Middle>
					{ProfileFormDetails.map((item) =>
						item.type === "select" ? (
							<CustomSelect
								key={item.id}
								item={item}
								value={formData}
								setValue={setFormData}
							/>
						) : (
							<CustomInput
								key={item.id}
								item={item}
								value={formData}
								setValue={setFormData}
							/>
						)
					)}
				</Middle>
				<Bottom>
					<ButtonDiv>
						<CancelButton
							onClick={() => {
								setFormData(defaultValue);
							}}
						>
							Cancel
						</CancelButton>
						<SaveButton
							onClick={() => {
								handleForm();
							}}
						>
							Save
						</SaveButton>
					</ButtonDiv>
				</Bottom>
			</Container>
		</MainContainer>
	);
}

export default Profile;

const MainContainer = styled.div`
	height: calc(100vh - 64px);
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;
const Top = styled.div`
	padding: 0 8px;
`;

const PlainBg = styled.div`
	height: 200px;
	width: 100%;
	background: #f3f5f9;
	border-radius: 0px 0px 8px 8px;
`;
const ProfileContainer = styled.div`
	padding: 0 30px;
	display: flex;
	position: relative;
	margin-bottom: 60px;

	@media all and (max-width: 640px) {
		flex-direction: column;
		margin-bottom: 30px;
	}
`;
const ProfileLeft = styled.div`
	width: 140px;
	margin-right: 20px;
	@media all and (max-width: 640px) {
		margin-bottom: 100px;
	}
`;
const ProfileImage = styled.img`
	height: 140px;
	width: 140px;
	object-fit: cover;
	border-radius: 50%;
	position: absolute;
	top: -45px;
	border: 2px solid #fff;
`;
const ProfileRight = styled.div``;
const Name = styled.h3`
	color: #1c1e26;
	font-size: 24px;
	font-family: "PTSans-Bold";
`;
const Email = styled.h4`
	color: #767b85;
	font-size: 15px;
	font-family: "PTSans-Regular";
	margin-bottom: 5px;
`;
const EditBox = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
const EditIcon = styled.img`
	height: 20px;
	width: 20px;
	margin-right: 5px;
`;
const EditText = styled.span`
	color: #5563f5;
	font-size: 14px;
	font-family: "PTSans-Medium";
`;
const Middle = styled.div`
	padding: 0 30px;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 40px 20px;

	@media all and (max-width: 1024px) {
		width: 100%;
	}

	@media all and (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
	}

	@media all and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;
const Bottom = styled.div`
	padding: 0 32px;
	border-top: 1px solid #ededed;
	margin-top: 30px;
`;
const ButtonDiv = styled.div`
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const CancelButton = styled.div`
	border: 1px solid #1c1e26;
	height: 40px;
	width: max-content;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 16px;
	cursor: pointer;
	color: #1c1e26;
	margin-right: 16px;
`;
const SaveButton = styled.div`
	border: 1px solid #5563f5;
	height: 40px;
	width: max-content;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 16px;
	cursor: pointer;
	background: #5563f5;
	color: #fff;
`;
