import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  return redirect("/dashboard");
};

export default Home;

// uncaughtException [Error: EPERM: operation not permitted, open 'C:\Users\Zayed Hossain\Desktop\anergy-house\cop-dashboard\.next\trace'] {
//   errno: -4048,
//   code: 'EPERM',
//   syscall: 'open',
//   path: 'C:\\Users\\Zayed Hossain\\Desktop\\anergy-house\\cop-dashboard\\.next\\trace'
// }
