type TProps = {
  children: React.ReactNode;
};

const EmptyState: React.FC<TProps> = ({ children }) => {
  return (
    <div className="w-full h-[80vh] border border-neutral-100 grid place-content-center">
      {children}
    </div>
  );
};

export default EmptyState;
