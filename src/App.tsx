import { AppLayout } from "./components/app/appLayout";
import IntroScreen from "./components/app/introScreen";
import { CartProvider } from "./context/cartContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <CartProvider>
      <IntroScreen />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </CartProvider>
  );
}
