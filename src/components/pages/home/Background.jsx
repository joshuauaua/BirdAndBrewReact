import './Background.css'

export default function Background(){

  return(

    <div className="background">
      <video 
      autoPlay
      loop
      muted
      playsInline
      poster="../src/assets/restaurant.webp"
      >
        <source src="../src/assets/restaurant.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      <img
        className="background"
        src="../src/assets/restaurant.webp"
        alt="restaurant"
      />

    </div>
  )
}