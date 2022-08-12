import React from 'react';
import {useSelector} from "react-redux";
function ProtectedRoute({children}) {
  const { user } = useSelector(state=>state.user);
  
  return (
    <div>
        {user?children:<div className="unauthorized"><h1 className="unauthorized__title">You are not authorized here</h1></div>}
    </div>
  )
}

export default ProtectedRoute;