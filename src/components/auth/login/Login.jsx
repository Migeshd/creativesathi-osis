import { Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import SignUp from "./SignupForm";
import Loading from "../../loadingEffect/loading";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="grid gap-8 md:grid-cols-2 ">
          <Grid item xs={6} className="w-full flex ">
            <SignUp />
          </Grid>
          <Grid item xs={6}>
            <Fragment>
              <img
                src="/assets/images/inSignUp.png"
                alt="welcome to osis"
                className="w-full "
              />
            </Fragment>
          </Grid>
        </section>
      )}
    </>
  );
};

export default Login;
