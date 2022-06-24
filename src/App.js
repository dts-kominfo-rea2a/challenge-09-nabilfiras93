import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const contactComponents = contacts.map((contact, idx) => {
    return <Contact data={contact} key={idx} />;
  });
  return (
    <div className="App">
      <Header />
      {contactComponents}
    </div>
  );
};

export default App;
