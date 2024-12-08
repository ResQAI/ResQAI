type TProps = {
  label?: string;
  content?: string | number;
};

const Text: React.FC<TProps> = ({ label, content }) => {
  return (
    <div className="flex flex-row items-center gap-2 my-1 justify-between">
      {label ? (
        <p className="text-sm font-semibold text-neutral-900">{label}</p>
      ) : null}
      <p className="text-sm text-neutral-700">{content}</p>
    </div>
  );
};

export default Text;
