import { Link } from "react-router-dom";

const NavBadgeIcon = ({ linkTo, iconclassName, badgeCount }) => {
  return (
      <Link to={`${linkTo}`} className="no-link">
        <div className="badge ">
            <span className="badge-icon icon-btn">
              <i className={`${iconclassName}`}></i>
            </span> 
          <p class="badge-text top right ">{badgeCount}</p>  
        </div>
      </Link>
  );
};

const NavIcon = ({ linkTo, iconclassName}) => {
  return (
      <Link to={`${linkTo}`}>
        <div className="badge ">
            <span className="badge-icon icon-btn">
              <i className={`${iconclassName}`}></i>
            </span> 
        </div>
      </Link>
  );
};

export {NavBadgeIcon, NavIcon};