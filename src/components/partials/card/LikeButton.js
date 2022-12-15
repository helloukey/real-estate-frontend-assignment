// assets
import heartFilledIcon from "../../../assets/heart-filled.svg";
import heartBorderIcon from "../../../assets/heart-border.svg";

const LikeButton = () => {
  return (
    <label className="swap swap-flip absolute right-4 btn btn-sm btn-error btn-circle btn-ghost">
      <input type="checkbox" />
      <div className="swap-on">
        <img src={heartFilledIcon} alt="heart-filled" className="w-6 h-6" />
      </div>
      <div className="swap-off">
        <img src={heartBorderIcon} alt="heart-border" className="w-6 h-6" />
      </div>
    </label>
  );
};
export default LikeButton;
