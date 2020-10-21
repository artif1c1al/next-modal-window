import { BackButton } from "./styled";
import Router from "next/router";

export default function HomeButton() {
  return (
    <BackButton
      onClick={() => {
        Router.push("/");
      }}
    >
      Go back to Home!
    </BackButton>
  );
}
