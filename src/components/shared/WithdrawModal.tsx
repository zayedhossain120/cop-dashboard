"use client";
import React, { useState } from "react";
import ModalIcon from "../svgIcons/ModalIcon";
import Button from "../UI/Button";

const WithdrawModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section>
      <button
        className="bg-transparent text-[#fff] border font-bold px-3 rounded-lg"
        onClick={handleOpenModal}
      >
        Withdraw
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <div className="text-center flex flex-col gap-2">
              <ModalIcon />
              <h1 className="font-bold text-2xl ">Send a withdraw request</h1>
              <p className="font-bold text-xs text-[#000000] opacity-40">
                Please enter withdrawal amount and click the submit Request
                button
              </p>
              <div className="bg-[#DEEAF5] rounded-lg py-3">
                <h3 className="font-bold text-xs text-[#000] opacity-70">
                  Available Balance
                </h3>
                <h2 className="text-3xl">38274</h2>
              </div>
              <label htmlFor="amount">Amount</label>
              {/* // */}
              <div>
                <p>taka icon</p>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <p>Remember, You cant withdraw more than available balance.</p>
              <div className="flex gap-5 items-center justify-center">
                <Button
                  handleClick={handleCloseModal}
                  btnText="Cancel"
                  btnType="btn-warning px-5"
                />
                <Button btnText="Submit Request" btnType="btn-primary px-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WithdrawModal;
