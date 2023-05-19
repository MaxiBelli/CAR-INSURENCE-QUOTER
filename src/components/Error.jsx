import useQuoter from "../hooks/useQuoter";

const Error = () => {
  const { error } = useQuoter();

  return (
    <div className="border-2 border-red-400 text-center bg-red-100 py-3 text-red-700 text-lg font-bold">
      <p>{error}</p>
    </div>
  );
};

export default Error;
