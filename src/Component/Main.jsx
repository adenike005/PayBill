import React from "react";
import "../Styled/Main.css";
import main from "/main.png";
import easy from "/easy.png";
import cus from "/cus.png";
import Bill from "/Bill.png";
import Group from "/Group.png";
import phone from "/phone.png";
import user1 from "/user1.png";
import phone2 from "/phone2.png";
import Group2 from "/Group2.png";
import Sectiondimg from "/sectiondimg.png";

const Main = () => {
  return (
    <div className="section-main">
      <div className="main-content">
        <div className="text-content">
          <span>WHY PAYBILLS</span>
          <h2>Every Bills Payment you need to make in One App</h2>
        </div>
        <div className="main-image">
          <img src={main} alt="Main" />
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <img src={easy} alt="Easy" />
        </div>
        <div className="card">
          <img src={cus} alt="Customer Support" />
        </div>
        <div className="card">
          <img src={Bill} alt="Bill Payment" />
        </div>
      </div>

      <div className="feature-words">
        <h2>Earn Financial Freedom</h2>
        <h5>
          Give your customers the financial ease they seek. Use our
          technological services to grant your <br />
          customers' Sure and Safe Transactions.
        </h5>
      </div>
      <div className="feature-section">
        <img src={Group} alt="" />
      </div>

      <div className="download-section">
        <h1>Download The App</h1>

        <div class="grid-container">
          <div class="image-item">
            <img src={user1} alt="" />
          </div>
          <div class="text-item">
            <div className="text-item-text">
              <div className="text-item-texts">
                <h3>Data and Airtime top-up.</h3>
                <h6>
                  Never get stranded or leave a loved one stranded . <br />{" "}
                  Top-up airtime and data for yourself and loved ones.
                </h6>
              </div>
              <div className="text-item-button">
                <h5>Sign up now</h5>
              </div>
            </div>
            <div className="text-item-img">
              <img src={phone} alt="" />
            </div>
          </div>
        </div>

        <div class="grid-container">
          <div class="text-items">
            <h3>Payments made easy.</h3>
            <h6>
              Send and receive money whenever, wherever, and however you <br />{" "}
              want, without stress to your friends and families using Paybills{" "}
              <br /> anywhere in the world.{" "}
            </h6>
          </div>

          <div class="image-item">
            <img src={phone2} alt="" className="phone2" />
          </div>
        </div>

        <div className="airtel-section">
          <img src={Group2} alt="Description" />
          <div className="overlay-text">
            <h2>
              Fund your Account, Make <br />
              Transfer and Pay Bills
            </h2>
            <h6>Fast bill payment like never before with lesss charges</h6>

            <div className="buttons">
              <span>Sign up now</span>
            </div>
          </div>
        </div>

        <div className="sectiond">
          <div className="sectiond-text">
            <h3>
              Your Security, Our <br />
              Commitment: Ensuring <br />
              Your Money Stays Safe
            </h3>
            <h5>
              Paybills wants to provide transactions in the safest manner <br />
              possible. Implementing and developing cutting edge <br /> security
              processes to protect your data, we are regulated <br /> by NDIC so
              your money is safe at all time.
            </h5>
          </div>
          <img src={Sectiondimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
