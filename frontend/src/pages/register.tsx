import { RegisterPageComponent } from "@/modules/AuthModule/page-components/RegisterPageComponent/RegisterPageComponent";
import { withAuthLayout } from "@/shared/layouts/AuthLayout/Layout";
import Head from "next/head";

function Register() {
  return (
    <>
      <Head>
        <title>register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterPageComponent />
    </>
  );
}

export default withAuthLayout(Register);
