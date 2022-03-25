import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

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

const Placeholder = styled.img `
  width: 320px;
  height: 320px;
  margin: 200px;
  opacity: 50%;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
              ))}  
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>See More</IngredientsText>
          <CompleteRecipe onClick={() => setShow("")}>Close</CompleteRecipe>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
        <CompleteRecipe onClick={() => window.open(recipeObj.url)}>Complete Recipe</CompleteRecipe>
      </RecipeContainer>
    </>
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
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src='/recipe-icon.svg' />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
