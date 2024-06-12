import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Image404 from "../assets/404.png";

const NotFoundPage = () => {
  return (
    <div className="w-full h-dvh flex items-center flex-col gap-2 pt-16">
      <img src={Image404} alt="not found" width={500} />
      <Button>
        <Link to="/">Go back to Home page</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
