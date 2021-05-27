import React from 'react';
import Header from './header';
const Page2 = () => {
    return (
<div className="container">
  <Header />
 
<div className="row"><h1>We'll be in touch! </h1></div> 

<div className="row"><p>An agent will contactyou at the address provided to collect further information.</p></div>
<div className="row">
<div className="col-sm-4 row">
 <div className="mt-1 col-sm-3"><p style={{color:"blue"}}>clinical <u>trial</u>information </p></div>
 <div className="mt-1 col-sm-3"><p style={{color:"blue"}}>Doctor's  <u>info</u> pamphiet</p></div>
 <div className="mt-1 col-sm-3"><p style={{color:"blue"}}>Legal  <u>disclosure</u> information</p></div>
</div>

<div className="col-sm-8 row">
<div className="row">
<img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6NAqzcG-e9-Rc5XcP7D7HwHaEK%26pid%3DApi&f=1" style={{width:"740px", height:"340px"}} />
</div>
</div>
</div> 
</div>
    );
}
export default Page2;