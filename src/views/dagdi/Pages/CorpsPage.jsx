import React from "react";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import CorpsPageCarousel from "views/IndexSections/CorpsPageCarousel";

class CorpsPage extends React.Component{
    render(){
        return(
            <>
           <container fluid style={{ marginTop: "15px" }}>
               <DagdiNavbar/>
               <section className="section section-shaped ">
          <div className="shape shape-style-1 shape-primary">
            <span />
            <span />
            <span />
          </div>
        </section>
           <CorpsPageCarousel/>
            </container>
            <container>


            </container>
            </>
        );
    }
}
export default CorpsPage;