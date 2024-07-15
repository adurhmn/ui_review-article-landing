import { Urbanist } from "next/font/google";
import { Roboto } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500", ] });

export { urbanist, roboto };
