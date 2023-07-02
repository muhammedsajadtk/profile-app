import React from "react";
import styled from "styled-components";

function SecondaryNavbar() {
	return (
		<MainContainer>
			<Container>
				<Top>
					<Heading>Service desk</Heading>
				</Top>
				<Bottom>
					<SubHeadingDiv className="selected">
						<SubHeading className="selected">Profile</SubHeading>
					</SubHeadingDiv>
					<SubHeadingDiv>
						<SubHeading>Security</SubHeading>
					</SubHeadingDiv>
				</Bottom>
			</Container>
		</MainContainer>
	);
}

export default SecondaryNavbar;

const MainContainer = styled.div`
	min-height: 100vh;
	width: 184px;
	background-color: #fff;
	border-right: 1px solid #cccccc;
`;
const Container = styled.div`
	height: 100%;
`;
const Top = styled.div`
	padding: 16px;
	border-bottom: 1px solid #cccccc;
	height: 64px;
`;
const Heading = styled.h3`
	font-family: "PTSans-Bold";
	font-size: 20px;
	color: #1c1e26;
`;
const Bottom = styled.div``;
const SubHeadingDiv = styled.div`
	padding: 8px 16px;
	cursor: pointer;
	&.selected {
		background: #5563f5;
	}
`;
const SubHeading = styled.h5`
	color: #767b85;
	font-size: 14px;
	&.selected {
		color: #ffffff;
	}
`;
