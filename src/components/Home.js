import {Routes ,Route, Layout, Outlet} from 'react-router-dom';
//outlet is used when we give a nested route to access/render to the child route 
//and it aligns the flow/where the child is rendered of the page according to its placement in  the code

function Home() {
  return (
    <div className="Home p-5">
      <h1>Home</h1>
    </div>
  );
}

export default Home;