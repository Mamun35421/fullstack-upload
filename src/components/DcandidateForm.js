import React, { Component } from 'react'
import axios from 'axios'

class DcandidateForm extends Component {

    state = {
        initialFieldValues:   {
            id:0,
            fullName: null,
            mobile: '',
            email: '',
            age:null,
            bloodGroup: '',
            
            address: ''
        }
    }

       
   

    


    handleSubmit = (e) => {
        e.preventDefault()
      
        var obj ={
            address: "Brahmmanbaria,Nabinghar,Shibpur",
            age: 33,
            bloodGroup: "A+",
            email: "mamunorrashid.me@gmail.com",
            fullName: "Mamun Or Rashid",
            id: 0,
            mobile: "01910764889",

           
         }
     
        axios("http://localhost:60671/api/DCandidate", {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            data: obj,
          })
    }

    render() {
        const {initialFieldValues}=this.state;
        return (
            
   




<div onSubmit={this.handleSubmit} autoComplete="off" class="container-fluid">
    <div class="row">
        <h1>Hello</h1>
        <div class="col-md-12 offset-md-12">
            <div class="information-form">
                <form action="" class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Upload  Your information</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                           
                            <input type="text" name="fullName" class="form-control" placeholder="Enter Full Name" onChange={this.handleInputChange} value={initialFieldValues.fullName}/>
                        </div>

                        <div class="mb-3 col-md-6">
                            
                            <input type="text" name="mobile" class="form-control" placeholder="Enter mobile number" onChange={this.handleInputChange} value={initialFieldValues.mobile}/>
                        </div>

                        <div class="mb-3 col-md-6">
                            
                            <input type="age" name="age" class="form-control" placeholder="Enter your age" onChange={this.handleInputChange} value={initialFieldValues.age}/>
                        </div>
                        <div class="mb-3 col-md-6">
                           
                            <input type="email" name="email" class="form-control" placeholder="Enter your email" onChange={this.handleInputChange} value={initialFieldValues.email}/>
                        </div>
                        <div class="mb-3 col-md-6">
                           
                            <input type="address" name="address" class="form-control" placeholder="Enter your address" onChange={this.handleInputChange} value={initialFieldValues.address}/>
                        </div>
                        <div class="mb-3 col-md-6">
                           
                       
                      
                        <select  class="form-control" name="bloodGroup"  onChange={this.handleInputChange} value={initialFieldValues.bloodGroup} >
                                    <option >Blood Group</option>
                                    <option>A+</option>
                                    <option>O+</option>
                                    <option>B+</option>
                                  <option>AB+</option>
                                  <option>A-</option>
                                  <option>O-</option>
                                  <option>B-</option>
                                  <option>B-</option>
                               </select>
                        </div>
                        <div class="col-md-4">
                           <button class="btn btn-primary float-end">Reset</button>
                           <button class="btn btn-primary float-start">Submit</button>
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
    





    <div class="card-body mt-5 border p-4 bg-light shadow">
    
    <h4>Student information</h4>
       
        <table class="table table-striped">
         
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>BloodGroup</th>
                </tr>
            </thead>
          
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{initialFieldValues.fullName}</td>
                    <td>{initialFieldValues.age}</td>
                    <td>{initialFieldValues.bloodGroup}</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mamun</td>
                    <td>22</td>
                    <td>a+</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Mamun </td>
                    <td>12</td>
                    <td>a-</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>amir</td>
                    <td>34</td>
                    <td>b+</td>
                </tr>
               
               
               
            </tbody>
         
        </table>
   
    </div>
</div>








             
         
        )
    }
}

export default DcandidateForm