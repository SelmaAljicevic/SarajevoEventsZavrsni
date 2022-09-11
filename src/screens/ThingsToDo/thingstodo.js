import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Sports from "../Sports/sports";
import Shopping from "../Shopping/shopping";
import Parks from "../Parks/parks";
import Cinema from "../Cinema/cinema";
import Theatre from "../Theatre/theatre";
import History from "../History/history";

const Thingstodo = () => {
  const [chosenOption] = useState(0);
  return (
    <div>
      <NavBar />
      <div className="thingstodo-wrapper">
        <div className="left">
          {/* <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(0)}
          >
            SPORT
          </a>
          <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(1)}
          >
            SHOPPING
          </a>
          <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(2)}
          >
            PARKS
          </a>
          <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(3)}
          >
            CINEMA
          </a>
          <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(4)}
          >
            THEATRE
          </a>
          <a
            href=""
            className="cursor-pointer"
            onClick={() => setChosenOption(5)}
          >
            HISTORY
          </a> */}
        </div>
        <div className="right">
          {chosenOption === 0 && <Sports />}
          {chosenOption === 1 && <Shopping />}
          {chosenOption === 2 && <Parks />}
          {chosenOption === 3 && <Cinema />}
          {chosenOption === 4 && <Theatre />}
          {chosenOption === 5 && <History />}
        </div>
      </div>
    </div>
  );
};

export default Thingstodo;
