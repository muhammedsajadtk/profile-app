import React from "react";
import styled from "styled-components";
import SecondaryNavbar from "./SecondaryNavbar";

function TopNavbar() {
	return (
		<MainContainer>
			<Container>
				<LeftContainer>
					<Left>
						<BackButton>
							<Arrow>{"<"}</Arrow>
						</BackButton>
						<SearchContainer>
							<SearchDiv>
								<SearchIcon
									src={
										require("./../../../assets/icons/search.svg")
											.default
									}
									alt="icon"
								/>
							</SearchDiv>
							<SearchInput placeholder="Search" />
						</SearchContainer>
					</Left>
					<Right>
						<InformationDiv>
							<Icon
								src={
									require("./../../../assets/icons/clock.svg")
										.default
								}
								alt="icon"
							/>
							<Text>Recent</Text>
						</InformationDiv>
						<InformationDiv>
							<Icon
								src={
									require("./../../../assets/icons/question.svg")
										.default
								}
								alt="icon"
							/>
							<Text>Support</Text>
						</InformationDiv>
						<InformationDiv>
							<Icon
								src={
									require("./../../../assets/icons/notification.svg")
										.default
								}
								alt="icon"
							/>
							<Text>Notifications</Text>
						</InformationDiv>
					</Right>
				</LeftContainer>
				<RightContainer>
					<ShortNameDiv>
						<ShortName>JD</ShortName>
						<GreenRound />
					</ShortNameDiv>
				</RightContainer>
			</Container>
		</MainContainer>
	);
}

export default TopNavbar;

const MainContainer = styled.div`
	height: 64px;
	min-width: calc(100vw - 248px);
	border-bottom: 1px solid #cccccc;

	@media all and (max-width: 640px) {
		min-width: calc(100vw - 64px);
	}
`;
const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const LeftContainer = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.div`
	display: flex;
	align-items: center;
`;
const BackButton = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #cccccc;
	cursor: pointer;
`;
const Arrow = styled.span`
	color: #1c1e26;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
	background: #f6f6f5;
	border-radius: 8px;
	padding-left: 10px;
	width: 248px;
	border: 1px solid #ededed;

	@media all and (max-width: 680px) {
		display: none;
	}
`;
const SearchDiv = styled.div`
	height: 18px;
	width: 18px;
`;
const SearchIcon = styled.img`
	height: 100%;
	width: 100%;
`;
const SearchInput = styled.input`
	margin-left: 10px;
	width: 100%;
	height: 32px;
	color: #1c1e26;
	font-size: 14px;

	&::placeholder {
		color: #767b85;
	}
`;
const Right = styled.div`
	display: flex;
	align-items: center;
`;
const InformationDiv = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
	cursor: pointer;

	&:last-child {
		margin-right: 0px;
	}

	&:first-child {
		margin-left: 10px;
	}
`;
const Icon = styled.img`
	margin-right: 3px;
	height: 20px;
	width: 20px;
`;
const Text = styled.h4`
	color: #1c1e26;
	font-size: 14px;
	font-family: "PTSans-Regular";
	@media all and (max-width: 1024px) {
		display: none;
	}
`;
const RightContainer = styled.div``;
const ShortNameDiv = styled.div`
	background: #f5e755;
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	position: relative;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const ShortName = styled.h4`
	color: #000000;
	font-family: "PTSans-Bold";
	font-size: 18px;
`;
const GreenRound = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: #5ed46a;
	border: 3px solid #fff;
	position: absolute;
	right: -5px;
	bottom: -5px;
`;
