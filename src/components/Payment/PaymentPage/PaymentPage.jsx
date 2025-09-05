import React, { useState, useEffect } from 'react';
import { CreditCard, Banknote, QrCode } from 'lucide-react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [netBankingDetails, setNetBankingDetails] = useState({
    bank: '',
  });

  // Effect to clear the submission message after 3 seconds
  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleNetBankingChange = (e) => {
    const { name, value } = e.target;
    setNetBankingDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a payment gateway.
    let message = '';
    switch (selectedPaymentMethod) {
      case 'card':
        console.log('Submitting card payment with:', cardDetails);
        message = 'Card payment submitted successfully!';
        break;
      case 'netbanking':
        console.log('Submitting net banking payment with:', netBankingDetails);
        message = 'Net banking payment submitted successfully!';
        break;
      case 'qrcode':
        console.log('QR Code payment selected. Waiting for scan...');
        message = 'QR Code payment initiated!';
        break;
      default:
        message = 'Please select a payment method.';
    }
    setSubmissionMessage(message);
  };

  const renderPaymentMethodContent = () => {
    switch (selectedPaymentMethod) {
      case 'card':
        return (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleCardChange}
                placeholder="John Doe"
                className="input-field"
                required
              />
            </div>
            <div className="split-inputs">
              <div className="input-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardChange}
                  placeholder="MM/YY"
                  className="input-field"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <button type="submit" className="pay-button">
              Pay with Card
            </button>
          </form>
        );
      case 'netbanking':
        return (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="bank">Select Your Bank</label>
              <select
                id="bank"
                name="bank"
                value={netBankingDetails.bank}
                onChange={handleNetBankingChange}
                className="input-field"
                required
              >
                <option value="">-- Select Bank --</option>
                <option value="sbi">State Bank of India</option>
                <option value="icici">ICICI Bank</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
            <button type="submit" className="pay-button">
              Proceed to Bank
            </button>
          </form>
        );
      case 'qrcode':
        return (
          <div className="qr-code-section">
            <img src="https://placehold.co/200x200/52c676/FFFFFF?text=Scan+Me" alt="QR Code" className="qr-code-image" />
            <p className="qr-code-text">Scan this QR code with your preferred UPI app to complete the payment.</p>
            <button onClick={handleSubmit} className="pay-button">
              I have paid
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="payment-page-wrapper">
      {submissionMessage && <div className="message-box">{submissionMessage}</div>}
      <div className="payment-card">
        <div className="form-header">
          <h2>Payment Details</h2>
        </div>

        <div className="payment-method-selector">
          <button
            type="button"
            onClick={() => setSelectedPaymentMethod('card')}
            className={`method-button ${selectedPaymentMethod === 'card' ? 'active' : ''}`}
          >
            <CreditCard size={24} />
            Card
          </button>
          <button
            type="button"
            onClick={() => setSelectedPaymentMethod('netbanking')}
            className={`method-button ${selectedPaymentMethod === 'netbanking' ? 'active' : ''}`}
          >
            <Banknote size={24} />
            Net Banking
          </button>
          <button
            type="button"
            onClick={() => setSelectedPaymentMethod('qrcode')}
            className={`method-button ${selectedPaymentMethod === 'qrcode' ? 'active' : ''}`}
          >
            <QrCode size={24} />
            QR Code
          </button>
        </div>

        {renderPaymentMethodContent()}
      </div>
    </div>
  );
};

export default PaymentPage;

