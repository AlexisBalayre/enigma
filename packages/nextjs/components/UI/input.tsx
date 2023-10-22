type InputProps = {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    classes?: string;
  };
  
  export default function Input({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    classes,
  }: InputProps) {
    return (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`w-full rounded-md border border-blue2 bg-blue4 px-4.5 py-5 text-black outline-none placeholder:text-white placeholder:opacity-50 focus:border-blue2 xl:rounded-lg xl:px-6 xl:py-4.5 ${classes}`}
      />
    );
  }
