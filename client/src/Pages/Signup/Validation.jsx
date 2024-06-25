import * as Yup from 'yup';

const Validation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name "),
  email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
  password: Yup.string().min(5).required("Please Enter Password"),
  phone: Yup.string().min(9).required("Please Enter Number"),
  userrole: Yup.string().required('Rol seçimi gerekli'),
});

export default Validation;


