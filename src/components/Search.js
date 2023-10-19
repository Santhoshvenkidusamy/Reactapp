import { useEffect, useState } from "react";
import { appLogo } from "./constants";
import { useNavigate } from "react-router-dom";
import SearchCarosuel from "./SearchCarousal";

const Search = () =>{
    const [value,setValue] = useState('');
    const [suggestions,setSuggestions] = useState([]);
    const [data,setData] = useState([]);
    useEffect(()=>{
      getRestaurants();
    },[])
    useEffect(() => {
        const getSuggestions = async () => {
          const data = await fetch(
            `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.061436790959643&lng=80.24084452539682&trackingId=undefined&str=${value}`
          );
          const json = await data.json();
          console.log(json);
           setSuggestions(
            json?.data?.suggestions.filter((sug) => sug.type === "RESTAURANT")
          );
        };
    
        const debounce = setTimeout(() => {
          getSuggestions();
        }, 500);
    
        return () => {
          clearTimeout(debounce);
        };
      }, [value]);

      const navigate = useNavigate();
      const getRestInfo = (metaData) => {
        console.log(metaData);
        const data = JSON.parse(metaData);
        const id = data?.data?.primaryRestaurantId;
      
        navigate(`/restaurant/${id}`);
        console.log(id);
      };

      const getRestaurants = async () => {
        const data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0614369&lng=80.2408444&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
    
        json.data.cards.map((items) => {
          if(items.card.card.id === "whats_on_your_mind"){
            setData(items?.card?.card?.gridElements?.infoWithStyle?.info)
          }
        })
      }
    return (
        <div className="w-[80%] mx-auto mt-10">
            <div>
            <input 
            className="p-3 w-[100%] outline-none border rounded"
               onChange={(e)=>setValue(e.target.value)}
               value={value}
               placeholder="Search For Restraunts"
            />
            </div>
            <div>
            {suggestions ?
                suggestions.map((suggestions,index)=>(
               <div key={index}
                className='cursor-pointer flex ml-4 my-4'
                onClick={()=>{
                    if(suggestions?.tagToDisplay === 'Restaurant'){
                        getRestInfo(suggestions?.metadata);
                    }
                }}>
                    <div>
                <img
                  className="w-16 h-16 rounded-lg"
                  src={`${appLogo}/${suggestions?.cloudinaryId}`}
                  alt={suggestions?.text}
                />
              </div>
              <div className="flex flex-col justify-center px-5">
                <div
                  style={{ color: "#282C3F" }}
                  className="text-sm font-medium"
                >
                  {suggestions.text}
                </div>
                <div style={{ color: "#7E808C" }} className="text-sm">
                  {suggestions.type}
                </div>
              </div>
            </div>
                ))
        :(
//         <div className="flex flex-row mt-4">
//           {data?.map((item)=>(
//                   <div className='cursor-pointer' key={item?.id} onClick={()=>setValue(item?.action?.text)} >
//                <img className="" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+ item?.imageId} alt="food" />
//              </div>
//           ))
// }
//         </div>
            <SearchCarosuel data={data} setValue={setValue} />
        )}
        </div>
        </div>
    )
}
export default Search;