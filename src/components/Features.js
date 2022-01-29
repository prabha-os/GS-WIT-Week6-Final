import {Routes ,Route, Layout, Outlet} from 'react-router-dom';

function Features() {
  return (
    <div className="Features">
      <h1>Features</h1>
      <Outlet />
    </div>
  );
}

export default Features;