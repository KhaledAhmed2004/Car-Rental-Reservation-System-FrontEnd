import React, { useState } from "react";
import { Form, Input, Button, message, Card, Select } from "antd";
import { PayCircleOutlined } from "@ant-design/icons";

const PaymentManagementPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      message.success("Payment successful!");
      form.resetFields();
    }, 2000);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Payment Management</h1>
      <Card className="shadow-md" title="Complete Your Payment">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Car Details"
            name="carDetails"
            initialValue="Toyota Camry, 2022"
          >
            <Input disabled />
          </Form.Item>

          <Form.Item label="Amount Due" name="amountDue" initialValue="₹5,000">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Payment Method"
            name="paymentMethod"
            rules={[
              { required: true, message: "Please select a payment method!" },
            ]}
          >
            <Select placeholder="Select payment method">
              <Select.Option value="creditCard">Credit Card</Select.Option>
              <Select.Option value="paypal">PayPal</Select.Option>
              <Select.Option value="bankTransfer">Bank Transfer</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Payment Details"
            name="paymentDetails"
            rules={[
              { required: true, message: "Please enter your payment details!" },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Enter your payment details" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PayCircleOutlined />}
              loading={loading}
            >
              Pay Now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PaymentManagementPage;


// import React, { useState } from "react";
// import { Form, Input, Button, Modal, notification } from "antd";
// import { CreditCardOutlined } from "@ant-design/icons";

// const PaymentManagementPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const onFinish = (values) => {
//     console.log("Payment Details:", values);
//     notification.success({
//       message: "Payment Successful",
//       description: "Your payment has been processed successfully.",
//     });
//     handleOk(); // Close modal after successful payment
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-center">
//         <Button
//           type="primary"
//           onClick={showModal}
//           icon={<CreditCardOutlined />}
//         >
//           Proceed to Payment
//         </Button>
//       </div>

//       <Modal
//         title="Payment Details"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form
//           layout="vertical"
//           onFinish={onFinish}
//           initialValues={{ amount: 0 }}
//         >
//           <Form.Item
//             label="Card Number"
//             name="cardNumber"
//             rules={[
//               { required: true, message: "Please input your card number!" },
//             ]}
//           >
//             <Input placeholder="Enter your card number" />
//           </Form.Item>

//           <Form.Item
//             label="Card Expiry Date"
//             name="expiryDate"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your card expiry date!",
//               },
//             ]}
//           >
//             <Input placeholder="MM/YY" />
//           </Form.Item>

//           <Form.Item
//             label="CVV"
//             name="cvv"
//             rules={[{ required: true, message: "Please input your CVV!" }]}
//           >
//             <Input placeholder="Enter your CVV" />
//           </Form.Item>

//           <Form.Item
//             label="Amount"
//             name="amount"
//             rules={[{ required: true, message: "Please input the amount!" }]}
//           >
//             <Input type="number" placeholder="Enter the amount" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Pay Now
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default PaymentManagementPage;
