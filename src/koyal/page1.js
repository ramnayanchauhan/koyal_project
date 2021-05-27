import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
const Page1 = () => {
return (
<div className="container">
  <Header />
{/* <div className="header row"><h3>Cyzplamovir</h3></div> */}
<div className="row">
<img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6NAqzcG-e9-Rc5XcP7D7HwHaEK%26pid%3DApi&f=1" style={{width:"1244px", height:"340px"}} />
</div>
 
<div className="row"><h1>Get Back To Living</h1></div> 

<div className="row"><p>Cyzplamovir shhould be availableto everyonewho needs it. Can't afford it? Enroll here to see if we can help</p></div>
<div className="row">
<div className="col-sm-8 row">

<div className="mt-2 col-sm-6"> <input type="text" placeholder="First name" className="form-control" /></div>
<div className="mt-2 col-sm-6"><input type="text" placeholder="Last name" className="form-control" /></div>
<div className="mt-2 col-sm-12"> <input type="text" placeholder="Address 1" className="form-control" /></div>
<div className="mt-2 col-sm-12"> <input type="text" placeholder="Address 2" className="form-control" /></div>
<div className="mt-2 col-sm-4"><input type="text" placeholder="City"  className="form-control" /></div>
<div className="mt-2 col-sm-4"> 
<select className="form-control">
   <option value="0">State</option>     
</select></div>
<div className="mt-2 col-sm-4"><input type="text" placeholder="Zipcode"  className="form-control" /></div>
<div className="mt-2 col-sm-12"><input type="text" placeholder="Email"  className="form-control" /></div>
</div>

<div className="col-sm-4 row">
  <div className="mt-2 col-sm-6"></div>

 <div className="mt-2 col-sm-8"></div><div className="mt-2 col-sm-6"><i className="fa fa-lock" style={{fontSize:'24px',padding:"20px"}}></i><button >Enroll</button></div>
 <div className="mt-2 col-sm-6"></div>
 <div className="mt-2 col-sm-8"><p>Questions?<a style={{color:"blue"}}> <u>Talk</u> with us</a></p></div>
</div>
</div> 
</div>
);
};
export default Page1;