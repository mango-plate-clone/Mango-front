import { useState } from "react";
import { ReactComponent as FilledStar } from "../../assets/icon/listicon/star_vector.svg";
import { ReactComponent as UnfilledStar } from "../../assets/icon/listicon/ic_starscore.svg";
const Stars = ({ setStar }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const array = [0, 1, 2, 3, 4];

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  setStar(clicked.filter(Boolean).length);
  return (
    <>
      {array.map(el =>
        clicked[el] ? (
          <FilledStar
            width={"32px"}
            height={"32px"}
            key={el}
            onClick={() => handleStarClick(el)}
          />
        ) : (
          <UnfilledStar
            width={"32px"}
            height={"32px"}
            key={el}
            onClick={() => handleStarClick(el)}
          />
        ),
      )}
    </>
  );
};
export default Stars;
