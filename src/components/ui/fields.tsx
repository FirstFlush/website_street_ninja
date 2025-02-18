import { useId } from "react";
import { Controller } from "react-hook-form";
import clsx from "clsx";


const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-25 px-3 py-2 text-foreground placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-3 focus:ring-primary/50 sm:text-sm";

const errorBorder = "border-red-500 focus:border-red-500 focus:ring-red-500";
const errorMessage = "absolute text-sm text-red-500";


function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="mb-1 block text-sm font-semibold text-gray-700">
      {children}
    </label>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  control: any;
  className?: string;
}

export function TextField({
  label,
  name,
  control,
  className,
  ...props
}: FormFieldProps & Omit<React.ComponentPropsWithoutRef<"input">, "id">) {
  let id = useId();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          <Label id={id}>{label}</Label>
          <input
            {...field}
            id={id}
            className={clsx(
              formClasses,
              error && errorBorder
              
            )}
            {...props}
          />
          {error && <p className={errorMessage}>{error.message}</p>}
        </div>
      )}
    />
  );
}


export function SelectField({
  label,
  name,
  control,
  className,
  children,
  ...props
}: FormFieldProps & Omit<React.ComponentPropsWithoutRef<"select">, "id"> & { children: React.ReactNode }) {
  let id = useId();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          <Label id={id}>{label}</Label>
          <select
            {...field}
            id={id}
            className={clsx(
              formClasses,
              "pr-8",
              error && errorBorder
            )}
            {...props}
          >
            {children}
          </select>
          {error && <p className={errorMessage}>{error.message}</p>}
        </div>
      )}
    />
  );
}


export function TextareaField({
  label,
  name,
  control,
  className,
  ...props
}: FormFieldProps & Omit<React.ComponentPropsWithoutRef<"textarea">, "id">) {
  let id = useId();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          <Label id={id}>{label}</Label>
          <textarea
            {...field}
            id={id}
            className={clsx(
              formClasses,
              "resize-none h-24", // Prevents resizing, sets default height
              error && errorBorder
            )}
            {...props}
          />
          {error && <p className={errorMessage}>{error.message}</p>}
        </div>
      )}
    />
  );
}
