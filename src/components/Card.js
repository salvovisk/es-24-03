import {
  CardComp,
  Card_Body,
  Card_img,
  Card_TextWrapper,
  Card_TextTitle,
  Card_TextContent,
} from "../styledComponents/styles";

function Card({ theme }) {
  return (
    <CardComp theme={theme}>
      <Card_Body>
        <Card_img
          theme={theme}
          src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          alt="Profile_pic"
        />
        <Card_TextWrapper>
          <Card_TextTitle theme={theme}>User123</Card_TextTitle>
          <Card_TextContent theme={theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            obcaecati suscipit explicabo possimus itaque sequi! Quam eum maxime
            ad. Esse ex aperiam maxime aliquid maiores eveniet ab porro in?
          </Card_TextContent>
        </Card_TextWrapper>
      </Card_Body>
    </CardComp>
  );
}

export default Card;
