import "./Signin.css"
import { useState } from "react";
import { authentication } from "../../firebase/fbconfig";
import { signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit=(e)=>
    {
        e.preventDefault();
        signInWithEmailAndPassword(authentication,email,password)
        .then((cred)=>
        {

          console.log(cred.user);
             if(cred.user.emailVerified)
             {
               console.log(cred)
               
               window.location="/Home";
             }
             else{
               alert("Email not verified\ncheck your email to get verified");
              sendEmailVerification(cred.user).then(()=>
              {
                console.log("Email sent!");
              })

             }
             



        }).catch((error)=>
        {
          console.log(error.message);
            if(error.message==="Firebase: Error (auth/wrong-password).")
            {
              alert("Wrong Password!")
            }
            else if(error.message==="Firebase: Error (auth/user-not-found).")
            {
              alert("Email not Registered!")
            }
        })
    };


  return (
    <div className="signup">
        
        <div className="innercontainer">
        <h2>Sign in</h2>
       <form className="formstyle" onSubmit={handlesubmit}>
       
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
          Login
        </button>
     
    </form>
    </div>
    
    </div>
  )
}