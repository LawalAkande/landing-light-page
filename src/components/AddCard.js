import React from "react";
import atm_card from "../images/atm-card.png";
import { VisaLogo, DiscoverLogo, IconLogo, PayPalLogo } from "./Logos";

const AddCard = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="paragraph">Payment Information</h4>
          <p className="payment-paragraph">Choose your method of payment.</p>
        </div>
        <div className="logos">
          <VisaLogo />
          <DiscoverLogo />
          <IconLogo />
          <PayPalLogo />
        </div>
      </div>

      {/* Payment Information */}
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img src={atm_card} alt="" className="atm_card" />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="row">
            <div className="col">
              <div>
                <label htmlFor="creditCardNumber">Credit card number</label>
                <br />
                <input
                  type="text"
                  className=" input_field"
                  placeholder="4324 5433 9382 1030"
                />
              </div>

              <div>
                <label htmlFor="securitycode">Security code</label>
                <br />
                <input type="text" className=" input_field" placeholder="420" />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="expirationdate">Expiration date</label>
                <br />
                <input
                  type="text"
                  className=" input_field"
                  placeholder="03/24"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postalcode">Postal Code</label>
                <br />
                <input
                  type="text"
                  className=" input_field"
                  placeholder="10119"
                />
              </div>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value="lawal"
                aria-label=""
              />
              <label htmlFor="usethiscardfornexttimepurchase">
                Use this card for next time purchase
              </label>
            </div>
            <div className="d-flex ">
              <button className="addCard_button w-100">Add card</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="d-flex justify-content-between">
          <p className="paragraph">Subtotal</p>
          <p className="paragraph">&#8358;2,497.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="paragraph">Estimated TAX</p>
          <p className="paragraph">&#8358;119.64</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="paragraph">
            Promotional Code: <span>Z4KXLM9A</span>
          </p>
          <p className="paragraph">&#8358;-60.00</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="d-flex justify-content-between align-items-center">
        <button className="completePayment_button">Complete payment</button>
        <h4 className="totalAmount">TOTAL: &#8358;2556.64</h4>
      </div>
      <br />
    </div>
  );
};

export default AddCard;
