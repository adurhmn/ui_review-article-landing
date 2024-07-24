import { Ubuntu, Urbanist } from "next/font/google";
import { Roboto } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "900"],
});
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export { urbanist, roboto, ubuntu };
