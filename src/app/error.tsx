"use client";
const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h1 className=" text-center pt-10 text-5xl  ">
        Kicu akta somossa to achei
      </h1>
    </div>
  );
};

export default ErrorPage;
