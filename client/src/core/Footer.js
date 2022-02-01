import React from "react";

export const Footer = () => {
  return (
    <footer className='footer mt-5 pt-3' style={{ background: "#0C2461" }}>
      <div className='row w-100'>
        <h2 id='contactus' className='mx-auto text-white font-weight-bold'>
          <span>Contact Us</span>
        </h2>
      </div>
      <div className='container py-3'>
        <div className='row text-white'>
          <div className='col row'>
            <div className='col d-flex flex-column'>
              <h3>Tech Stack</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className='col'>
              <h3>Contribute</h3>
              <ul>
                <li>
                  <a
                    className='text-white'
                    href='https://github.com/SatyaNarayanaputlur/capstone-music'
                  >
                    music reccomender @ GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
