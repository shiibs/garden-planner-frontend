import { Link } from "react-router-dom";
import vegetableGrid from "../../assets/feature/vegetable.png";
import calendar from "../../assets/feature/schedule.png";
import emailNotification from "../../assets/feature/notification.png";
import dashboard from "../../assets/feature/dashboard.png";

export default function Features() {
  return (
    <div className="mt-40">
      <h2 className="text-center mb-10 text-2xl font-bold text-gray-800">
        Why Garden Planner?
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[80%] mx-auto justify-center ">
        <div className="feature-box">
          <div className="flex gap-5">
            <img
              src={vegetableGrid}
              alt="Smart Garden Layouts Icon"
              className="h-16 w-16"
            />
            <div className="feature">
              <h3>Smart Garden Layouts</h3>
              <p>
                Automated layouts designed to maximize space and plant
                compatibility.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-box">
          <div className="flex gap-5">
            <img
              src={calendar}
              alt="Custom Schedules Icon"
              className="h-16 w-16"
            />
            <div className="feature">
              <h3>Custom Schedules</h3>
              <p>
                Tailored planting and care schedules for continuous harvests.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-box">
          <div className="flex gap-5">
            <img
              src={emailNotification}
              alt="Notifications & Reminders Icon"
              className="h-16 w-16"
            />
            <div className="feature">
              <h3>Notifications & Reminders</h3>
              <p>Never miss a task with timely reminders.</p>
            </div>
          </div>
        </div>
        <div className="feature-box">
          <div className="flex gap-5">
            <img
              src={dashboard}
              alt="Easy Garden Management Icon"
              className="h-16 w-16"
            />
            <div className="feature">
              <h3>Easy Garden Management</h3>
              <p>Track and manage all your gardening tasks in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2 className="font-bold text-center text-2xl py-6 text-gray-800 ">
        Key Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 gap-5 mx-4 text-gray-500 pb-10">
        <div className="feature">
          <h3>Interactive garden planner</h3>
          <p>
            Design your garden layout effortlessly and visualize your garden
            beds with precision.
          </p>
        </div>

        <div className="feature">
          <h3>Plant Selection</h3>
          <p>
            Explore a vast database of vegetables and herbs. Select your
            favorite plants with optimal number of plants per square foot, along
            with weekly yield projections.
          </p>
        </div>
        <div className="feature">
          <h3>Personalized Gardening Schedule</h3>
          <p>
            Receive personalized gardening schedules tailored to your
            preferences. Prepare your garden beds with our step-by-step guide.
          </p>
        </div>

        <div className="feature">
          <h3>Garden Care Schedule</h3>
          <p>
            Receive timely reminders for fertilization, pest inspections,
            pruning, and more, tailored to your garden's needs.
          </p>
        </div>

        <div className="feature">
          <h3>Automatic calendar integration</h3>
          <p>
            Sync your gardening schedule with your calendar to receive reminders
            on your preferred devices.
          </p>
        </div>

        <div className="feature">
          <h3>Replant schedule</h3>
          <p>
            Optimize your garden's productivity with a replant schedule that
            ensures a steady supply of fresh produce throughout the year.
          </p>
        </div>
      </div> */
}
