import React from 'react'

const Loader = () => {
  return (
  
  <div className='container mt-5'>
    <div className='row text-center'>
    <div className='col-md-12'>
        <div className='d-flex align-items-center justify-content-center'>
             <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> 

<span className='ms-2'>Loading...</span>
        </div>
    </div>
    </div>
  </div>

  )
}

export default Loader