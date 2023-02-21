import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App (){

    
    return(
        <div className="App">
        <TwitterFollowCard userName={"TitoKazooie"}>
            TitoKazooie
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing userName={"midudev"}>
            Miguel Ángel Durán
        </TwitterFollowCard>
        </div>
        
    )
}