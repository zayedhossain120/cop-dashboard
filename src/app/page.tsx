import { useAppSelector } from "@/redux/hook";
import { collectGenerateParams } from "next/dist/build/utils";
import Image from "next/image";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  console.log(count);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 100vh">
      <h3
        className="text-5xl text-white font-extrabold
      "
      >
        {count}
      </h3>
    </main>
  );
}
