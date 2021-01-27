import * as React from 'react';
import { FormEvent, useState } from 'react';

export type FormState = {
  title: string;
  content: string;
};
type FormProps = {
  submit: (form: FormState) => void;
};
export const Form: React.FC<FormProps> = ({ submit }) => {
  const [form, setForm] = useState<FormState>({
    title: '',
    content: '',
  });
  const clearForm = () => {
    setForm({
      title: '',
      content: '',
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(form);
    clearForm();
  };

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={form.title}
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                className="textarea"
                value={form.content}
                onChange={(e) => {
                  setForm({ ...form, content: e.target.value });
                }}
              />
            </div>
          </div>
          <button type="submit" className="button is-link">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
