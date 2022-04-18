import { Link } from "react-router-dom";

const NavBadgeIcon = ({ linkTo, iconclassName, badgeCount }) => {
  return (
    <li>
      <Link to={`${linkTo}`} className="site-link">
        <div className="badge iconic-pills ">
          {/* <i className={`badge-icon ${iconclassName}`}></i> */}
            <span className="badge-icon icon-btn">
              <i className={`${iconclassName}`}></i>
            </span> 
          <p class="badge-text top right ">{badgeCount}</p>  
        </div>
      </Link>
    </li>
  );
};

const NavIcon = ({ linkTo, iconclassName}) => {
  return (
    <li>
      <Link to={`${linkTo}`}>
        <div className="badge iconic-pills ">
          {/* <i className={`badge-icon ${iconclassName}`}></i> */}
            <span className="badge-icon icon-btn">
              <i className={`${iconclassName}`}></i>
            </span> 
          {/* <p class="badge-text top right">{badgeCount}</p>   */}
        </div>
      </Link>
    </li>
  );
};

export {NavBadgeIcon, NavIcon};