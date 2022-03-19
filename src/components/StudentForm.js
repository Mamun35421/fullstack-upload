import React, { Component } from 'react'
import axios from 'axios'


class StudentForm extends Component {

    state = {
        studentFieldValues:   {
            id:0,
            name: '',
            age:0,
            department: '',
            gender:''
        }
    }

       
    handleInputChange = (e) => {
       const {name,value}=e.target;
       const studentFieldValue = this.state.studentFieldValues;
       studentFieldValue[name]=value;
      
       this.setState({studentFieldValue})
    }

    handleSubmitStudent = (e) => {
        e.preventDefault()
        console.log(this.state.studentFieldValues)
        axios.post("http://localhost:60671/api/Students",this.studentFieldValues).then(result=>{
            console.log(result)
        alert(result.data)
            })
    }

    render() {
        const {studentFieldValues}=this.state;
        return (
            <div className="container">
            <div className="row">
            <form onSubmit={this.handleSubmitStudent} autoComplete="off">
                <div>
                <input type="text" name="name" placeholder="Enter your  name" onChange={this.handleInputChange} value={studentFieldValues.name} /><br />
                <input type="number" name="age" placeholder="Enter your mother  age" onChange={this.handleInputChange} value={this.state.studentFieldValues.age}/> 
                </div>
               <div>
            <select  name="Department"  onChange={this.handleInputChange} value={studentFieldValues.department} >
            <option >Department</option>
            <option>CSE</option>
            <option>SWE</option>
            <option>BBA</option>
           </select>
           </div>
           <div onChange={this.handleInputChange} value={this.state.studentFieldValues.gender}>
                     <p>Please select your gender:</p>
                     <input type="radio"  name="male" value="male"/>
                     <label for="html">male</label><br />

                        <input type="radio"  name="female" value="female"/>
                        <label for="css">female</label><br />

                        <input type="radio"  name="other" value="other"/>
                        <label for="css">other</label><br />
           </div>
              
                <button type="submit">Submit</button>
              
            </form>
               
              </div>
            </div>
         
        )
    }
}

export default StudentForm