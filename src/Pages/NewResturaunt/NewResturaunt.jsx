import { useState,useEffect } from "react"
import "./NewResturaunt.css"
import { addForms, setImagesForm, setDishesforms } from "../../firebase/fbconfig";
import { makeStyles } from "@material-ui/styles";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { db } from "../../firebase/fbconfig";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { set } from "date-fns";
import { collection, getDocs } from "firebase/firestore";
import { storage } from "../../firebase/fbconfig";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { upload } from "@testing-library/user-event/dist/upload";
import { v4 as uuidv4 } from 'uuid';



export default function NewResturaunt() {


  const [formid,setFormid]=useState(1);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [zipcode, setZip] = useState();
  const [state, setState] = useState();
  const [personname, setPname] = useState();
  const [personphone, setPphone] = useState();
  const [Restemail, setRemail] = useState();
  const [restphone, setrestphone] = useState();
  const [seats, setSeats] = useState();
  const [starttime, setstarttime] = useState();
  const [endtime, setendtime] = useState();
  const [takeaway, setTake] = useState(false);
  const [cardnum, setCardnum] = useState();
  const [imagesUrl, setImgURL] = useState([""]);
  const [images, setImages] = useState([]);
  const [dishes, setDishes] = useState([
    { name: '', category: '', avgPrice: null, Description: '',image:null, imageUrl: ''},
  ])
  const [dishimageurl, setDishImageUrl] = useState([""]);

  const [dynamicimage, setdynamicimage] = useState([{ count: 1 }]);

  const [progress, setProgress] = useState();




      const formsref=collection(db,"Forms");

  useEffect(()=>
    {  
      getDocs(formsref).then((snapshot)=>
      {
        snapshot.docs.forEach((doc)=>
        {
          
          snapshot.docs.forEach((doc)=>
        {
          
          setFormid(parseInt(doc.id)+1);
        })
        })
        
      }).catch((error)=>
      {
        console.log(error);
      })
      

    },[]);


  const handleChangeInput = (id, event) => {
    const values = [...dishes];
    values[id][event.target.name] = event.target.value;
    setDishes(values);

  }
  console.log(dishes);

  function handleimage(e) {
    e.preventDefault();
    let pickpic;
    if (e.target.files && e.target.files.length > 0) {
      pickpic = e.target.files[0];
      images.push(pickpic);


    }
  }

  function handledishimage(id, event) {
    event.preventDefault();
    let pickpic;
    const values = [...dishes];
    if (event.target.files && event.target.files.length > 0) {
      pickpic = event.target.files[0];
      values[id][event.target.name]=pickpic;
      setDishes(values);

      // uploadDishFile(pickpic,values,id,event)


    }
  }

  const uploadFiles = (file, count) => {
    //
    if (!file) return;
    const storageref = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageref, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(count);
          setImagesForm(formid.toString(), "Image" + count, downloadURL);
        });
      }
    );
  };
  
  



  const handleAddimage = () => {
    setdynamicimage([...dynamicimage, { count: 1 }]);
  }

  const handleAddFields = () => {
    setDishes([...dishes, { name: '', category: '', avgPrice: null, Description: '', imageUrl: null }])
  }

  const handleRemoveFields = (id) => {
    const values = [...dishes];
    values.splice(values.findIndex(value => value.id === id), 1);
    setDishes(values);
  }





  const PostResturaunt = (e) => {
    e.preventDefault();
    console.log(takeaway);
    let imgnam = 1;
    
    images.map(image => {

      uploadFiles(image, imgnam);
      imgnam++;
    })

    
   
    dishes.map((dish) => {
       
      const storageref = ref(storage, `files/${dish.image.name}`);
      const uploadTask = uploadBytesResumable(storageref, dish.image);
    
       uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
          
        },
        (error) => console.log(error.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
             setDishesforms(formid.toString(), dish.name, dish.category, dish.avgPrice, dish.Description, downloadURL);
          });
        }
      );
    
      
      
      
      
    })


     if(takeaway==="true")
     {
      addForms(formid.toString(),name,address,zipcode,state,personname,personphone,Restemail,restphone,seats,starttime,endtime,true,cardnum);

     }
     else
     {
      addForms(formid.toString(),name,address,zipcode,state,personname,personphone,Restemail,restphone,seats,starttime,endtime,false,cardnum);

     }

        console.log("your form submitted successfully!");
  }


  return (
    <div className="create">
      <h2>Add a New Resturaunt</h2>
      <form id='formcreate' onSubmit={PostResturaunt} >

        <input
          type="text"
          required
          placeholder="Resuraunt Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="ZipCode"
          value={zipcode}
          onChange={(e) => setZip(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Name of contact person"
          value={personname}
          onChange={(e) => setPname(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Phone number of contact person"
          value={personphone}
          onChange={(e) => setPphone(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="Resturaunt Email"
          value={Restemail}
          onChange={(e) => setRemail(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Resturaunt phone number"
          value={restphone}
          onChange={(e) => setrestphone(e.target.value)}
        />

        {/* <input 
          type="text" 
          placeholder="Company name(optional)"
          value={state}
          onChange={(e) => setState(e.target.value)}
        /> 
        <input 
        type="number" 
        
        placeholder="Agency Name (optional)"
        value={state}
        onChange={(e) => setState(e.target.value)}
      /> */}

        <input
          type="number"
          required
          placeholder="number of seats available"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
        <label>Start time</label>
        <input
          type="time"
          required

          value={starttime}
          onChange={(e) => setstarttime(e.target.value)}
        />
        <label>End time</label>
        <input
          type="time"
          required

          value={endtime}
          onChange={(e) => setendtime(e.target.value)}
        />
        <label >Takeaway available</label>

        <label >Yes</label>

        <input type="radio" required className="radiobu" value={true} name="availability" onChange={(e) => setTake(e.target.value)} />
        <label >No</label>
        <input type="radio" required value={false} name="availability" onChange={(e) => setTake(e.target.value)} />

        <input
          type="text"
          required
          placeholder="bank Account number"
          value={cardnum}
          onChange={(e) => setCardnum(e.target.value)}
        />
        {
          dynamicimage.map((image1, index) => (
            <div key={index}>
              <input type="file" name="png" required onChange={handleimage} />
              <button className="buttdesign" onClick={handleAddimage}>Add another image</button>
            </div>
          ))
        }
        <h3> Add a Dish for Registration</h3>
        {

          dishes.map((dish, index) =>
          (
            <div key={index}>
              <p>Add Dish Details</p>
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                value={dish.name}
                onChange={event => handleChangeInput(index, event)}
              />

              <input
                type="text"
                required
                name="category"
                placeholder="Category"
                value={dish.category}
                onChange={event => handleChangeInput(index, event)}
              />
              <input
                type="number"
                required
                name="avgPrice"
                placeholder="Average Price"
                value={dish.avgPrice}
                onChange={event => handleChangeInput(index, event)}
              />
              <input
                type="text"
                required
                name="Description"
                placeholder="Description"
                value={dish.Description}
                onChange={event => handleChangeInput(index, event)}
              />
              <input
                type="file"
                required
                name="image"
                placeholder="imageUrl"
                onChange={event => handledishimage(index, event)}
              />


              <button className="buttdesign" onClick={handleAddFields}>Add another Dish</button>
              <button className="buttdesign" onClick={() => handleRemoveFields(dish.id)}>Remove Dish</button>

            </div>

          ))
        }
        <button className="buttdesign" type="submit">Submit</button>
      </form>

    </div>

  )
}
