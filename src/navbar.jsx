import "./navbar.css";

function Navbar() {
    return (
        <>
            <div class="container">
                <div class="logo">
                    <h1>CKFGISC 29th</h1>
                </div>
                <nav class="navbar">
                    <a class="nav_link" href="#">
                        幹部
                    </a>
                    <a class="nav_link" href="#">
                        課程
                    </a>
                    <a class="nav_link" href="#">
                        活動
                    </a>
                    <a class="nav_link" href="#">
                        歷屆
                    </a>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
