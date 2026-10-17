import React, { useState } from 'react'
import Modal from './Modal'


const ModelTest = ({}) => {

    const [showModal, setShowModal] = useState(false)

    function handleModalPopup(){
        setShowModal(!showModal)
    }

  return (
    <div>
      <button onClick={handleModalPopup}>Open Modal</button>
      {
        showModal && <Modal footer={<h1 className='text-xl'>Happy Birthday To You</h1>} main={<div>This is custom body</div>}
        onClose={()=> (setShowModal(false))}/>
      }
    </div>
  )
}

export default ModelTest
