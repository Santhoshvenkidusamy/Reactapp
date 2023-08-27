const Shimmer = () =>{
    return(
<div className="restaurant-list">
    {Array(10).fill('').map((e, index)=>{
return <div key={index} className="shimmer"></div>
    })}
</div>
    )
}
export default Shimmer;