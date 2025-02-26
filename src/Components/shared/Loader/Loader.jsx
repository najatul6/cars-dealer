import './loading.css'
const Loader = () => {
  return (
    <div className="loader h-screen">
      <div className="loading-text">
        Loading<span className="dot">.</span><span className="dot">.</span
        ><span className="dot">.</span>
      </div>
      <div className="loading-bar-background">
        <div className="loading-bar">
          <div className="white-bars-container">
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Loader