import "./SignUp.css"
import { useState } from "react";
import { authentication } from "../../firebase/fbconfig";
import { createUserWithEmailAndPassword,GoogleAuthProvider,updateProfile,signInWithPopup,sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit=(e)=>
    {
        e.preventDefault();
        createUserWithEmailAndPassword(authentication,email,password)
        .then((cred)=>
        {
            console.log(cred.user);
            sendEmailVerification(cred.user).then(()=>
            {
              alert("Verify Your email and then Login!");
            }).then((err)=>
            {
              console.log(err);
            })
            updateProfile(cred.user, {
              displayName: firstName+" "+lastName
            }).then(() => {
              console.log("profile updated")
              // ...
            }).catch((error) => {
            console.log(error)

          });
             



        }).catch((error)=>
        {
          if(error.message==="Firebase: Error (auth/email-already-in-use).")
          {
            alert("Email Already in use!");
          }
        })
    };

    const gmailsignup=(e)=>
    {
      e.preventDefault();
      const provider=new GoogleAuthProvider();
      signInWithPopup(authentication,provider).then((result)=>
      {
        window.location='/Home';
      }).catch((error)=>
      {
        console.log(error);
      })
      


    }

  return (
    <div className="signup">
        
        <div className="innercontainer">
        <h2>Sign Up</h2>
       <form className="formstyle" onSubmit={handlesubmit}>
           
       <input  placeholder="First Name"  required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}/>
       <input id="outlined-basic" placeholder="Last Name" variant="outlined"  required
        value={lastName}
        onChange={e => setLastName(e.target.value)}/>
       

      
       
      <input placeholder="Email Name"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
     <input placeholder="Password"
        required
        type={password}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      
        <button type="submit">
          Signup
        </button>
        <button onClick={gmailsignup}>Continue with gmail</button>
        <h3>OR</h3>
        <h3><Link to={`/signin`}>Go to Login</Link></h3>
       
        
     
    </form>
    </div>
    
    </div>
  )
}
