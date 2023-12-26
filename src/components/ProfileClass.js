import { Component } from "react";
class ProfileClass extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                login:'dummy',
                avatar_url:'dummy',
            }
        }
       
    }

    async componentDidMount() {
        const data = await fetch('https://corsproxy.io/?https://api.github.com/users/Santhoshvenkidusamy')
        const json = await data.json()
       
        this.setState({userInfo:json});
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }
    render(){
        
        return(
        <>
            <div>{this?.state?.userInfo?.login}</div>
            <img src={this?.state?.userInfo?.avatar_url} />
            </>
        )
    }
    

}
export default ProfileClass;