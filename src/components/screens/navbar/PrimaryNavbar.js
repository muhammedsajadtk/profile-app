import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navbarData } from "./../../Constants";

function PrimaryNavbar() {
	return (
		<MainContainer>
			<Container>
				<Top>
					<LogoContainer>
						<H1>
							<LogoLink to="/">
								<LogoImage
									src={
										require("./../../../assets/images/logo.svg")
											.default
									}
									alt="logo"
								/>
							</LogoLink>
						</H1>
					</LogoContainer>
					<NavbarDiv>
						{navbarData.map((item) => (
							<NavbarItem
								key={item.id}
								className={item.selected ? "selected" : ""}
							>
								<NavbarIcon
									className={item.selected ? "selected" : ""}
									key={item.id}
									src={item.image}
									alt="icon"
								/>
							</NavbarItem>
						))}
					</NavbarDiv>
				</Top>
				<Bottom>
					<DownloadItem>
						<DownloadIcon
							src={
								require("./../../../assets/icons/download.svg")
									.default
							}
							alt="icon"
						/>
					</DownloadItem>
				</Bottom>
			</Container>
		</MainContainer>
	);
}

export default PrimaryNavbar;

const MainContainer = styled.div`
	min-height: 100vh;
	width: 64px;
	background-color: #e7ebf3;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;
const Top = styled.div``;
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 32px;
	height: 64px;
`;
const H1 = styled.h1``;
const LogoLink = styled(Link)``;
const LogoImage = styled.img`
	display: block;
	height: 32px;
	width: 32px;
`;
const NavbarDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const NavbarIcon = styled.img`
	display: block;
	height: 24px;
	width: 24px;
	&.selected {
		filter: brightness(0) invert(1);
	}
`;
const NavbarItem = styled.div`
	height: 40px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	border-radius: 10px;
	cursor: pointer;

	&:last-child {
		margin-bottom: 0px;
	}

	&.selected {
		background: #5563f5;
	}

	&:hover {
		background: #5563f5;
		${NavbarIcon} {
			filter: brightness(0) invert(1);
		}
	}
`;
const Bottom = styled.div`
	height: 64px;
	width: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #dde3ee;
`;
const DownloadItem = styled.div`
	height: 40px;
	margin-bottom: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	border-radius: 8px;
	cursor: pointer;
`;
const DownloadIcon = styled.img`
	display: block;
	height: 24px;
	width: 24px;
`;
