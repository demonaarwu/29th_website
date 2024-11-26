import "./Home.css";
import Header from "../header.jsx";

function Home() {
    return (
        <>
            <Header />
            <div class="content">
                <img class="cover" src="images/cover.png" alt="" />
                <h2 class="title">關於建北電資</h2>
                <p>
                    建北電資是一個溫暖大家庭。
                    <br />
                    建電與北資自 1995 年合併，至今已傳承至 29
                    屆，並合稱建北電資， 也因為如此，雙方也培養出了許多情感
                    或愛情 ，並且兩社合作密切，
                    不只是春夏秋冬的大活動，連放學的小社課也都是一起舉辦的
                    <br />
                    如果你覺得女校或男校的生活太無聊，
                    建北電資會告訴你什麼叫把男女分校當成男女混校，我們常常一起出去社遊，
                    也常常會聽到有北資的說，ㄟ要不要去建電社辦，諸如此類。
                    在常人來看，建北電資根本就是同一個社團
                </p>
            </div>
        </>
    );
}

export default Home;
