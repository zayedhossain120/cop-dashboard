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
      <button className="btn" onClick={handleOpenModal}>
        open modal
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
            <div>
              <ModalIcon />
              <h1>Send a withdraw request</h1>
              <p>
                Please enter withdrawal amount and click the submit Request
                button
              </p>
              <div className="available-balance">
                <h3 className="text-[18px] font-semibold text-customColor-100">
                  Available Balance
                </h3>
                <h2 className="text-3xl font-bold text-customColor-100">
                  38274
                </h2>
              </div>
              <label htmlFor="amount">Amount</label>
              {/* // */}
              <div>
                <p>taka icon</p>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <p>Remember, You cant withdraw more than available balance.</p>
              <div>
                <Button btnText="Cancel" btnType="btn-warning" />
                <Button btnText="Submit Request" btnType="btn-primary" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WithdrawModal;
