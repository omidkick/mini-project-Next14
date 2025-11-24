function RHFSelect({ label, name, register, options, isRequired, errors, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700 font-medium">
        {label} {isRequired && <span className="text-error ml-1">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textField__input"
        defaultValue=""
      >
        <option value="" disabled hidden>
          {placeholder || `Select ${label}`}
        </option>

        {options.map((option) => (
          <option key={option.value || option.code || option.id} value={option.value || option.code}>
            {option.label || option.name}
          </option>
        ))}
      </select>
      {/* Handle validation's error */}
      {errors?.[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;