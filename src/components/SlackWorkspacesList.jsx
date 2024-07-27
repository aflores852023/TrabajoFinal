import React from 'react'
import SlackWorkspaces from './SlackWorkspaces'
const SlackWorkspacesList = ({ workspaces }) => {
 
    return (
    <div>
            {
            workspaces.map((workspace) => {
                return (
                    <SlackWorkspaces key={workspace.id} workspace={workspace} />
                )       
            })
    }
    </div>
  )
}

export default SlackWorkspacesList