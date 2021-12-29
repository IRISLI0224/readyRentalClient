import React from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Select,
  Upload,
  Checkbox,
  Row,
  Col,
  Input,
  Button,
  DatePicker,
  InputNumber,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { storePropety } from '../../api/postProperties';
import styled from 'styled-components';
import { PostProperty } from '../../config/properties';
import validate from '../../hoc/Form/validate';

const SubmitWrapper = styled.div`
  margin-left: 150px;
`;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const { TextArea } = Input;

const initialData = {
  value: '',
  blurred: false,
};

const initialDataNumber = {
  value: 0,
  blurred: false,
};

const initialDataBoolean = {
  value: false,
};

class postForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: {
        streetNumber: initialData,
        streetName: initialData,
        city: initialData,
        state: initialData,
        postCode: initialData,
        numOfBed: initialDataNumber,
        numOfBath: initialDataNumber,
        numOfCarSpace: initialDataNumber,
        rent: initialData,
        petAllowed: initialDataBoolean,
        smokingAllowed: initialDataBoolean,
        furnished: initialDataBoolean,
        description: initialData,
        status: 'open',
        airCon: initialDataBoolean,
        intercom: initialDataBoolean,
      },
      isFormSubmit: false,
      error: null,
      isLoading: false,
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.getSubmitError = this.getSubmitError.bind(this);
    //this.userRegister = this.userRegister.bind(this);
  }
  handleFormSubmit = async (values) => {
    console.log(values);
    // storePropety(values).then(function (response) {
    //   return;
    // });
    await PostProperty(values);
  };

  handleDataChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { classname } = event.target;
   
    console.log("handle data change")
    this.setData(classname, {
      value,
    });
     console.log(this.state.propertyData);
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    console.log('handle is form submit change')
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    console.log("handle blurred change")
    const { classname } = event.target;

    this.setData(classname, {
      blurred: true,
    });
  }

  setData(classname, newData) {
    console.log("set data")
    this.setState((prevState) => ({
      propertyData: {
        ...prevState.propertyData,
        [classname]: {
          ...prevState.propertyData[classname],
          ...newData,
        },
      },
    }));
  }

  getErrorMessage(error, classname) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[classname].blurred;
    return (showInputError || isFormSubmit) && error[classname];
  }

  getError() {
    const { propertyData } = this.state;
    const error = {};
    Object.keys(propertyData).forEach((classname) => {
      const errorOfName = validate(classname, propertyData);
      if (!errorOfName) {
        return;
      }
      error[classname] = errorOfName;
    });
    return error;
  }

  handleSubmit() {
    console.log(this.state.propertyData);
  }

  render() {
    const { propertyData } = this.state;
    const { isSubmitFail, submitError } = this.state;
    const { date } = this.props;
    const error = this.getError(propertyData);
    const hasError = Object.keys(error).length > 0;
    return (
      <div>
        <Form
          name="validate_other"
          {...layout}
          {...formItemLayout}
          //onFinish={(propertyData) => this.handleFormSubmit(propertyData)}
          onSubmit={(e) => {
            e.preventDefault();
            this.handleIsFormSubmitChange(true);
            this.handleContinueClick(propertyData, hasError);
          }}
        >
          <Form.Item name="property requirements" label="Property requirements">
            {/* <Checkbox.Group> */}
              <Row>
                <Col span={8}>
                  <Checkbox
                    //value={propertyData.furnished.value}
                    name="furnished"
                    classname="furnished"
                    style={{ lineHeight: '32px' }}
                    checked={propertyData.furnished.value}
                    onChange={this.handleDataChange}
                  >
                    Furnished
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    //value={propertyData.petAllowed.value}
                    style={{ lineHeight: '32px' }}
                    //checked={propertyData.petAllowed.value}
                    //name="petAllowed"
                    classname="petAllowed"
                    checked={propertyData.petAllowed.value}
                    onChange={this.handleDataChange}
                  >
                    Pets considered
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    //value={propertyData.airCon.value}
                    style={{ lineHeight: '32px' }}
                    //name="airCon"
                    classname="airCon"
                    checked={propertyData.airCon.value}
                    onChange={this.handleDataChange}
                  >
                    Airconditioner
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    //value={propertyData.intercom.value}
                    style={{ lineHeight: '32px' }}
                    //name="intercom"
                    classname="intercom"
                    checked={propertyData.intercom.value}
                    onChange={this.handleDataChange}
                  >
                    Intercom
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    //value={propertyData.smokingAllowed.value}
                    style={{ lineHeight: '32px' }}
                    //name="smokingAllowed"
                    classname="smokingAllowed"
                    checked={propertyData.smokingAllowed.value}
                    onChange={this.handleDataChange}
                  >
                    Allowed Smoking
                  </Checkbox>
                </Col>
              </Row>
            {/* </Checkbox.Group> */}
          </Form.Item>
          <Form.Item
            name="property type"
            label="Property type"
            rules={[
              {
                required: false,
                message: 'Please select your favourite type!',
                type: 'array',
              },
            ]}
          >
            <Select
              name="Property type"
              mode="multiple"
              placeholder="Please select favourite type"
              style={{ width: 400 }}
            >
              <Option value="House">House</Option>
              <Option value="Apartment & Unit">Apartment & Unit</Option>
              <Option value="Townhouse">Townhouse</Option>
              <Option value="Villa">Villa</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Room Number" model="multiple" name="roomNumber">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="Street" model="multiple" name="street">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="City" mode="multiple" name="city">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="State" mode="multiple" name="state">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="Postcode" mode="multiple" name="postcode">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="Bedrooms" mode="multiple" name="bedrooms" type="number">
            <InputNumber style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Bathrooms" mode="multiple" name="bathrooms">
            <InputNumber style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Parking space" mode="multiple" name="parkingSpace">
            <InputNumber style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Available Date" name="available Date">
            <DatePicker picker="date" placeholder="Choose your date" />
          </Form.Item>
          <Form.Item label="Rent" mode="multiple">
            <Input prefix="$" suffix="Per Week" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={5} placeholder="Description" style={{ width: 600 }} />
          </Form.Item>
          <Form.Item label="Pictures">
            <Form.Item
              name="pictures"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do" style={{ width: 600 }}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <SubmitWrapper>
              <Button type="primary" htmlType="submit" size={'large'} onClick={this.handleSubmit}>
                Submit
              </Button>
            </SubmitWrapper>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default postForm;
