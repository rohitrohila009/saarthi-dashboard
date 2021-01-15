import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/dashboard.css';
class Dashboard  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div className="container backgImg">
             <div className="row">
               <div className="col-6 border bg-danger">
                 Pending Enrollments
                 <span  style={{float:'right'}}>20</span>
               </div>
               <div className="col-6 border bg-danger">
                 Dropouts
                 <span style={{float:'right'}}>10</span>

               </div>
             </div>
             <br/>
             <br/>
            

             <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                 RM Code
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                Name
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                RR Yesterday
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                Attendence Status
               </div> <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                Morning Status
               </div> <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-primary">
                Evening Status
               </div>
              
             </div>
             <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
                 001
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
               Test
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
                Test1
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
                Present
               </div> <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
                Done
               </div> <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 border bg-light">
                Done
               </div>
               </div>
           </div>
          );
    }
}
 
export default Dashboard;