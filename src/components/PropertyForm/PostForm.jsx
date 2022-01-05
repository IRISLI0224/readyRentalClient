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
import { PostProperty } from '../../config/Properties';

const { Option } = Select;

const ManageListPage = 'http://localhost:3000/property/manage-listings';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const { TextArea } = Input;
class postForm extends React.Component {

  handleFormSubmit = async (values,error) => {
    //formart data
    let newData = values;
    const PF = values.propertyFeatures;
    if (PF) {
      if (PF.indexOf('Furnished') > -1) {
        newData['furnished'] = true;
      } else newData['furnished'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Petsconsidered') > -1) {
        newData['petAllowed'] = true;
      } else newData['petAllowed'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Airconditioner') > -1) {
        newData['Airconditioner'] = true;
      } else newData['airCon'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Airconditioner') > -1) {
        newData['Intercom'] = true;
      } else newData['intercom'] = false;
    }
    const date = new Date();

    newData['postDate'] = date.toLocaleDateString();

    delete newData.propertyFeatures;

    await PostProperty(newData);
    //back to list page
    window.alert('Add a new property to your list successfully');
    window.location.href = ManageListPage;
  };
  render() {
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        initialValues={{
          bedrooms: 1,
          bathrooms: 1,
          parkingspaces: 1,
          rent: 0,
        }}
        onFinish={(values) => this.handleFormSubmit(values)}
        onFinishFailed={(error)=>{
          console.log(error)

        }}
      >
        <Form.Item
          style={{ height: 45 }}
          name="roomType"
          label="Property Type"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select a property type!',
            },
          ]}
        >
          <Select placeholder="Please select a property type" size={'large'} >
            <Option value="House">House</Option>
            <Option value="Apartment">Apartment</Option>
            <Option value="Studio">Studio</Option>
          </Select>
        </Form.Item>
        <Form.Item name="propertyFeatures" label="Property Features">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="Furnished" style={{ lineHeight: '32px' }}>
                  Furnished
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Petsconsidered" style={{ lineHeight: '32px' }}>
                  Pets considered
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Airconditioner" style={{ lineHeight: '32px' }}>
                  Airconditioner
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Intercom" style={{ lineHeight: '32px' }}>
                  Intercom
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Street Number" model="multiple" name="streetNumber">
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="Street" model="multiple" name="streetName">
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="City" mode="multiple" name="city">
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="State" mode="multiple" name="state">
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="Postcode" mode="multiple" name="postCode">
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="Bedrooms">
          <Form.Item
            name="numOfBed"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Bathrooms">
          <Form.Item
            name="numOfBath"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Parking spaces">
          <Form.Item
            name="numOfCarSpace"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Rent"
          name="rent"
          mode="multiple"
          rules={[
            {
              required: true,
              message: 'Please enter an amount',
              pattern: new RegExp(/^[1-9]\d*$/, 'g'),
            },
          ]}
        >
          <Input prefix="$" suffix="Per Week" style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={5} placeholder="Description" style={{ width: 600 }} />
        </Form.Item>
        <Form.Item label="Pictures">
          <Form.Item name="pictures" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do" style={{ width: 600 }}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 20,
              offset: 4,
            },
            sm: {
              span: 14,
              offset: 10,
            },
          }}
        >
          <Button type="primary" htmlType="submit"  size={'large'}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default postForm;
