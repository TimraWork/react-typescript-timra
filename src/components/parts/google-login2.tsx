import jwt_decode from "jwt-decode";
import { useRef } from "react";
import { GOOGLE_CLIENT_ID } from "../../constants";
import { useScript } from "../../containers/hooks/use-script";

declare const window: Window &
  typeof globalThis & {
    google: any;
    GoogleAuth: any;
  };

interface GoogleLoginProps {
  text?: string;
  onGoogleSignIn?: (response: { credential: string }) => void;
}
export const GoogleLogin = ({
  text = "signin_with",
  onGoogleSignIn = (response) => {
    const userObject = jwt_decode(response?.credential);
    console.log("userObject =", userObject);
  },
}: GoogleLoginProps) => {
  const googleSignInButton = useRef<HTMLDivElement>(null);

  useScript("https://accounts.google.com/gsi/client", () => {
    console.log("GOOGLE_CLIENT_ID= ", GOOGLE_CLIENT_ID);
    window.google.accounts.id.initialize({
      // client_id: '328002130937-d19l2vsfd9r1vmtjdar738gqs1dhnjfv.apps.googleusercontent.com',
      client_id: GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      googleSignInButton.current,
      {
        theme: "outline",
        size: "large",
        text,
        width: googleSignInButton?.current?.clientWidth,
      } // customization attributes
    );
  });

  return <div ref={googleSignInButton}>GoogleLogin2</div>;
};
