// import { useState } from 'react';
// import axiosInstance from './axiosInstance';

// const useRazorpayPayment = () => {
//   const [loading, setLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   const handlePayment = async (amount, offerId, profile) => {
//     setLoading(true);
//     setPaymentStatus(null);

//     try {
//       // Step 1: Create Razorpay order via Django API
//       const res = await axiosInstance.post(`${baseUrl}/create-order/`, {
//         amount,
//         offer_id: offerId, // Include offer ID
//         user_profile: profile, // Include user profile details
//       });

//       const { order_id, razorpay_key, amount: orderAmount, currency, offer_id, profile_id } = res.data;
//       console.log('Razorpay order response:', res.data);

//       // Step 2: Razorpay checkout config
//       const options = {
//         key: razorpay_key,
//         amount: orderAmount,
//         currency: currency,
//         name: 'MyApp Subscription',
//         description: 'Access Premium Content',
//         order_id: order_id,
//         handler: async function (response) {
//           try {
//             // Step 3: Verify payment via backend
//             const verifyRes = await axiosInstance.post(`${baseUrl}/verify-subscribe/`, {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_signature: response.razorpay_signature,
//               offer_id: offer_id, // Include offer ID for verification
//               user_id: profile.user.id, // Include user ID for verification
//               phone_number: profile.phone_number, // Include phone number for verification
//             });

//             setPaymentStatus({
//               success: true,
//               message: verifyRes.data.message,
//             });
//           } catch (err) {
//             setPaymentStatus({
//               success: false,
//               message: 'Payment verification failed.',
//             });
//           }
//         },
//         prefill: {
//           name: profile.firstname + ' ' + profile.lastname,
//           contact: profile.phone_number,
//         },
//         theme: {
//           color: '#6366f1',
//         },
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error('Order creation failed:', error);
//       setPaymentStatus({ success: false, message: 'Failed to initiate payment.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { handlePayment, loading, paymentStatus };
// };

// export default useRazorpayPayment;



import { useState } from 'react';
import axiosInstance from './axiosInstance';

const useRazorpayPayment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handlePayment = async (amount, offerId, profile) => {
    setLoading(true);
    setPaymentStatus(null);

    try {
      if (!profile) {
        console.error("Profile missing:", profile);
        alert("Please log in or update your profile before proceeding.");
        setLoading(false);
        return;
      }

      // Step 1: Create Razorpay order
      const res = await axiosInstance.post(`${baseUrl}/create-order/`, {
        amount,
        offer_id: offerId,
        user_profile: profile,
      });

      const {
        order_id,
        razorpay_key,
        amount: orderAmount,
        currency,
        offer_id,
      } = res.data;

      console.log('Razorpay order response:', res.data);

      // Step 2: Configure Razorpay checkout
      const options = {
        key: razorpay_key,
        amount: orderAmount,
        currency,
        name: 'FreakFitHub Subscription',
        description: 'Access Premium Zumba Classes',
        order_id: order_id,
        handler: async function (response) {
          try {
            // Step 3: Verify payment
            const verifyRes = await axiosInstance.post(`${baseUrl}/verify-subscribe/`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              offer_id: offer_id,
              user_id: profile.user?.id, // backend user id
              phone_number: profile.phone_number,
            });

            setPaymentStatus({
              success: true,
              message: verifyRes.data.message,
            });
          } catch (err) {
            console.error("Payment verification failed:", err);
            setPaymentStatus({
              success: false,
              message: 'Payment verification failed.',
            });
          }
        },
        prefill: {
          name: `${profile.first_name || ''} ${profile.last_name || ''}`,
          contact: profile.phone_number || '',
          email: profile.user?.email || '',
        },
        theme: {
          color: '#6366f1',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Order creation failed:', error);
      setPaymentStatus({ success: false, message: 'Failed to initiate payment.' });
    } finally {
      setLoading(false);
    }
  };

  return { handlePayment, loading, paymentStatus };
};

export default useRazorpayPayment;
