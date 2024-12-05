import { Formik, FormikConfig, Form as FormikForm, FormikValues } from "formik";

interface FormProps extends FormikConfig<FormikValues> {
  formClassName?: string;
}

/**
 * Wrapper for Formik `Form` with `onSubmit` handler. Uses Formik context.
 */
export default function Form({
  children,
  initialValues,
  validationSchema,
  enableReinitialize,
  onSubmit,
  formClassName = "",
  ...rest
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
      {...rest}
    >
      <FormikForm
        className={`needs-validation w-100 ${formClassName}`}
        noValidate={false}
      >
        {children as JSX.Element}
      </FormikForm>
    </Formik>
  );
}
