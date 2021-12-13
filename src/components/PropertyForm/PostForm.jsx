import React from 'react';
import 'antd/dist/antd.css';
import { Form, Select, Upload, Checkbox, Row, Col, Input, Button, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { storePropety } from '../../config/postProperties';
import styled from 'styled-components';

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

class postForm extends React.Component {
  handleFormSubmit = (values) => {
    storePropety(values).then(function (response) {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <Form
          name="validate_other"
          {...layout}
          {...formItemLayout}
          onFinish={(values) => this.handleFormSubmit(values)}
        >
          <Form.Item label="Title" model="multiple" name="title">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item name="property requirements" label="Property requirements">
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox value="Furnished" style={{ lineHeight: '32px' }}>
                    Furnished
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Pets considered" style={{ lineHeight: '32px' }}>
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
          <Form.Item label="Bedrooms" mode="multiple" name="bedrooms">
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Bathrooms" mode="multiple" name="bathrooms">
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Parking space" mode="multiple" name="parkingSpace">
            <Input style={{ width: 100 }} />
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
