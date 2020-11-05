import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:{
        fName:"",
        lName:"",
        email:"",
      }
    };

  }

  handleChange = (event) => {
    this.setState({ value:{
        ...this.state.value,
        [event.target.name]: event.target.value 
    }});
    console.log(event.target.value,'event');
    // this.setState({ fName: event.target.value });
    // this.setState({ lName: event.target.value });
    // this.setState({ email: event.target.value });
  }
  render() {
    // console.log(this.state.value.fName,'asasasas'); 
    // let {name}= this.state.value;
    // console.log(name,'name');
    
    let content = '';
    if (Object.keys(this.state.value).filter(el => this.state.value[el] !== "").length > 0){
      content =
        <ul>
          <li>First Name : {this.state.value.fName}</li>
          <li>Last Name : {this.state.value.lName}</li>
          <li>Email Id : {this.state.value.email}</li>
        </ul>
    } else {
      content = <h4><b>Please Type Your Name...</b></h4>
    }
    return (
      <div className="form">
        <div className="form-container">
          First Name:
          <input type="text" name='fName' onChange={this.handleChange} placeholder="First Name..." />
          Last Name:
          <input type="text" name='lName' onChange={this.handleChange} placeholder="Last Name..." /> 
          Email Id:
          <input type="text" name='email' onChange={this.handleChange} placeholder="Email Id..." /> 
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  }
}
export default Form;