import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner level");
  const [salary, setSalary] = useState(0);
  const editorRef = useRef(null)
  const quillRef = useRef(null)

    useEffect(()=>{
        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current,{
                theme:'snow',
            })
        }
    },[])


  return (
    <form>
      <div>
        <p>Job Title</p>
        <input type="text"
        placeholder="Type here"
        onChange={e => setTitle(e.target.value)}
        value={title}
        required/>
      </div>
      <div>
        <p>Job Description</p>
        <div ref={editorRef}>

        </div>
      </div>
      <div>
        <div>
            <p>Job Category</p>
            <select onChange={e => setCategory(e.target.value)}>
                {
                    JobCategories.map((category,index)=>(
                        <option value={category} key={index}>{category}</option>
                    ))
                }

            </select>
        </div>
      </div>
    </form>
  );
};

export default AddJob;
