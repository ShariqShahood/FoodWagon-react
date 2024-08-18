import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import RatingStars from 'react-rating-stars-component';
const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
                setRecipe(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) return <div className='load'><Spinner /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <center>
                <div className='main my-5'>
                    <div className='recipe-img'>
                        <img src={recipe.image} style={{ width: '100%', height: '450px', borderRadius: '20px' }} />
                    </div>
                    <center><h1>{recipe.name}</h1></center>

                    <div class="container px-4 text-center">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3">
                                    <h3>Ingredients</h3>
                                    <p>{recipe.ingredients}</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <h3>Instructions</h3>
                                    <p>{recipe.instructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Prepration Time</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.prepTimeMinutes} min</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Cook Time</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.cookTimeMinutes} min</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Serving</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.servings} Person</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Difficulty</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.difficulty}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Prepration Time</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.prepTimeMinutes} min</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Cuisine</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.cuisine}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Calories per Serving</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.caloriesPerServing} gm</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Prepration Time</div>
                            </div>
                            <span class="badge text-bg-warning rounded-pill">{recipe.prepTimeMinutes}min</span>
                        </li>
                    </ol>

                    <div class="container overflow-hidden text-center">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3">
                                    <center><h4>Tags</h4>
                                        <p>{recipe.tags}</p></center>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <button type="button" class="btn btn-secondary position-relative">
                                        Review Count
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                            {recipe.reviewCount}
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>







                    <h4>Rating</h4>
                    <div className='rating'>
                        <RatingStars
                            count={5}
                            value={recipe.rating}
                            size={24}
                            activeColor="#ffd700"
                            isHalf
                            edit={false}
                        /></div>

                </div>

            </center>
        </>

    )
}

export default RecipeDetail
