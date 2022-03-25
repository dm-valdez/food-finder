import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput
} from './components/HeaderComponent';

import {
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  CompleteRecipe
} from './components/RecipeComponent';


const APP_ID = "b8481ba5";
const APP_KEY = "16c7f9de9ce6dee28a50b50621ab4669";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

const RecipeComponent = (props) => {
  const { recipeObj } = props;
  return (
    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText>Ingredients</IngredientsText>
      <CompleteRecipe onClick={() => window.open(recipeObj.url)}>Complete Recipe</CompleteRecipe>
    </RecipeContainer>
  );
};

function App() {
  const [timeoutId, updateTimoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimoutId(timeout);
  };


  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='/recipe-icon.svg' />Find Food Recipe</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder='Search Food' onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length && recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj={recipeObj.recipe} />
        ))}



      </RecipeListContainer>
    </Container>
  );
}

export default App;
