import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  background-color: #888;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  height: 50px;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
const AppIcon = styled.img `
  width: 50px;
  height: 50px;
  margin: 15px;
`;
const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 20%;
`;

const SearchInput = styled.input `
  border: none;
  outline: none;
  width: 100%;
  margin-left: 15px;
  font-size: 16px;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='/recipe-icon.svg'/>Find Food Recipe</AppNameComponent>
        <SearchComponent>
          <img src="/search-icon.svg" alt="" />
          <SearchInput placeholder='Search Food'/>
        </SearchComponent>
      </Header>
    </Container>
  );
}

export default App;
