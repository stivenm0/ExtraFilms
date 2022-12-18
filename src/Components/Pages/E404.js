import React, {useEffect} from 'react'

function E404() {

  const back= ()=>{
    window.history.back();
   }

   useEffect(() => {
    document.title = 'Not Found';
  }, [])


  return (
  <>
  <button type="button" className="close position-absolute rounded-pill px-3" onClick={back}  >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
    <main className='E404'></main>
    
    </>
  )
}

export default E404