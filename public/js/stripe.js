/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51N7NsTEzlcJCpayUFAqhgk3MV2v03ANrqineh4WhIiDkb2bTBi1Im0BoeB8f7T3lmtxupuTNuag9lTjWC4BhBC8v00JsWP2wiG'
  );

  try {
    // 1. Get checkout session from the API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
