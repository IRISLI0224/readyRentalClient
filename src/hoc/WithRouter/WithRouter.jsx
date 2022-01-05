import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function WithRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ params, location, navigate }} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouter;
