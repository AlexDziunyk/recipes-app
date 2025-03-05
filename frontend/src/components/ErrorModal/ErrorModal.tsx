import Link from "next/link";
import "./style.scss";

const ErrorModal = () => {
  return (
    <div className="error-modal__wrapper">
      <div className="error-modal">
        <h2>Something went wrong</h2>
        <Link href={"/recipe/all"}>
          <button>Return to the main page</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorModal;
