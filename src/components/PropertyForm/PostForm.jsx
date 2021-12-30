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
  message,
} from 'antd';
import { CodeSandboxCircleFilled, InboxOutlined } from '@ant-design/icons';
import { storePropety } from '../../api/postProperties';
import styled from 'styled-components';
import { PostProperty } from '../../config/properties';
import validate from '../../hoc/Form/validate';

const ManageListPage = 'http://localhost:3000/property/manage-listings';

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
        roomType: initialData,
        postDate: '',
      },
      isFormSubmit: false,
      error: null,
      isLoading: false,
      allfilled:false,
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleDataChangeCheckbox = this.handleDataChangeCheckbox.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);

    //get current date
    const date = new Date();
    this.state.propertyData.postDate = date.toLocaleDateString();
    //this.getSubmitError = this.getSubmitError.bind(this);
  }
  handleFormSubmit = async (values) => {
    await PostProperty(values);
  };

  handleDataChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { name } = event.target;
    this.setData(name, {
      value,
    });
  }

  handleNumberChange(name, event) {
    this.setData(name, {
      event,
    });
  }

  handleDataChangeCheckbox(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { classname } = event.target;
    this.setData(classname, {
      value,
    });
  }

  handleSelectChange(event) {
    this.state.propertyData.roomType.value = event;
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;
    this.setData(name, {
      blurred: true,
    });
  }

  setData(classname, newData) {
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

  handleSubmit = async () => {
    const { propertyData } = this.state;
    const newData = propertyData;
    Object.entries(newData).map(([key, value]) => {
      newData[key] = value.value;
    });
    //console.log(newData);
    await PostProperty(newData);
    //back to list page
    window.alert('Add a new property to your list successfully');
    window.location.href = ManageListPage;
  };

  render() {
    const { propertyData } = this.state;
    const { isSubmitFail, submitError } = this.state;
    //const error = this.getError(propertyData);
    //const hasError = Object.keys(error).length > 0;
    return (
      <div>
        <Form
          //name="validate_other"
          {...layout}
          {...formItemLayout}
          //onFinish={(propertyData) => this.handleFormSubmit(propertyData)}
          onSubmit={(e) => {
            e.preventDefault();
            this.handleIsFormSubmitChange(true);
            //this.handleContinueClick(propertyData, hasError);
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
                  onChange={this.handleDataChangeCheckbox}
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
                  onChange={this.handleDataChangeCheckbox}
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
                  onChange={this.handleDataChangeCheckbox}
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
                  onChange={this.handleDataChangeCheckbox}
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
                  onChange={this.handleDataChangeCheckbox}
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
                type: 'string',
              },
            ]}
          >
            <Select
              name="Property type"
              mode="single"
              placeholder="Please select favourite type"
              style={{ width: 400 }}
              classname="roomType"
              value={propertyData.roomType.value}
              onChange={this.handleSelectChange}
              //onBlur={this.handleBlurredChange}
              //error={this.getErrorMessage(error, 'roomType')}
            >
              <Option value="House">House</Option>
              <Option value="Apartment">Apartment</Option>
              <Option value="Studio">Studio</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Street Number"
            name="streetNumber"

            //error={this.getErrorMessage(error, 'roomType')}
          >
            <Input
              name="streetNumber"
              classname="streetNumber"
              value={propertyData.streetNumber.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item label="Street" model="multiple" name="street">
            <Input
              name="streetName"
              classname="streetName"
              value={propertyData.streetName.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item label="City" mode="multiple" name="city">
            <Input
              style={{ width: 400 }}
              name="city"
              classname="city"
              value={propertyData.city.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
          </Form.Item>
          <Form.Item label="State" mode="multiple" name="state">
            <Input
              style={{ width: 400 }}
              name="state"
              classname="state"
              value={propertyData.state.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
          </Form.Item>
          <Form.Item label="Postcode" mode="multiple" name="postcode">
            <Input
              style={{ width: 400 }}
              name="postCode"
              classname="postCode"
              value={propertyData.postCode.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
          </Form.Item>
          <Form.Item
            label="Bedrooms"
            value={propertyData.numOfBed.value}
            onChange={this.handleDataChange}
            onBlur={this.handleBlurredChange}
          >
            <InputNumber name="numOfBed" classname="numOfBed" style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            label="Bathrooms"
            value={propertyData.numOfBath.value}
            onChange={this.handleDataChange}
            onBlur={this.handleBlurredChange}
          >
            <InputNumber name="numOfBath" classname="numOfBath" style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            label="Parking space"
            value={propertyData.numOfCarSpace.value}
            onChange={this.handleDataChange}
            onBlur={this.handleBlurredChange}
          >
            <InputNumber name="numOfCarSpace" classname="numOfCarSpace" style={{ width: 100 }} />
          </Form.Item>
          <Form.Item
            label="Rent"
            value={propertyData.rent.value}
            onChange={this.handleDataChange}
            onBlur={this.handleBlurredChange}
          >
            <Input
              prefix="$"
              suffix="Per Week"
              style={{ width: 400 }}
              name="rent"
              classname="rent"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            value={propertyData.description.value}
            onChange={this.handleDataChange}
            onBlur={this.handleBlurredChange}
          >
            <TextArea
              rows={5}
              placeholder="Description"
              style={{ width: 600 }}
              name="description"
              classname="description"
            />
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
              <Button type="primary" htmlType="submit" size={'large'} onClick={this.handleSubmit} disabled={this.state.allfilled}>
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
