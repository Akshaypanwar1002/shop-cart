import React from 'react'

const Contact = () => {
  return (
    
      <div style={{ width: '40vw',top:'17%',left:'30%',position:'absolute' }}>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
         
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
           
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
             
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="address"
              placeholder="Address"
           
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <textarea
              name="message"
              placeholder="Message"
            
              style={{ width: '100%', padding: '10px', marginBottom: '10px', minHeight: '100px' }}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{ backgroundColor: '#ffdf40', color: '#000', padding: '15px 20px', border: 'none', cursor: 'pointer', width: '100%' }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
  )
}

export default Contact