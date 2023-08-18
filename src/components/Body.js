
import {restrauntList} from '../components/constants';
import RestrauntCard from '../components/RestrauntCard';
import {useState} from 'react';
  const Body = () =>{
    const [search, setSearch] = useState('')
    const [restraunt, setRestraunt] = useState(restrauntList);
    const Filters = () =>{
        if(search === ''){
            setRestraunt(restrauntList);
        }
        else{
            const filters = restraunt.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase()?.includes(search.toLowerCase())
            );
            return setRestraunt(filters);
        }
    }
    return (
        <>
        <div>
            <input 
            placeholder='Search' 
            value={search} 
            type='text'
            onChange={(e)=>{
                setSearch(e.target.value);
            }}
             />
        <button onClick={Filters}>
            Submit
            </button>
            </div>
            {search}
      <div className="restaurant-list">{restraunt.map((restraunt)=>{
        return <RestrauntCard {...restraunt.data} key={restraunt.data.id}/>
    })}
    </div>
    </>
    )
  }

  export default Body