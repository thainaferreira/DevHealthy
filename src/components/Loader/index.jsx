import { Loading } from "./style";

const Loader = () => {
  return (
    <Loading
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Loader;
