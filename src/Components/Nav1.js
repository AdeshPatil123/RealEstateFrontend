import React from "react";
import { Outlet, Link } from "react-router-dom";
import Modal from "react-modal";
import "./styles/form.css";
import axios from "axios";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Nav1 extends React.Component{
  constructor(){
    super();
    this.state={
      loginModalIsOpen: false,
      signUpModalIsOpen: false,
      isLoggedIn: false,
      loggedInUser: undefined,
      username:'',
      password:'',
      Name:'',
      loginError: undefined,
      signUpError: undefined,
      signUpsuccessfull:undefined,
      user: undefined,
    }
  }

    componentDidMount(){
      
    }
    handleLogin = ()=>{
      this.setState({loginModalIsOpen:true})
    }
    loginHandler = ()=>{
      const {username , password} = this.state;
      console.log(username)
      console.log(password)
      const req = {
        Email:username,
        Password:password
      }
  
      axios({
        method: 'POST',
        url: `https://real-estate-node-code.vercel.app/login`,
        headers: { 'Content-Type': 'application/json' },
        data: req
    }).then(result =>  {
        const user = result.data.user;
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        this.setState({
            user: user,
            isLoggedIn: true,
            loginError: undefined,
            loginModalIsOpen: false
        });
    }).catch(err => {
        this.setState({
            isLoggedIn: false,
            loginError: "Username or password is wrong"
        })
    }); 

    const handleLogout = ()=> {
      this.setState({isLoggedIn:false,loggedInUser:undefined,loginModalIsOpen:false});
      localStorage.clear();
      // googleLogout(); 
    }


    }
    handleCancel =()=>{
      this.setState({loginModalIsOpen:false})
    }
    handleSignUp = ()=>{
      this.setState({signUpModalIsOpen:true})
    }
    handleCancel1 = ()=>{
      this.setState({signUpModalIsOpen:false})
    }
    Gohome = ()=>{
      this.props.history.push('/');
      console.log('logo')
    }

    handleChange = (e, field) => {
      const val = e.target.value;
      this.setState({
          [field]: val,
          loginError: undefined,
          signUpError: undefined
      })
  }

    signupHandler = ()=>{
      const {username , password , Name} = this.state;
      console.log(username)
      console.log(password)
      console.log(Name);
  
      const req = {
        Name:Name,
        Email:username,
        Password:password
      }
  
      axios({
        method: 'POST',
        url: `https://real-estate-node-code.vercel.app/signup`,
        headers: { 'Content-Type': 'application/json' },
        data: req
    }).then(result =>  {
        const user = result.data.user;
        console.log(user)
        const message = result.data.message;
        console.log(message)
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        this.setState({
            user: user,
            isLoggedIn: true,
            signUpError: undefined,
            signUpModalIsOpen: false,
            signUpsuccessfull:message,
        });
        console.log(user)
    }).catch((err) => {
        this.setState({
            isLoggedIn: false,
            signUpError: "Error Signing up"
        })
        // console.log(response.data.message)
    });
  
    }

    render(){
      const { loginModalIsOpen, isLoggedIn, loggedInUser,signUpModalIsOpen,username,password,Name,loginError, signUpError, user,signUpsuccessfull} = this.state;
      console.log(user)
        return(
            <>
                  
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="container">
          <a className="navbar-brand" href="#" onClick={this.Gohome}>
            <img src="./Assets/logo.png" className="logo2" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#popular">Popular</a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/agent">Agent</Link>
              </li>


              {!isLoggedIn?
                <li className="nav-item d-flex" >
                <a className="nav-link btn btn-outline-primary  px-3 rounded-1" href="#" style={{"marginLeft":"3px"}} onClick={this.handleLogin}>Login</a>
                <a className="nav-link btn btn-outline-secondary px-3 rounded-1" href="#" style={{"marginLeft":"3px"}} onClick={this.handleSignUp}>SignUp</a>
              </li>

            
              :
             
             <li className="nav-item d-flex">
                <a className="nav-link btn btn-outline-primary  px-3 rounded-1" href="#" style={{"marginLeft":"3px"}} onClick={this.handleLogin}>{user.email}</a>
                <a className="nav-link btn btn-outline-secondary  px-3 rounded-1" href="#" style={{"marginLeft":"3px"}} onClick={()=>{this.setState({isLoggedIn:false,loggedInUser:undefined,loginModalIsOpen:false});
      localStorage.clear();}}>Logout</a>
              </li>

             

             
              }
              
              
            </ul>

           
          </div>
        </div>
        <Modal isOpen={loginModalIsOpen} style={customStyles}>
            <div className="bxcont">
              <div className="heading">
                <h2>Login</h2>
                <a className="xbtn" onClick={this.handleCancel}>
                  x
                </a>
              </div>
              <form className="mt-4">
                        { loginError ? <div className="alert alert-danger text-center my-3">{loginError}</div> : null }
                        <input className="form-control" type="email" placeholder="Email" required value={username} onChange={(e) => this.handleChange(e, 'username')} />
                        <input className="form-control my-3" type="password" placeholder="Password" required value={password} onChange={(e) => this.handleChange(e, 'password')}/>
                        <div className="text-center">
                            <input type="button" className="btn btn-primary m-2" onClick={this.loginHandler} value="Login" />
                            <button className="btn" onClick={this.cancelLoginHanlder}>Cancel</button>
                        </div>
                        
                    </form>
            </div>
          </Modal>

          <Modal isOpen={signUpModalIsOpen} style={customStyles}>
          <div className="bxcont">
              <div className="heading">
                <h2>SignUp</h2>
              
                <a className="xbtn" onClick={this.handleCancel1}>
                  x
                </a>
              </div>
              <form>
              { signUpError ? <div className="alert alert-danger text-center my-3">{signUpError}</div> : null }

                        <input className="form-control" type="email" placeholder="Email"  value={username} onChange={(e) => this.handleChange(e, 'username')} required/>
                        <input className="form-control my-3" type="password" placeholder="Password" value={password} onChange={(e) => this.handleChange(e, 'password')} required/>
                        <input className="form-control my-3" type="text" placeholder="Name" value={Name} onChange={(e) => this.handleChange(e, 'Name')}  required/>
                        
                        <div className="text-center">
                            <input type="submit" className="btn btn-primary m-2" onClick={this.signupHandler} value="Signup" />
                            <button className="btn" onClick={this.cancelSignupHanlder}>Cancel</button>
                        </div>
              </form>
                
                  
            </div>
          </Modal>
      </nav>
            </>
        )
    }
}

export default Nav1;