"use client";

function RadioInput({ id, name, value, onChange, checked, label }) {
  return (
    <div className="flex items-center gap-x-3 text-secondary-600 group">
      <div className="relative">
        <input
          type="radio"
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`
            w-5 h-5 rounded-full border-2 cursor-pointer
            flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${
              checked
                ? "bg-primary-900 border-primary-900 shadow-lg shadow-primary-900/25"
                : "border-secondary-300 bg-white hover:border-primary-400"
            }
          `}
          onClick={() => onChange({ target: { value } })}
        >
          {checked && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
      </div>
      <label
        htmlFor={id}
        className={`
          cursor-pointer font-medium transition-colors duration-200
          ${checked ? "text-primary-900" : "text-secondary-600 group-hover:text-secondary-800"}
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default RadioInput;