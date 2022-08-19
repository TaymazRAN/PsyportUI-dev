import "./footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
		<div className="footer">
			<div className="footerContainer">
			  <div className="messageContainer">
				  <div className="messageImage"></div>
			  </div>
			  <div className="contactUsContainer">
				  <div className="contactUsTitle bold">تماس با ما</div>
					<div className="contactData">
						<div className="contactIcon">
							<LanguageIcon />
						</div>
						<div className="contactText">support-url.com</div>
					</div>
					<div className="contactData">
						<div className="contactIcon">
							<MailOutlineIcon />
						</div>
						<div className="contactText">support-email@email.com</div>
					</div>
					<div className="contactData">
						<div className="contactIcon">
							<LocalPhoneIcon />
						</div>
						<div className="contactText">+123456789</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
