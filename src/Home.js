import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="outterhome">
      <div className="home">
        <div className="points " style={{padding:'4%'}}>
          <div className="h2">
            <h2>Tips to reduce EB bill</h2>
          </div>
          <ul>
            <li>
               Switch to LED Bulbs: LED bulbs are energy-efficient and last
              longer than traditional incandescent bulbs. They use significantly
              less electricity for the same amount of light.
            </li>
            <li>
              Unplug Devices: Even when turned off, many devices consume a
              small amount of electricity phantom or standby power. Unplug
              chargers, electronics, and appliances when not in use, or use
              power strips to easily cut off power to multiple devices.
            </li>
            <li>
               Use Power Strips: Power strips with switches make it easy to
              turn off multiple devices at once, preventing them from drawing
              standby power.
            </li>
            <li>
              Adjust Thermostat: Set your thermostat a few degrees lower in
              winter and a few degrees higher in summer. This can save a
              substantial amount of energy without sacrificing comfort.
            </li>
            <li>
              {" "}
               Seal Leaks: Insulate your home properly to prevent drafts and
              leaks, which can lead to energy loss. This will help your heating
              and cooling systems work more efficiently.
            </li>
            <li> Air Dry Clothes: Instead of using a dryer, hang your clothes to
            dry naturally. It not only saves electricity but also helps your
            clothes last longer.</li>
            <li> Use Energy-Efficient Appliances: When purchasing new appliances,
            look for the ENERGY STAR label, which indicates that they meet
            energy efficiency standards set by the Environmental Protection
            Agency.</li>
            <li> Cook Efficiently: Use lids when cooking to retain heat, cook with
            appropriate pot sizes, and consider using a microwave or toaster
            oven for smaller meals as they use less energy than a full-sized
            oven.</li>
            <li> Limit Hot Water Usage: Heating water requires a lot of energy.
            Take shorter showers, fix leaks promptly, and consider using cold
            water for laundry when possible.</li>
            <li> Maximize Natural Light: During the day, open curtains and blinds
            to let in natural light. This reduces the need for artificial
            lighting and can also provide some warmth during colder months.</li>
          </ul>
          <br />
          <span className="span">
            Implementing these practices can make a significant difference in
            reducing your electricity consumption and lowering your energy bills{" "}
          </span>
        </div>

        <div className="bones">
          <h2>Bones Tips</h2>
          <b>
            {" "}
            1. Check the reading meter weekly once and use this{" "}
            {
              <Link to="/Calculator" style={{ textDecoration: "none" }}>
                {" "}
                Calculator
              </Link>
            }{" "}
            for calculating a weekly payable amount it may be very useful to you
            know your eb bill without consulting others...{" "}
          </b>{" "}
          <br />
          <b>
            {" "}
            2. This{" "}
            {
              <Link to="/Chart" style={{ textDecoration: "none" }}>
                {" "}
                Chart
              </Link>
            }{" "}
            is clearly describe the units and its rate this helps you to reduce
            your eb bill. This chart aware you the usage of electricity. With
            the help of this chart you itself know the amount according to the
            units you consumed
          </b>
        </div>
      </div>
    </div>
  );
};

export default Home;
