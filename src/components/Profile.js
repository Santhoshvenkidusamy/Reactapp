const Profile = ({data}) =>{
    const datatosend='santhishcccc'
const handleClick =()=>{
    data(datatosend);
}
    return(
        <>
        <div>My Profile</div>
        <button onClick={handleClick}>Button</button>
        </>
    )
}
export default Profile;
