export default function HowItWorks() {
  return (
    <div className="container max-w-90%] mx-auto">
      <h1 className="text-xl md:text-4xl text-center pt-10 pb-5 font-medium">
        Garden Planner
      </h1>
      <p className="text-center md:text-xl text-base font-light">
        It is a comprehensive home vegetable garden planning tool designed to
        help you maximize your garden's potential. Whether you're a seasoned
        gardener or a beginner, our platform guides you through every step of
        planning, planting, and maintaining your vegetable garden.
      </p>

      <h2 className="text-center pt-4 text-xl">How It Works</h2>
      <ol>
        <li>
          <strong>Create an Account:</strong> Start by signing up or logging in
          to your account.
        </li>
        <li>
          <strong>Select Your Space:</strong> Enter the dimensions of your
          available garden space. This helps the system understand how much area
          you have to work with.
        </li>
        <li>
          <strong>Choose Your Plants:</strong> Browse through our extensive list
          of vegetables and select the ones you want to grow. The system will
          provide you with detailed information on how much produce you can
          expect from each square foot of your garden weekly.
        </li>
        <li>
          <strong>Start Planning:</strong> Pick a start date for your garden,
          and let the system generate a customized layout. The layout is based
          on the optimal arrangement of plants, considering which plants grow
          well together.
        </li>
        <li>
          <strong>Get a Tailored Schedule:</strong> Receive a personalized
          garden schedule, including when to sow seeds, water, apply nutrients,
          and replant for continuous harvests.
        </li>
        <li>
          <strong>Manage Your Garden:</strong> Access your garden schedule
          anytime through the website. Make adjustments as needed, track your
          progress, and monitor the health of your plants.
        </li>
        <li>
          <strong>Stay Notified:</strong> Never miss a task! Get notifications
          two days before each scheduled task and sync your garden calendar with
          your preferred calendar app.
        </li>
      </ol>

      <h2>Why Use Garden Planner?</h2>
      <ul>
        <li>
          <strong>Optimized Layouts:</strong> Ensure your plants thrive with
          layouts designed for companion planting.
        </li>
        <li>
          <strong>Personalized Schedule:</strong> Keep your garden on track with
          tasks tailored to your specific crops and timing.
        </li>
        <li>
          <strong>Continuous Harvest:</strong> Plan for replanting to maintain a
          steady supply of fresh produce.
        </li>
        <li>
          <strong>Easy Management:</strong> Manage your garden’s needs in one
          place, with reminders and updates.
        </li>
      </ul>
    </div>
  );
}
