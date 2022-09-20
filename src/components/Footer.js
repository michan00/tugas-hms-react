import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-light p-5 mt-5">
        <div className="container text-center">
            <div className="row">
                <div className="col">
                        <img src='../logo.png' alt="" width="40px" />
                    <span>Copyright @2022 | Created with pride by Kelompok 4</span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
