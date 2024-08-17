import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingStars from 'react-rating-stars-component'; 
import Guide from './Guide';
import im1  from '../assets/img1.png'
import im2  from '../assets/img2.png'
import im3  from '../assets/img3.png'
import i1  from '../assets/1.png'
import i2  from '../assets/2.png'
import i3  from '../assets/3.png'
import i4  from '../assets/4.png'
import i5  from '../assets/5.png'
import i6  from '../assets/6.png'
import i7  from '../assets/7.png'
import i8  from '../assets/8.png'
import i9  from '../assets/9.png'
import i10  from '../assets/10.png'
import i11  from '../assets/11.png'
import i12  from '../assets/12.png'
import i13  from '../assets/13.png'
import i14 from '../assets/14.png'
import i15  from '../assets/15.png'
import i16  from '../assets/16.png'
import i17  from '../assets/17.png'
import i18  from '../assets/18.png'
import i19  from '../assets/19.png'
import i20  from '../assets/20.png'
import Spinner from './Spinner';




const Cards = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
        setRecipes(response.data.recipes); 
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      console.log(`Previous Page: ${currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      console.log(`Next Page: ${currentPage + 1}`);
    }
  };

  if (loading) return <center>
<div className='load'>
<Spinner/>
</div>
  </center>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container">
        <h1 className="heading3D text-center my-5">Recipe List</h1>
        <div className="row">
          {recipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe.id}>
              <div className="card my-5">
                <div className="container-image">
                  <img src={recipe.image} alt="" style={{ width: '100%', borderRadius: '20px' }} />
                </div>
                <div className="content">
                  <div className="detail">
                    <span>{recipe.name}</span>
                    <p>Serving <b>{recipe.servings}</b> Person</p>
                    <RatingStars
                      count={5}
                      value={recipe.rating}
                      size={24}
                      activeColor="#ffd700"
                      isHalf
                      edit={false} 
                    />
                    <button id='cBtn'>Detail</button>
                  </div>
                  <div className="product-image">
                    <div className="box-image">
                      <img src={recipe.image} alt="" style={{ width: '100%', height: '100%', borderRadius: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4 my-5">
          <button onClick={handlePreviousPage} id="hBtn" className='mx-5' disabled={currentPage === 1}>
            Previous
          </button>
          <b><span >Page {currentPage} of {totalPages}</span></b>
          <button onClick={handleNextPage} id="hBtn"  className='mx-5' disabled={currentPage === totalPages}>
            Next
          </button>
        </div><br/><br/>
      </div>
      <Guide/>
      <br /><br />
      <h1 className="heading3D text-center my-2">Our Menu</h1>
      <center>
    <marquee behavior="scroll" direction="right" style={{width:"80%"}}>
        <img className="marquee mx-3 my-5" src={im1} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={im3} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={im2} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i1} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i2} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i3} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i4} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i5} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i6} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i7} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i8} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i9} style={{width:"400px"}}/>
        </marquee>
        </center>
        <center>
    <marquee behavior="scroll" direction="left" style={{width:"80%"}}>
        <img className="marquee mx-3 my-5" src={i10} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i11} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i12} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i13} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i4} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i15} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i16} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i17} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i18} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i19} style={{width:"400px"}}/>
        <img className="marquee mx-3 my-5" src={i20} style={{width:"400px"}}/>
        </marquee>
        </center>
    </>
  );
};

export default Cards;
