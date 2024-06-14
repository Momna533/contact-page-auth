import AuthPage from "./AuthPage";
import ContactPage from "./ContactPage";

const App = () => {
  const correctPassword = "secret123";
  return (
    <AuthPage correctPassword={correctPassword}>
      <ContactPage />
    </AuthPage>
  );
};

export default App;
