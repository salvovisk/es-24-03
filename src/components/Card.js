import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="Card_body">
        <img
          src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          alt="Profile_pic"
          className="Card_img"
        />
        <div className="Card_Text">
          <h4 className="Card_TextTitle">User123</h4>
          <p className="Card_TextContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            obcaecati suscipit explicabo possimus itaque sequi! Quam eum maxime
            ad. Esse ex aperiam maxime aliquid maiores eveniet ab porro in?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
