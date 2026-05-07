import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setField, setErrors, setSubmitting, setSubmitted } from '../../../../store/formSlice';
import { useSubmitProFormMutation } from '../../../../services/proFormApi';
import Button from '../../../../components/Button';
import styles from './styles.module.scss';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  min?: number;
}

function Field({ id, label, type = 'text', value, onChange, error, disabled, min }: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        type={type}
        className={`${styles.input}${error ? ` ${styles.inputError}` : ''}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
        min={min}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

export default function ProForm() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((s) => s.proForm);
  const [submitProForm] = useSubmitProFormMutation();

  const handleChange =
    (field: 'firstName' | 'lastName' | 'email' | 'company' | 'licenses') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setField({ field, value: e.target.value }));
    };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field: 'acceptPolicy', value: e.target.checked }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.firstName.trim()) errors.firstName = 'Введите имя';
    if (!form.lastName.trim()) errors.lastName = 'Введите фамилию';
    if (!form.email.trim()) {
      errors.email = 'Введите email';
    } else if (!validateEmail(form.email)) {
      errors.email = 'Некорректный email';
    }
    if (!form.company.trim()) errors.company = 'Введите компанию';
    if (!form.licenses.trim()) {
      errors.licenses = 'Укажите количество';
    } else if (isNaN(Number(form.licenses)) || Number(form.licenses) <= 0) {
      errors.licenses = 'Укажите корректное число';
    }
    if (!form.acceptPolicy) errors.acceptPolicy = 'Необходимо согласие';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
      return;
    }
    dispatch(setSubmitting(true));
    try {
      await submitProForm({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        company: form.company,
        licenses: form.licenses,
      });
    } catch {
      // Mock: show success anyway
    } finally {
      dispatch(setSubmitting(false));
      dispatch(setSubmitted(true));
    }
  };

  return (
    <section className={styles.proForm} id="pro-form">
      <div className={styles.inner}>
        <div className={styles.card}>
          <img
            src="/images/pro/form-pattern.svg"
            alt=""
            aria-hidden="true"
            className={styles.pattern}
          />

          <h3 className={styles.title}>Обсудить использование OpenIDE Pro</h3>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.fields}>
              <Field
                id="firstName"
                label="Имя"
                value={form.firstName}
                onChange={handleChange('firstName')}
                error={form.errors.firstName}
                disabled={form.submitted}
              />
              <Field
                id="lastName"
                label="Фамилия"
                value={form.lastName}
                onChange={handleChange('lastName')}
                error={form.errors.lastName}
                disabled={form.submitted}
              />
              <Field
                id="email"
                label="Корпоративный email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                error={form.errors.email}
                disabled={form.submitted}
              />
              <Field
                id="company"
                label="Компания"
                value={form.company}
                onChange={handleChange('company')}
                error={form.errors.company}
                disabled={form.submitted}
              />
              <Field
                id="licenses"
                label="Количество лицензий"
                type="number"
                value={form.licenses}
                onChange={handleChange('licenses')}
                error={form.errors.licenses}
                disabled={form.submitted}
                min={1}
              />
            </div>

            <div className={styles.checkboxRow}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={form.acceptPolicy}
                  onChange={handleCheckbox}
                  disabled={form.submitted}
                />
                <span>
                  Я соглашаюсь на{' '}
                  <a
                    href="/privacy-policy/"
                    className={styles.policyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    обработку персональных данных
                  </a>
                </span>
              </label>
              {form.errors.acceptPolicy && (
                <p className={styles.checkboxError}>{form.errors.acceptPolicy}</p>
              )}
            </div>

            <div className={styles.submitRow}>
              {!form.submitted ? (
                <Button type="submit" disabled={form.submitting} className={styles.submitBtn}>
                  {form.submitting ? (
                    <span className={styles.spinner} aria-label="Загрузка" />
                  ) : (
                    'Отправить запрос'
                  )}
                </Button>
              ) : (
                <>
                  <Button type="button" variant="success" disabled className={styles.submitBtn}>
                    ✓ Отправлено
                  </Button>
                  <p className={styles.success}>Спасибо! Мы скоро свяжемся с вами.</p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
