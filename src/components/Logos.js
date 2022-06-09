import visa_logo from "../images/Visa-Emblem.png";
import discover_logo from "../images/Discover-logo.png";
import Icon_logo from "../images/icon.png";
import paypal_logo from "../images/paypal-logo.png";

export const VisaLogo = () => {
  return <img src={visa_logo} alt="visa_logo" className="logo mr-2" />;
};

export const DiscoverLogo = () => {
  return <img src={discover_logo} alt="discover_logo" className="logo" />;
};

export const IconLogo = () => {
  return <img src={Icon_logo} alt="Icon_logo" width="15px" />;
};

export const PayPalLogo = () => {
  return <img src={paypal_logo} alt="paypal_logo" className="logo" />;
};
