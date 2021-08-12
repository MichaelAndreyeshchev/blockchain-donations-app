import React, { useState } from 'react';
import style from './CustomInput.module.css';

const CustomInput = ({
  cancellor,
  parentId,
  value,
  edit,
  submit,
  handleCancel,
}) => {
  const [text, setText] = useState(value);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form>
      <div className={style.form}>
        <div className={style.row}>
          {' '}
          <img
            src='https://ui-avatars.com/api/name=Random&background=random'
            style={{ width: 80, height: 80, borderRadius: '100px' }}
          />
          <div className={style.row}>
            <div className={style['arrow-left']}></div>
            <div className={style['input-div']}>
              <span className={style['input-name']}>Random Person</span>
              <textarea
                rows='2'
                className={style['input-box']}
                type='text'
                placeholder='Type your reply here.'
                component='input'
                value={text}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className={style['btn-div']}>
          <button
            className={style['post-btn']}
            onClick={() => submit(cancellor, text, parentId, edit, setText)}
            type='submit'
            disabled={!text}
          >
            Post
          </button>
          <button
            className={style['cancel-btn']}
            onClick={() => handleCancel(cancellor, edit)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CustomInput;
