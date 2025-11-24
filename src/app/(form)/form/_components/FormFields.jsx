import RHFTextField from "@/ui/RHFTextField";
import RHFTextarea from "@/ui/RHFTextarea";
import RHFSelect from "@/ui/RHFSelect";
import RadioInput from "@/ui/RadioInput";

export default function FormFields({
  register,
  errors,
  countries,
  selectedGender,
  handleGenderChange,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <RHFTextField
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Email */}
      <RHFTextField
        label="Email Address"
        name="email"
        type="email"
        placeholder="your.email@example.com"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Age */}
      <RHFTextField
        label="Age"
        name="age"
        type="number"
        placeholder="Enter your age"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Phone */}
      <RHFTextField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="1234567890"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Address */}
      <div className="md:col-span-2">
        <RHFTextField
          label="Street Address"
          name="address"
          placeholder="123 Main Street, Apt 4B"
          register={register}
          isRequired
          errors={errors}
          dir="ltr"
        />
      </div>

      {/* City */}
      <RHFTextField
        label="City"
        name="city"
        placeholder="Enter your city"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Zip Code */}
      <RHFTextField
        label="Zip Code"
        name="zipCode"
        placeholder="12345"
        register={register}
        isRequired
        errors={errors}
        dir="ltr"
      />

      {/* Country */}
      <div className="md:col-span-2">
        <RHFSelect
          label="Country"
          name="country"
          options={countries}
          placeholder="Select your country"
          register={register}
          isRequired
          errors={errors}
        />
      </div>

      {/* Gender - Radio Buttons */}
      <fieldset className="md:col-span-2">
        <legend className="mb-3 block text-secondary-700 font-medium">
          Gender <span className="text-error ml-1">*</span>
        </legend>
        <div className="flex flex-wrap gap-6">
          <RadioInput
            id="male"
            name="gender"
            value="male"
            label="Male"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
          <RadioInput
            id="female"
            name="gender"
            value="female"
            label="Female"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
          <RadioInput
            id="other"
            name="gender"
            value="other"
            label="Other"
            checked={selectedGender === "other"}
            onChange={handleGenderChange}
          />
        </div>
        <input type="hidden" {...register("gender")} />
        {errors.gender && (
          <span className="text-red-600 block text-xs mt-2" role="alert">
            {errors.gender.message}
          </span>
        )}
      </fieldset>

      {/* Bio - Textarea */}
      <div className="md:col-span-2">
        <RHFTextarea
          label="Bio (Optional)"
          name="bio"
          placeholder="Tell us about yourself..."
          rows={4}
          register={register}
          errors={errors}
          dir="ltr"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="md:col-span-2">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            {...register("terms")}
            className="mt-1 w-4 h-4 text-primary-900 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2"
            aria-describedby="terms-error"
          />
          <label
            htmlFor="terms"
            className="text-secondary-700 text-sm cursor-pointer"
          >
            I agree to the terms and conditions{" "}
            <span className="text-error">*</span>
          </label>
        </div>
        {errors.terms && (
          <span
            id="terms-error"
            className="text-red-600 block text-xs mt-2"
            role="alert"
          >
            {errors.terms.message}
          </span>
        )}
      </div>
    </div>
  );
}
