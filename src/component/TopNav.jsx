import './css/TopNav.css'
import './JavaScript/TopNav'
const TopNav = () => {
  return (
    <>
      <nav className="cba-nav-container">
        <div className="cba-nav-side-menu-toggle-icon-loading-pagename">
          <div
            className="cba-nav-side-menu-toggle-icon"
            onClick="togglesideMenuIcon()"
          >
            {/*  <!-- menu toggle first icon --> */}
            <i
              className="t-icon-open bx bx-menu-alt-right"
              id="sideMenuIcon"
            ></i>
            {/*  <!-- menu toggle second icon --> */}
            {/*     <!-- <i className='t-icon-close bx bx-menu-alt-left' id="sideMenuIcon"></i> --> */}
            {/*   <!--todo: one of the toggle icon should be commented--> */}
          </div>
          <div className="cba-nav-loading-pagename">
            <h3>Loading Page Name</h3>
          </div>
        </div>
        <div className="cba-nav-features-user-logo-name">
          <div className="cba-nav-features">
            <div className="cba-nav-close-counter" title="Close Counter">
              <img
                src="/public/TopNavImg/img/cash-register.png"
                alt="cash-register-img"
              />
              <h3>Close register</h3>
            </div>
            <div
              className="cba-nav-keyboard-shortcut"
              title="Keyboard Shortcut"
            >
              <img
                src="/public/TopNavImg/img/computer-keyboard.png"
                alt="keyboard-img"
              />
            </div>
            <div
              className="cba-nav-ltr-rtl-switch"
              title="Change side bar position"
              onClick="toggleText()"
            >
              <h3 id="text">LTR</h3>
            </div>
            <div className="cba-nav-lang-switch" onClick="toggleImage()">
              <img
                src="/public/TopNavImg/img/united-states.png"
                title="English"
                alt="united-state-flag"
                id="image"
              />
            </div>
            <div
              className="cba-nav-fullscreen-switch"
              title="Fullscreen"
              onClick="toggleFullscreen()"
            >
              {/*   <!-- fullscreen first icon --> */}
              <i
                className="fullscreen-icon bx bx-fullscreen"
                id="fullScreenIcon"
              ></i>
              {/*   <!-- fullscreen second icon --> */}
              {/*  <!-- <i className='exit-fullscreen-icon bx bx-exit-fullscreen' id="fullScreenIcon"></i> --> */}
              {/*  <!--todo: one of the toggle icon should be commented--> */}
            </div>
          </div>
          <div className="cba-nav-user-logo-name" onClick="openModal()">
            <div className="cba-nav-user-logo">
              <img src="/public/TopNavImg/img/User.png" alt="user-img" />
            </div>
            <div className="cba-nav-user-name">
              <div className="cba-nav-user-name">
                <h3>MD Adnan Addro</h3>
              </div>
              <div className="cba-nav-user-role">
                <h4>Admin</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
{/*       <div className="cba-nav-user-modal-container" id="user-modal">
      <div className="cba-nav-user-modal">
          <div className="cnum-top-part">
            <img src="/public/TopNavImg/img/User.png" alt="user-img" />
            <h3>MD Adnan Addro</h3>
            <h5>mdadnanaddro@gmail.com</h5>
          </div>
          <div className="cnum-middle-part">
            <h3>Manage Your Account</h3>
            <h3>Cache Clear</h3>
          </div>
          <div className="cnum-bottom-part">
            <button className="cba-nav-modal-sign-out-btn">Sign Out</button>
            <button className="cba-nav-modal-close-btn" onClick="closeModal()">
              Close
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TopNav;
