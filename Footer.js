import './App.css';
import logohms from './logohms.png';
function Footer() {
  return (
    <div className="bg-light p-5 mt-5">
    <div className="container text-center">
        <div className="row">
            <div className="col">
                    <img src={logohms} alt="" width="40px"/>
                <span>Copyright @2022 | Created with pride by Kelompok 4</span>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Footer;
