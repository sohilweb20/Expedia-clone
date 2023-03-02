import { useEffect } from "react";
import styles from "./PaymentPage.module.css";
// import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
// import LockIcon from "@material-ui/icons/Lock";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import { Divider, Typography } from "@material-ui/core";

export const PaymentPage=()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainc}>
      {/* <Typography variant="h4" className={styles.secure_typ}> */}
        Secure booking — only takes 2 minutes!
      {/* </Typography> */}
      <div className={styles.orbucksContainer}>
        {/* <LockIcon /> */}
        <p className={styles.orbucksInfo}>Sign in to earn ₹299 in Orbucks</p>
      </div>
      <div className={styles.paymentcontainer}>
        <div>
          <div className={styles.Paymentsub}>
            <div className={styles.hotelview}>
              <img src="https://images.trvl-media.com/hotels/1000000/470000/465100/465005/b6be1b6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="hotel" />
              <div>
                <p className={styles.hnDiv}>"New Delhi"</p>
              </div>
            </div>
            <div className={styles.detsDiv}>
              <p>
                <span className={`${styles.paySub} ${styles.pay_style}`}>
                  Number of Guests:
                </span>{" "}
                2
              </p>
              <div className={styles.dettime}>
                <div className={styles.check_payment}>
                  <h4
                    className={`${styles.paySub} ${styles.checkHeading_style}`}
                  >
                    Check in: 
                  </h4>
                  <p> 24/07</p>
                </div>
                <div className={styles.check_payment}>
                  <h4
                    className={`${styles.paySub} ${styles.checkHeading_style}`}
                  >
                    Check out:
                  </h4>
                  <p>29/07</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.amount}>
            <Typography variant="h4" className={styles.styling_amount}>
              amount Details
            </Typography>
            <Divider />
            <div>
              <div>
                <div>Stay fee </div>
                <div>₹1200</div>
              </div>
              <div>
                <div>Taxes and other fees</div> <div>₹100</div>
              </div>
              <Divider />
              <div>
                <div className={styles.total}>Total</div>{" "}
                <div className={styles.total}>₹1300</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.proceed}>
        <div className={styles.info}>
          <CreditCardIcon />
          <div className={styles.flex_style}>
            <CheckCircleIcon className={styles.check_circle_icon} />
            <div className={styles.info_style}>We use secure transmission</div>
          </div>
          <div className={styles.flex_style}>
            <CheckCircleIcon className={styles.check_circle_icon} />
            <div className={styles.info_style}>
              We protect your personal information
            </div>
          </div>
        </div>
        <Divider />
        <h4>Imoportant Information about your booking</h4>
        <ul>
          <li>
            Cancellations or changes made after 11:59pm (property local time) on
            Jul 25, 2022 or no-shows are subject to a property fee equal to the
            first nights rate plus taxes and fees.
          </li>
          <li>Front desk staff will greet guests on arrival.</li>
          <li>
            you will be asked to pay the folling charges at the property.
            <ul>
              <li>Deposite USD 50 per accomdation , per night</li>
              <li>Resot fees</li>
            </ul>
          </li>
          <li>
            The resort fees includes
            <ul>
              <li>Pool access</li>
              <li>Fitness center access</li>
              <li>phone calls</li>
              <li>Additional inclusions</li>
            </ul>
          </li>
        </ul>
        <p>
          By clicking on the button below, I acknowledge that I have reviewed
          the Privacy and Government Travel Advice and have reviewed and accept
          the Rules & Restrictions and Terms of Use.
        </p>
        <div className={styles.flex_style}>
          <CheckCircleIcon className={styles.check_circle_icon} />
          <div className={styles.info_style}>
            Change of plans ? No problem. You can cancel for free before MOn jul
            25
          </div>
        </div>
        <div className={styles.paymentcard}>
          <StripeCheckout
            stripeKey={
              "pk_test_51LOpEeSH4IbgWZCk0Nx85DPXrqWxyar90cXPGXU6F4PfxtziexWFEZyyYPhlWEzOfv4cp6a7U8oc5FYlvXDF0vqy00nnNvRkZw"
            }
            token={"handleToke"}
            amount={1300}
            name={"name"}
            currency="INR"
            billingAddress
            shippingAddress
          ></StripeCheckout>
        </div>
        <div className={styles.leftinfo}>
          <div className={styles.check_payment}>
            <LockIcon />
            <p className={styles.p_secure_style}>
              We use secure transmission and encrypted storage to protect your
              personal information.
            </p>
          </div>
          <p className={styles.p_payment_style}>
            This payment will be processed in India. This does not apply when
            the travel provider (airline/hotel/rail, etc.) processes your
            payment.
          </p>
        </div>
      </div> */}
      <div className={styles.alcent}>
        <p className={styles.blu}>[+] Tell us what you think </p>
        <p>© 2022 orbitz,LLC,An Experdia group Company.All rights reserved</p>
        <img
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
          alt=""
        />
      </div>
    </div>
  );
}
