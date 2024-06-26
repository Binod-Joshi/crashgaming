import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";

const ChatsMybets = () => {
    const [selected, setSelected] = useState("chats");

    const handleChoosenOne = (data) => {
        setSelected(data);
    }
  return (
    <div className='mylowerDiv'>
      <div className='chooseDiv'>
        <p className={selected === "chats" ? "clickedone" : "notClicked"} onClick={(e) => handleChoosenOne("chats")}>Chats</p>
        <p className={selected === "mybets" ? "clickedone" : "notClicked"} onClick={(e) => handleChoosenOne("mybets")}>My Bets</p>
        <p className={selected === "leaderboard" ? "clickedone" : "notClicked"} onClick={(e) => handleChoosenOne("leaderboard")}>Leaderboard</p>
      </div>
      <div style={{paddingLeft:"10px"}}>
        <p>
            <span style={{color:"#ffffff"}}>01:29 </span>
            <span style={{color:"#EB7D2D"}}>Lucky_2901: </span>
            <span style={{color:"white"}}>Deentlo evaru sampaadincharu</span>
        </p>
        <div style={{display:"flex",alignItems:"center"}}>
            <input type="text" name="" id="" className='firstInput'  style={{width:"95%",height:"35px",marginBottom:"5px"}}/>
            <span className='sendFromLowerDiv'><IoIosSend/></span>
        </div>
      </div>
    </div>
  )
}

export default ChatsMybets
