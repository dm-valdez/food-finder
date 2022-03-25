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

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='/recipe-icon.svg' />Find Food Recipe</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder='Search Food' />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="/recipe-icon.svg" alt="" />
          <RecipeName>Eggs</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <CompleteRecipe>Complete Recipe</CompleteRecipe>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
