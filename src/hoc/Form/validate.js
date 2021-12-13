const validate = (name, data) => {
  const { value } = data[name];
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
  const PHONE_REGEXP =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

  switch (name) {

    case 'email': {
      if (!value) {
        return 'Please input your email';
      }
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please input a valid email';
      }
      return '';
    }


    case 'password': {
      if (!value) {
        return 'Please enter your password';
      }
      return '';
    }
    default:
      return '';
  }
};

export default validate;
