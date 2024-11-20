import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Looking to crush your fitness goals? Join our top workout sessions designed to boost your stamina, burn calories, and strengthen your core. These high-energy classes combine cardio, strength training, and recovery techniques to give you a complete workout experience. Get ready to push your limits and unlock a healthier, stronger you!

        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
       
        <div className="bootcamps">
          <div>
            <h4>HIIT Power Hour</h4>
            <p>
            A 60-minute high-intensity interval training session focused on burning fat and building endurance. Perfect for all fitness levels!
            </p>
          </div>
          <div>
            <h4>Strength & Sculpt</h4>
            <p>
            Tone your body and improve muscle definition with our expert-led weight-training bootcamp.

            </p>
          </div>
          <div>
            <h4>Cardio Blitz</h4>
            <p>
            Rev up your heart rate and burn major calories with our fast-paced cardio routines.
            </p>
          </div>
          <div>
            <h4>Yoga Flow Fusion</h4>
            <p>
            Relax, stretch, and build flexibility while working on your mind-body connection. A perfect blend of yoga and meditation.
            </p>
          </div>
          <div>
            <h4>Core Crusher</h4>
            <p>Build a rock-solid core with targeted exercises designed to strengthen your abs, back, and overall stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
