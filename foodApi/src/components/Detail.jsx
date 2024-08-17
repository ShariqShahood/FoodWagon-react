
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import RatingStars from 'react-rating-stars-component';
import Spinner from './Spinner';
import EndLoader from './EndLoader';

const Cards = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 9;

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
      setRecipes((prevRecipes) => [...prevRecipes, ...response.data.recipes]); 
      setHasMore(response.data.recipes.length > 0); 
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data: ", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]);

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading && currentPage === 1) return <center>
<div className='load'>
<Spinner/>
</div>
</center>;

  return (
    <div className="container">
      <h1 className="heading3D text-center my-5">Recipe Detail</h1>
      <center><InfiniteScroll
        dataLength={recipes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner/>}
        endMessage={<h4 style={{ textAlign: 'center' }}><b>You have seen it all!<EndLoader/></b></h4>}
        className="infinite-scroll-component__outerdiv" 
      >
        <div className="row">
          {recipes.map((recipe) => (
<center>
    <div className='detailCard'>
  <div className="row g-0 my-5">
    <div className="col-md-4">
      <img src={recipe.image} className="img-fluid rounded-start" style={{borderRadius: '20px'}}/>
      <h1 className="recipeName"><b>{recipe.name}</b></h1>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text" style={{backgroundColor:'rgb(255, 187, 0)',borderRadius:'5px', fontFamily:'cursive'}}><b>Ingredients</b></p>
        {recipe.ingredients}<br/><br />
        <p className="card-text" style={{backgroundColor:'rgb(255, 187, 0)',borderRadius:'5px',fontFamily:'cursive'}}><b>Instructions</b></p>
        {recipe.instructions}<br/><br/><hr />
        <ol className="star-list d-flex gap-4" style={{fontWeight: 'bold', backgroundColor:'lightgray'}}>
            <li>Prepration Time : {recipe.prepTimeMinutes}min</li>
            <li>Cook Time : {recipe.cookTimeMinutes}min</li>
            <li>Serving : {recipe.servings} Person</li>
            <li>Difficulty : {recipe.difficulty}</li>
            <li>Cuisine : {recipe.cuisine}</li>
            <li>Calories : {recipe.caloriesPerServing}</li>
        </ol>
        <hr />
        <ol className="tags-list d-flex gap-4" style={{fontWeight: 'bold'}}>
            <li>Tags : {recipe.tags}</li>
            <li>Meal Type : {recipe.mealType}</li>
        </ol><hr />
        <center>
            <p><b>Review Count</b></p>
        </center>
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={recipe.reviewCount} aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped bg-warning" style={{width: `${recipe.reviewCount}%`}}>{recipe.reviewCount}</div>
</div>
<hr />
        <div className='rating'>
        <RatingStars
                      count={5}
                      value={recipe.rating}
                      size={24}
                      activeColor="#ffd700"
                      isHalf
                      edit={false} 
                    /></div>
        <p className="card-text"><small className="text-body-secondary">Rating</small></p>
      </div>


    </div>
  </div></div>
  </center>
          ))}
        </div>
      </InfiniteScroll></center>
    </div>
  );
};

export default Cards;
