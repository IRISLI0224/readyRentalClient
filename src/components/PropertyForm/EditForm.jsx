import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Select,
  Checkbox,
  Row,
  Col,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Modal,
} from 'antd';
import { updatePropertyById } from '../../config/Properties';
import { getPropertiesById } from '../../config/Properties';
import moment from 'moment';

const { Option } = Select;

const ManageListPage = '/property/manage-listings';

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

const { TextArea } = Input;

const EditForm = () => {
  const [file] = useState([]);
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  React.useEffect(() => {
    const fetchProperty = async () => {
      const ids = window.location.pathname.split('/');
      const id = ids[3];
      const res = await getPropertiesById(id);
      setImages(res.propImage);
      const PF = [];
      if (res.airCon) {
        PF.push('Airconditioner');
      }
      if (res.furnished) {
        PF.push('Furnished');
      }
      if (res.intercom) {
        PF.push('Intercom');
      }
      if (res.petAllowed) {
        PF.push('Petsconsidered');
      }
      if (res.smokingAllowed) {
        PF.push('smokingAllowed');
      }
      const date = res.availableDate ? moment(res.availableDate) : null;
      form.setFieldsValue({
        streetNumber: res.address.streetNumber,
        roomType: res.roomType,
        streetName: res.address.streetName,
        city: res.address.city,
        state: res.address.state,
        postCode: res.address.postCode,
        numOfBed: res.numOfBed,
        numOfBath: res.numOfBath,
        numOfCarSpace: res.numOfCarSpace,
        rent: res.rent,
        availableDate: date,
        description: res.description,
        propertyFeatures: PF,
      });
    };
    fetchProperty();
  });

  const Redirection = () => {
    window.location.href = ManageListPage;
  };

  const handleFormSubmit = async (values, error) => {
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
        newData['airCon'] = true;
      } else newData['airCon'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Intercom') > -1) {
        newData['intercom'] = true;
      } else newData['intercom'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('smokingAllowed') > -1) {
        newData['smokingAllowed'] = true;
      } else newData['smokingAllowed'] = false;
    }
    const date = new Date();

    newData['postDate'] = date;

    newData['availableDate'] = Date(values.availableDate);

    newData['propImage'] = file;

    delete newData.propertyFeatures;

    const ids = window.location.pathname.split('/');
    const id = ids[3];

    await updatePropertyById(id, newData);

    //back to list page
    setModalVisible(true);

    //window.alert('Update your property successfully');
    //window.location.href = ManageListPage;
  };

  return (
    <Form
      form={form}
      name="validate_other"
      {...formItemLayout}
      initialValues={{
        bedrooms: 1,
        bathrooms: 1,
        parkingspaces: 1,
        rent: 0,
      }}
      onFinish={(values) => handleFormSubmit(values)}
      onFinishFailed={(error) => {
        console.log(error);
      }}
    >
      <Modal
        visible={modalVisible}
        footer={[
          <Button key="OK" onClick={Redirection}>
            OK
          </Button>,
        ]}
      >
        <p></p>
        <p>Edit your property successfully</p>
        <p></p>
      </Modal>
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
        <Select
          placeholder="Please select a property type"
          size={'large'}
          //initialValue={property?.roomType}
        >
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
            <Col span={8}>
              <Checkbox value="smokingAllowed" style={{ lineHeight: '32px' }}>
                Smoking Allowed
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="Street Number"
        model="multiple"
        name="streetNumber"
        rules={[
          {
            required: true,
            message: 'Please Input Steert number!',
          },
        ]}
      >
        <Input style={{ height: 40 }} type="number" />
      </Form.Item>
      <Form.Item
        label="Street"
        model="multiple"
        name="streetName"
        rules={[
          {
            required: true,
            message: 'Please Input Street name!',
          },
        ]}
      >
        <Input style={{ height: 40 }} />
      </Form.Item>
      <Form.Item
        label="City"
        mode="multiple"
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input city!',
          },
        ]}
      >
        <Input style={{ height: 40 }} />
      </Form.Item>
      <Form.Item
        label="State"
        mode="multiple"
        name="state"
        rules={[
          {
            required: true,
            message: 'Please input state',
          },
        ]}
      >
        <Input style={{ height: 40 }} />
      </Form.Item>
      <Form.Item
        label="Postcode"
        mode="multiple"
        name="postCode"
        rules={[
          {
            required: true,
            message: 'Please input postcode!',
          },
        ]}
      >
        <Input style={{ height: 40 }} type="number" />
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
      <Form.Item label="Available Since" name="availableDate">
        <DatePicker picker="date" placeholder="Choose your date" />
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
      {images.length > 0 &&
        images.map((img, index) => (
          <img style={{ marginRight: 5 }} key={index} src={img} alt={index}></img>
        ))}
      {/* <Form.Item label="Pictures" name="propImage">
          <UploadImage setFiles={setFiles} />
        </Form.Item> */}
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
        <Button type="primary" htmlType="submit" size={'large'}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
