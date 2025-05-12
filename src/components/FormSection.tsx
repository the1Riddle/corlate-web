
import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default FormSection;