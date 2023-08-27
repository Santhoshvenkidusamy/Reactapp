import RestrauntCard from '../components/RestrauntCard';
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
  const Body = () =>{

    useEffect(() => {
        // API call
        getRestaurants();
      }, []);
    
      const  getRestaurants = async() => {
        const data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0614369&lng=80.2408444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        json.data.cards.map((items)=>{
          if(items.card.card.id === 'top_brands_for_you'){
            setRestraunt(items?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunt(items?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          }
        })
      }
    const [search, setSearch] = useState('')
    const [restraunt, setRestraunt] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    console.log(filteredRestraunt);
    const Filters = (e) =>{
        setSearch(e.target.value);
        if(e.target.value){
            const filters = restraunt?.filter((restaurant) =>
            restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase())
            );
            // console.log('if statement');
            return setFilteredRestraunt(filters);
        }
        else{
            // console.log('hi');
            setFilteredRestraunt(restraunt);
        }
    }
    return (
        (restraunt?.length===0?(<Shimmer />):
       ( <>
          <div className='m-4 mt-32'>
            <input 
            className='justify-center'
            placeholder='Search' 
            value={search} 
            type='text'
            onChange={(e)=>Filters(e)}
             />
        {/* <button onClick={Filters}>
            Submit
            </button> */}
            </div>
            {(filteredRestraunt?.length === 0)?(<div>No results</div>):
      (<div className='flex flex-wrap h-52'>{filteredRestraunt?.map((restraunt)=>{
        return (
          <div className='m-2'>
        <Link to={'/restraunt/'+restraunt?.info?.id}>
        <RestrauntCard {...restraunt?.info} key={restraunt?.info?.id}/>
        </Link>
        </div>
        )
    })}
    </div>)}
    </>
       ))
    )
  }

  export default Body