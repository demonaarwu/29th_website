import "./navbar.css";

function Navbar() {
    return (
        <>
            <div class="container">
                <div class="logo">
                    <h1>
                        <a class="home" href="/">
                            CKFGISC 29th
                        </a>
                    </h1>
                </div>
                <nav class="navbar">
                    <a class="nav_link" href="team">
                        幹部
                    </a>
                    <a class="nav_link" href="courses">
                        課程
                    </a>
                    <a class="nav_link" href="events">
                        活動
                    </a>
                    <a class="nav_link" href="museum">
                        歷屆
                    </a>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
