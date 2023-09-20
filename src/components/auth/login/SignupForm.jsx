import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Form, Input, Button } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import Google from "./GoogleLogin";
import { Checkbox } from "@mui/material";

const SignUp = () => {
  const [form] = Form.useForm();

  const [value, setValue] = React.useState("Personal account");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail(contact)) {
      setMessage(`Valid Email: ${contact}`);
    } else if (isValidPhoneNumber(contact)) {
      setMessage(`Valid Phone Number: ${contact}`);
    } else if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      setMessage("Form submitted successfully.");
      console.log("Form submitted successfully:", formData);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="h-screen w-full">
      <div className="">
        <div className="">
          {/* <div className=""> */}
          <nav className="mx-9 my-9 ">
            <img src="/assets/logo/logo1.png" alt="osis" className="h-11" />
          </nav>
          {/* </div> */}

          <div className="text-center mt-2 mb-6  ">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Create your account
            </Typography>
          </div>

          <div className="md:item-center">
            <div className="text-center mb-6">
              <FormControl onSubmit={handleFormSubmit}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Personal account"
                  name="radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <div className="flex justify-between items-center w-[410px]">
                    <FormControlLabel
                      value="Personal account"
                      control={<Radio />}
                      label="Personal account"
                    />
                    <FormControlLabel
                      value="Business account"
                      control={<Radio />}
                      label="Business account"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            <div className="md:w-[400px] lg:w-[500px] m-auto w-1/2">
              <Form
                layout="vertical"
                form={form}
                initialValues={{}}
                autoComplete="off"
                // onFinish={onSubmitSignup}
              >
                <label
                  htmlFor="contact"
                  sx={{ fontWeight: 8 }}
                  className="font-semibold mb-1"
                >
                  EMAIL OR PHONE NUMBER
                </label>
                <Form.Item name="contact">
                  <Input
                    id="contact"
                    value={contact}
                    className="text-gray-400"
                    suffix={<PhoneOutlined />}
                    name="contact"
                    onChange={(e) => setContact(e.target.value)}
                    // disabled={phone}
                    // onChange={changeHandler}
                    placeholder="Enter Mobile Number or Email"
                    // defaultValue={phone}
                    type="text"
                  />
                </Form.Item>

                <div className="">
                  <h4 className="font-semibold">FULL NAME </h4>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter first name",
                      },
                    ]}
                  >
                    <Input
                      className="text-gray-400"
                      name="fullName"
                      placeholder="ALEXANDER MCQUEEN"
                    />
                  </Form.Item>
                </div>
                <div>
                  <h6 className="font-semibold">CREATE PASSWORD</h6>

                  <Form.Item
                    name="password"
                    id="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter password!",
                      },
                      {
                        min: 8,
                        message:
                          "The password needs to be at least 8 characters long",
                      },
                      {
                        pattern: /^[A-Za-z0-9]+$/,
                      },
                    ]}
                  >
                    <Input
                      className="text-gray-400"
                      suffix={<LockOutlined />}
                      name="password"
                      type="password"
                      id="password"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="Set Password"
                    />
                  </Form.Item>
                  <h4 className="font-semibold">CONFIRM PASSWORD</h4>

                  <Form.Item
                    name="confirmPassword"
                    id="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please enter password!",
                      },
                      {
                        min: 8,
                        message:
                          "The password needs to be at least 8 characters long",
                      },
                      {
                        pattern: /^[A-Za-z0-9]+$/,
                      },
                    ]}
                  >
                    <Input
                      className="text-gray-400"
                      suffix={<LockOutlined />}
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  label="I agree to terms & conditions and privacy policy"
                  className="flex justify-center items-center text-sm text-light "
                />

                <div className="text-center">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onSubmit={handleFormSubmit}
                      className="rounded mb-2 bg-blue-600 hover:bg-green-700 transition-all  font-normal text-sm capitalize border-0 py-[13px] px-[20px] justify-center items-center flex font-semibold w-full"
                      // loading={loading}
                    >
                      Sign Up
                    </Button>
                    <p className="justify-center items-center flex text-xl">
                      or
                    </p>
                  </Form.Item>
                </div>
              </Form>
              <div>
                <Google />
              </div>
              <p className="mt-3 flex justify-center items-center text-sm tracking-wide">
                Already have an account?&nbsp; <a href="/Login">LOGIN</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
