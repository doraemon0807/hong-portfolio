import { atom, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const navLocationState = atom({
  key: "navLocation",
  default: "homeAnchor",
});

export const mqState = atom({
  key: "mq",
  default: "",
});
