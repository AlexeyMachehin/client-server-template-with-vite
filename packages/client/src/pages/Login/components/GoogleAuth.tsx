import { useEffect, useRef } from 'react';
import { clientId } from '../../../common/consts/google';
import jwtDecode from 'jwt-decode';
import { useAppDispatch } from '../../../store/store';
import { setUser } from '../../../common/slice/slice';
import { useNavigate } from 'react-router-dom';

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = err => reject(err);

    document.body.appendChild(script);
  });

function GoogleAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const googleButton = useRef(null);

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client';

    loadScript(src)
      .then(() => {
        google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(googleButton.current, {
          theme: 'outline',
          size: 'large',
        });
      })
      .catch(console.error);

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`);
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  function handleCredentialResponse(response: { credential: string }) {
    console.log('Encoded JWT ID token: ' + jwtDecode(response.credential));

    dispatch(setUser(jwtDecode(response.credential)));

    navigate('/');
  }

  return <div ref={googleButton} />;
}

export default GoogleAuth;
