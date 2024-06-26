import React from "react";
import Tron from "../../assets/tron.svg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Emaill from "../../assets/createForm/email.svg";
import Passwordd from "../../assets/createForm/password.svg";
import Professionn from "../../assets/createForm/profession.svg";
import Usernamee from "../../assets/createForm/username.svg;"

const CreateForm = ({handleShowForm}) => {
  return (
    <>
      <div className="formDivOuter">
        <div className="innerFormDiv">
          <div
            style={{
              width: "96%",
              marginTop: "5px",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <RxCross2 onClick={() => handleShowForm(false)}/>
          </div>
          <div className="createNewAccountDiv">Create New Account</div>
          <form className="createForm">
            <div>
              <label className="createFormLabel">Email</label>
              <div className="firstInputDiv">
                <img src={Emaill} alt="" />
                <input className="firstInputOfCreate" type="email" required />
              </div>
            </div>
            <div>
              <label className="createFormLabel">Username</label>
              <div className="firstInputDiv">
                <img src={Usernamee} alt="" />
                <input className="firstInputOfCreate" type="text" required />
              </div>
            </div>
            <div>
              <label className="createFormLabel">Profession</label>
              <div className="firstInputDiv">
                <img src={Professionn} alt="" />
                <input className="firstInputOfCreate" type="text" required />
              </div>
            </div>
            <div>
              <label className="createFormLabel">Password</label>
              <div className="firstInputDiv">
                <img src={Passwordd} alt="" />
                <input className="firstInputOfCreate" type="password" required />
              </div>
            </div>
            <div>
              <label className="createFormLabel">Confirm Password</label>
              <div className="firstInputDiv">
                <img src={Passwordd} alt="" />
                <input
                  className="firstInputOfCreate"
                  type="password"
                  required
                />
              </div>
            </div>

            <button className="betButton continueButton">Continue</button>
          </form>
          <p style={{height:"20px",color:"#FFFFFF",marginTop:"-10px"}}>Already have an account? <Link style={{color:"#EB7D2D"}}>Log In</Link></p>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
