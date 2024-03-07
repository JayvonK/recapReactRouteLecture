import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const JacoozziPageComponent = () => {

    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
    }
    
  return (
    <div className='d-flex justify-content-end'>
      <h1>This is Jacoozzi's Page :3</h1>
      <Button variant="danger" onClick={handlePageChange}>Danger</Button>
    </div>
  )
}

export default JacoozziPageComponent
