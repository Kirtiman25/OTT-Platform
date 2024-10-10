 import React from 'react'
 
 function INDEX() {
   return (
     <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTT Platform</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n  }\n  \n  .navbar {\n    background-color: #2c3e50;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 250px;\n    position: fixed;\n    color: white;\n  }\n  \n  .navbar img {\n    width: 100%;\n    height: auto;\n    margin-bottom: 20px;\n  }\n  \n  .navbar ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .navbar ul li {\n    margin: 20px 0;\n  }\n  \n  .navbar ul li a {\n    color: white;\n    text-decoration: none;\n    font-size: 18px;\n    display: block;\n    padding: 10px;\n    border-radius: 4px;\n  }\n  \n  .navbar ul li a:hover {\n    background-color: #34495e;\n  }\n  \n  section {\n    margin-left: 270px;\n    padding: 20px;\n    margin-top: 20px;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  h1 {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n  \n  form {\n    margin-top: 20px;\n  }\n  \n  input[type="text"], \n  input[type="password"], \n  input[type="email"], \n  textarea, \n  select {\n    width: 100%;\n    padding: 10px;\n    margin: 10px 0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n  \n  button {\n    background-color: #3498db;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  button:hover {\n    background-color: #2980b9;\n  }\n  \n  .filters button {\n    margin-right: 10px;\n    background-color: #e74c3c;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  .filters button:hover {\n    background-color: #c0392b;\n  }\n  \n  #explore-content {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n  }\n  \n  #explore-content .box {\n    flex: 1 1 calc(20% - 20px);\n    background: #ecf0f1;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    text-align: center;\n  }\n  \n  #explore-content .box h3 {\n    margin-top: 10px;\n    color: #2c3e50;\n  }\n  \n  #login {\n    background-color: #ffffff;\n  }\n  \n  #home {\n    background-color: #eaf2f8;\n  }\n  \n  #explore {\n    background-color: #f7f9fc;\n  }\n  \n  #kids-mode {\n    background-color: #e0f7fa;\n  }\n  \n  #subscription {\n    background-color: #fff3e0;\n  }\n  \n  #downloads {\n    background-color: #e8f5e9;\n  }\n  \n  #profile {\n    background-color: #fce4ec;\n  }\n  \n  .profile-content {\n    margin-top: 20px;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    padding: 20px;\n    background-color: white;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  }\n  \n  .profile-content.hidden {\n    display: none;\n  }\n  \n  .profile-content h2 {\n    margin-bottom: 20px;\n  }\n  \n  .profile-content ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  \n  .profile-content ul li {\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n  }\n  \n  .profile-content ul li:last-child {\n    border-bottom: none;\n  }\n  \n  .profile-content ul li a {\n    color: #3498db;\n    text-decoration: none;\n  }\n  \n  .profile-content ul li a:hover {\n    text-decoration: underline;\n  }\n  \n  #supportForm {\n    margin-top: 20px;\n  }\n  \n  #supportForm label {\n    display: block;\n    margin-top: 10px;\n    font-weight: bold;\n  }\n  \n  #supportResponse {\n    margin-top: 20px;\n    color: #27ae60;\n  }\n  \n '
    }}
  />
  {/* Sidebar */}
  <nav className="navbar">
    <img src="logo.png" alt="Logo" /> {/* Example logo */}
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#explore">Explore</a>
      </li>
      <li>
        <a href="#kids-mode">Kids Mode</a>
      </li>
      <li>
        <a href="#subscription">Subscription</a>
      </li>
      <li>
        <a href="#downloads">Downloads</a>
      </li>
      <li>
        <a href="#profile">Profile</a>
      </li>
    </ul>
  </nav>
  {/* Login/Signup Section */}
  <section id="login">
    <h1>Login/Signup</h1>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required="" />
      <br />
      <input type="password" id="password" placeholder="Password" required="" />
      <br />
      <button type="submit">Login</button>
    </form>
    <p>Or login with:</p>
    <button onclick="socialLogin('Google')">Google</button>
    <button onclick="socialLogin('Facebook')">Facebook</button>
    <p>
      Continue as{" "}
      <a href="#" onclick="guestMode()">
        Guest
      </a>
    </p>
  </section>
  {/* Home Section */}
  <section id="home" className="hidden">
    <h1>Home</h1>
    <h2>Continue Watching</h2>
    <div id="continue-watching" />
    <h2>Top Picks for You</h2>
    <div id="top-picks" />
    <h2>Recently Added</h2>
    <div id="recently-added" />
  </section>
  {/* Explore Section */}
  <section id="explore" className="hidden">
    <h1>Explore</h1>
    <input type="text" placeholder="Search..." id="searchBar" />
    <div className="filters">
      <button onclick="filterContent('Trending')">Trending</button>
      <button onclick="filterContent('Movies')">Movies</button>
      <button onclick="filterContent('Sports')">Sports</button>
      <button onclick="filterContent('Comedy')">Comedy</button>
      <button onclick="filterContent('Others')">Others</button>
    </div>
    <div id="explore-content">
      <div className="box">
        <h3>Trending</h3>
      </div>
      <div className="box">
        <h3>Movies</h3>
      </div>
      <div className="box">
        <h3>Sports</h3>
      </div>
      <div className="box">
        <h3>Comedy</h3>
      </div>
      <div className="box">
        <h3>Others</h3>
      </div>
    </div>
  </section>
  {/* Kids Mode Section */}
  <section id="kids-mode" className="hidden">
    <h1>Kids Mode</h1>
    <p>Parental Controls: Set screen time limits, content filters, and more.</p>
    <p>Educational Content, Movies, Games for kids.</p>
  </section>
  {/* Subscription Section */}
  <section id="subscription" className="hidden">
    <h1>Subscription Plans</h1>
    <form>
      <label htmlFor="plan">Choose a Plan:</label>
      <select id="plan">
        <option value="free">Free</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>
      <button type="submit">Subscribe</button>
    </form>
    <table>
      <tbody>
        <tr>
          <th>Plan</th>
          <th>Price</th>
          <th>Features</th>
        </tr>
        <tr>
          <td>Free</td>
          <td>$0</td>
          <td>Limited content</td>
        </tr>
        <tr>
          <td>Standard</td>
          <td>$9.99</td>
          <td>Access to most content</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>$14.99</td>
          <td>All content + offline access</td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Downloads Section */}
  <section id="downloads" className="hidden">
    <h1>Downloads</h1>
    <p>Your downloaded content appears here.</p>
  </section>
  {/* Profile Section */}
  <section id="profile" className="hidden">
    <h1>Profile</h1>
    <div className="profile-content">
      <h2>Profile Edit</h2>
      <ul>
        <li>
          <a href="#" onclick="showProfileSection('edit-profile')">
            Profile Edit
          </a>
        </li>
        <li>
          <a href="#" onclick="showProfileSection('history')">
            History
          </a>
        </li>
        <li>
          <a href="#" onclick="showProfileSection('watch-later')">
            Watch Later
          </a>
        </li>
        <li>
          <a href="#" onclick="showProfileSection('my-channel')">
            My Channel
          </a>
        </li>
        <li>
          <a href="#" onclick="showProfileSection('settings')">
            Settings
          </a>
        </li>
        <li>
          <a href="#" onclick="showProfileSection('customer-support')">
            Customer Support
          </a>
        </li>
        <li>
          <a href="#" onclick="logout()">
            Logout
          </a>
        </li>
      </ul>
    </div>
    <div id="edit-profile" className="profile-content hidden">
      <h2>Edit Profile</h2>
      <p>Form to edit profile details.</p>
    </div>
    <div id="history" className="profile-content hidden">
      <h2>History</h2>
      <p>All watch history content.</p>
    </div>
    <div id="watch-later" className="profile-content hidden">
      <h2>Watch Later</h2>
      <p>All watch later content stored by user.</p>
    </div>
    <div id="my-channel" className="profile-content hidden">
      <h2>My Channel</h2>
      <p>Shows all my videos and channel name.</p>
    </div>
    <div id="settings" className="profile-content hidden">
      <h2>Settings</h2>
      <p>All setting content.</p>
    </div>
    <div id="customer-support" className="profile-content hidden">
      <h2>Customer Support</h2>
      <form id="supportForm">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required="" />
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" rows={4} required="" defaultValue={""} />
        <button type="submit">Submit</button>
      </form>
      <p id="supportResponse" />
    </div>
  </section>
</>

     </div>
   )
 }
 
 export default INDEX