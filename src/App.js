import "./App.css";
import styled from "styled-components";
import PrimaryNavbar from "./components/screens/navbar/PrimaryNavbar";
import SecondaryNavbar from "./components/screens/navbar/SecondaryNavbar";
import Profile from "./components/screens/profile/Profile";
import TopNavbar from "./components/screens/navbar/TopNavbar";

function App() {
	return (
		<MainContainer>
			<PrimaryNavbar />
			<SecondaryDiv>
				<SecondaryNavbar />
			</SecondaryDiv>
			<BodyContainer>
				<TopNavbar />
				<Profile />
			</BodyContainer>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	display: flex;
`;

const BodyContainer = styled.div``;
const SecondaryDiv = styled.div`
	@media all and (max-width: 640px) {
		display: none;
	}
`;
