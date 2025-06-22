import { useState, type ReactNode } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../generals/Shopbutton";
import { CartOrderDrawer } from "../../generals/cartOrderDrawer";
import { DropdownMenu } from "../../generals/dropDown";
import { productOptions } from "../../../data/appLayout/productsFilterConfig";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../generals/notification";
interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <nav
        className="flex items-center justify-between p-4 
  shadow border-b border-black/10 bg-white"
      >
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-xl  hover:text-blue-600">
            Inicio
          </Link>
          <DropdownMenu
            label="Productos"
            items={productOptions}
            onSelect={(item) => navigate(`/productos?categoria=${item}`)}
          />
        </div>
        <h1 className="text-3xl font-bold">
          Los mejores accesorios para tu moto
        </h1>

        <div className="flex items-center gap-10 text-sm">

          <div className="flex">
            <FaShoppingCart size={24} className="z-10" />
            <Notification />
          </div>

          <Button onClick={toggleModal}>ver tu pedido</Button>
          <FaUserCircle
            size={24}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          />
        </div>
      </nav>
      <main className="bg-gray-100">{children}</main>
      {showModal && (
        <CartOrderDrawer isOpen={showModal} onClose={toggleModal} />
      )}
    </div>
  );
};

export { AppLayout };
