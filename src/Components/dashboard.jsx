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
           <div className="container">
             <div className="wrap_code">
           </div>

             <div className="row m-2">
               <div  className="col-6 border bg-danger ">
                <h5 className="fontWht">Pending Enrollments
                 <span  style={{float:'right',color:'lightblue'}}>20</span>
                  </h5> 
               </div>
               <div className="col-6 border bg-danger ">
                 <h5 className="fontWht">Dropouts
                 <span style={{float:'right',color:'lightblue'}}>10</span>

                 </h5>

               </div>
             </div>
             <br/>
             <br/>
            

             
             
  <table class="table table-striped table-info opc">
  <thead>
    <tr>
      <th scope="col">RM Code</th>
      <th scope="col">Name</th>
      <th scope="col">RR Yesterday</th>
      <th scope="col"> Attendence Status</th>
      <th scope="col"> Morning Status</th>
      <th scope="col">  Evening Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rahul</td>
      <td>Test1</td>
      <td>Present</td>
      <td>Done</td>
      <td>Done</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Amit</td>
      <td>Test1</td>
      <td>Absent</td>
      <td>Done</td>
      <td>Done</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Sunil</td>
      <td>Test1</td>
      <td>Present</td>
      <td>Done</td>
      <td>Done</td>
    </tr>
  </tbody>
</table>
             </div>
             
          );
    }
}
 
export default Dashboard;