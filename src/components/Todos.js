import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function Todos({
  name, done, onToggle, onTrash, onRename,
}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`todo ${done ? 'done' : ''}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div
          className="todo__name"
          onClick={() => setEditMode((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setEditMode((prev) => !prev);
            }
          }}
        >
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(ev) => onRename(ev.target.value)}
          />
        </form>
      )}

      <button className="trash__icon" onClick={onTrash} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.3rem"
          viewBox="0 0 512 512"
        >
          <path d="M437.016,75.492h-53.478V50.062C383.538,22.408,361.129,0,332.016,0H179.989c-29.113,0-51.522,22.408-51.522,50.062v25.429H74.504   c-18.918,0-34.277,15.36-34.277,34.277v29.713c0,18.918,15.36,34.277,34.277,34.277h7.03l15.067,341.028   c1.534,34.908,31.018,62.801,66.022,62.801h179.805c35.004,0,64.488-27.893,66.022-62.801l15.067-341.028h7.03   c18.918,0,34.277-15.36,34.277-34.277v-29.713C471.293,90.852,455.933,75.492,437.016,75.492z M229.29,50.062   c0-12.109,8.038-22.13,18.914-22.13h152.027c10.875,0,18.914,10.021,18.914,22.13v25.429H229.29V50.062z M404.512,436.617   c-0.938,21.209-18.78,38.099-40.099,38.099H147.587c-21.319,0-39.161-16.89-40.099-38.099L92.327,134.469h327.355   L404.512,436.617z" />
          <path d="M170.012,421.817c9.301,0,16.834-7.533,16.834-16.834V203.737c0-9.301-7.533-16.834-16.834-16.834   c-9.301,0-16.834,7.533-16.834,16.834v201.245C153.178,414.284,160.711,421.817,170.012,421.817z" />
          <path d="M250.006,421.817c9.301,0,16.834-7.533,16.834-16.834V203.737c0-9.301-7.533-16.834-16.834-16.834   c-9.301,0-16.834,7.533-16.834,16.834v201.245C233.172,414.284,240.705,421.817,250.006,421.817z" />
          <path d="M329.999,421.817c9.301,0,16.834-7.533,16.834-16.834V203.737c0-9.301-7.533-16.834-16.834-16.834   c-9.301,0-16.834,7.533-16.834,16.834v201.245C313.165,414.284,320.698,421.817,329.999,421.817z" />
        </svg>
      </button>

    </div>
  );
}

Todos.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onTrash: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
};

export default Todos;
