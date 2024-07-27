import React , { useState } from 'react'
import  { workspaces }  from '../data/data' // src\data\data.js
import SlackWorkspacesList from '../components/SlackWorkspacesList' // src\components\SlackWorkspacesList.jsx
import { useGlobalContextWorkspaces } from '../Context/GlobalContext'


const Home = () => {
  const GlobalContextWorkspacesValues = useGlobalContextWorkspaces()
    console.log(GlobalContextWorkspacesValues)
  const [workspace, setWorkspace] = useState(workspaces[0])

return (
<>
<div>Welcome Clone Slack aplication</div>
<div> selected Workspace </div>
    <SlackWorkspacesList workspaces={workspaces}/>  
    

</> 
    
    
      )
}

export default Home