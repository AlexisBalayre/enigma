import { AppNavWrapper } from "~~/components/app/Nav";
import { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import { ethers } from 'ethers';
import { StripeSession, StripePack } from '@safe-global/onramp-kit';
import Input from '~~/components/UI/Input';
import Button from '~~/components/UI/Button';

export default function Transfer() {
  const [stripePack, setStripePack] = useState<StripePack>();
  const stripeRootRef = useRef<HTMLDivElement>(null);

  const handleCreateSession = async (values: any) => {
    if (
      isSessionValid(values.sessionId) &&
      !ethers.utils.isAddress(values.walletAddress)
    )
      return;

    if (stripeRootRef.current) {
      stripeRootRef.current.innerHTML = '';
    }

    const sessionData = (await stripePack?.open({
      element: '#stripe-root',
      sessionId: values.sessionId,
      theme: 'dark',
      defaultOptions: {
        transaction_details: {
          wallet_address: values.walletAddress,
          supported_destination_networks: ['ethereum', 'polygon'],
          supported_destination_currencies: ['usdc', 'eth'],
          lock_wallet_address: false,
        },
      },
    })) as StripeSession;


    stripePack?.subscribe('onramp_ui_loaded', () => {
      setPortalLoaded(true);
    });

    //for debugging
    //stripePack?.subscribe("onramp_session_updated", (e) => {
    //  console.log("Session Updated", e.payload);
    //});
  };

  useEffect(() => {
    const createSession = async () => {
      const pack = new StripePack({
        stripePublicKey:
          'pk_test_51MZbmZKSn9ArdBimSyl5i8DqfcnlhyhJHD8bF2wKrGkpvNWyPvBAYtE211oHda0X3Ea1n4e9J9nh2JkpC7Sxm5a200Ug9ijfoO',
        onRampBackendUrl: 'https://aa-stripe.safe.global',
      });
      await pack.init();

      setStripePack(pack);
    };
    createSession();
  }, []);
  
  return (
    <AppNavWrapper>
      <div className='basis-1/2 text-white'>
        <div id='stripe-root' className='ml-10'>
          
        </div>
      </div>
    </AppNavWrapper>
  );
}
