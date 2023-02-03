import { React, useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const Upload = () => {
  const [name, setName] = useState("Tau")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted, ${name}`);    
  }

  return (
    <>
    <div className='about center' style={{height: '280vh'}}>
      <h1>
        Upload to<span className='about__name'>{name}.</span>
      </h1>
      <br/><br/><br/>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Name: <input type="text" name="name" /></h3>
        </label>
        <br/><br/>
        <input  className='btn btn--outline' type="file" id="myFile" name="filename"/>
        <br/>
        <button>
          <span type='button' className='btn btn--outline'>
            Submit
          </span>
        </button>

        
      </form>
      
      
    </div>
    <ScrollToTop />
    </>
  )
}

export default Upload;
