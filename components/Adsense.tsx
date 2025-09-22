'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any;
  }
}

interface AdsenseProps {
  adSlot: string;
}

const Adsense: React.FC<AdsenseProps> = ({ adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div style={{ overflow: 'hidden', minHeight: '100px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense;
