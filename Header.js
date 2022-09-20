import logohms from './logohms.png';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/tugas hms/html/homepage.html">
            <a className="navbar-brand" href="/tugas hms/html/homepage.html">
                <img src={logohms} alt="" width="60" height="60" className="d-inline-block"/>
                rise<strong>Store</strong>
            </a>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto my-4 my-lg-0" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="homepage.html"><i
                            className="fa-solid fa-house"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="keranjang.html"><i className="fa-solid fa-cart-shopping"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="notifikasi.html"><i className="fa-solid fa-bell"></i></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#Kategori" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Kategori</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#Fashion Pria">Fashion Pria</a></li>
                        <li><a className="dropdown-item" href="#Fashion Wanita">Fashion Wanita</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Sepatu</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Kacamata</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Olahraga</a></li>
                    </ul>
                </li>
                <li className="nav-item me-2">
                    <a className="nav-link" href="/tugas hms/Form Login & Registrasi/index.html">Daftar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tugas hms/Form Login & Registrasi/index.html">Masuk</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}

export default App;
