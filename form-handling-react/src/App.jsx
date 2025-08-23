import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-10 items-center justify-center p-4">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
