import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import {getStorage,ref,uploadBytesResumable,getDownloadURL}  from "firebase/storage";

import {getFirestore,collection,addDoc,doc,getDoc,deleteDoc,setDoc}  from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyBDYcyQpvkUM2xZ0CUHxA9UyOIyd0wHMUk",
//   authDomain: "firestoreadmin-c8882.firebaseapp.com",
//   projectId: "firestoreadmin-c8882",
//   storageBucket: "firestoreadmin-c8882.appspot.com",
//   messagingSenderId: "1096097075158",
//   appId: "1:1096097075158:web:e1f73141f6cfd02cbf9e77"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDrNSgYIrUcaBcgjGpcLXr90PcbMoSh3as",
  authDomain: "specialite-199f0.firebaseapp.com",
   databaseURL: "https://specialite-199f0-default-rtdb.firebaseio.com",
  projectId: "specialite-199f0",
  storageBucket: "specialite-199f0.appspot.com",
  messagingSenderId: "1020440603577",
  appId: "1:1020440603577:web:5a5b73f66ea6563062e468",
  measurementId: "G-W3YY5S9KPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);
//fetching docs
export const db=getFirestore(app);
//rest
export const restref=collection(db,'Resturaunts');
//forms
export const formRef=collection(db,'Forms');
//




//add forms
 export  function addForms( id, Name,Address,Zipcode,State,PName,Pcontact,Remail,Rcontact,Seats,Start,End,Takeaway,Bank)
 {
   //set formreference
   const setFormRef=doc(db,"Forms",id);
   

  setDoc(setFormRef,{

    name: Name,
    address: Address,
    zipcode: Zipcode,
    state:State,
    person:PName,
    pContact:Pcontact,
    restMail:Remail,
    restContact: Rcontact,
    seats: Seats,
    start:Start ,  
    end:End,
    takeaway:Takeaway,
    bank: Bank

   }).then(()=>
   {
     alert("Successfully added!")
   }).catch((error)=>
   {
     console.log(error.message);
   })
 }

 //set images in forms

 export function setImagesForm(Formid,imagename,imageurl)
 {
  //set imageinformreference
  console.log(imageurl);
  const setimageformref=doc(db,"Forms",Formid,"Images",imagename);
  setDoc(setimageformref,
    {
      imageUrl: imageurl

    }).then(()=>
    {
      console.log("successfully added!");
    }).catch(err=>
      {
        console.log(err.message);
      });

 }

 //set dishes in form

 export function setDishesforms(Formid,Name,Category,Average,Description,imageurl)
 {
       //set formreference
       const setDishesref=collection(db,"Forms",Formid,"dishes");
   

   addDoc(setDishesref,{
 
     name:Name,
     category:Category,
     averageprice:Average,
     description:Description,
     imageUrl:imageurl
 
    }).then(()=>
    {
      console.log("added!");
    }).catch((error)=>
    {
      console.log(error.message);
    })

 }

 


 //delete rest
export function deleteRest(id)
{
 const restDocRef=doc(db,'Resturaunts',id);
 deleteDoc(restDocRef).then(()=>
 {
   console.log("added!");
 }).catch((error)=>
 {
   console.log(error.message);
 })
}

//Stroage
export const storage =getStorage(app);











// export const db=getDatabase(app);
// export  function writeRestData(ResturauntId, Name, Category,Address,Phonenumber ,imageUrl,Description)
// {
//   set(ref(db, 'Resturaunt/' + ResturauntId), {
//     id:ResturauntId,
//     name: Name,
//     category: Category,
//     address: Address,
//     phonenumber: Phonenumber,
//     profile_picture : imageUrl,
//     description : Description
//   }).then(()=>
//   {
//     console.log("successfully added!")
//   }).catch((err)=>
//   {
//     console.log(err);
//   });

// }




