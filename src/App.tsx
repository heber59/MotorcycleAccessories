import { AppLayout } from "./components/generals/appLayout";
import IntroScreen from "./components/generals/introScreen";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <IntroScreen />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </>
  );
}
