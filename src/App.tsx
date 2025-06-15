import { AppLayout } from "./components/app/appLayout";
import IntroScreen from "./components/app/introScreen";
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
