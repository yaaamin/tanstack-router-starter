import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="296075102253-pfi1e3sgmrgadhk1kuk3bjtekb29df5f.apps.googleusercontent.com">
        <div>
          Hello and hello
          <GoogleLogin
            onSuccess={(response) => {
              console.log(JSON.stringify(response, null, 4));
            }}
            useOneTap
          />
        </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
