import DataTable from "compoents/DataTable";
import Footer from "compoents/Footer";
import NavBar from "compoents/NavBar";

function App() {
  return (
    <><NavBar />
      <div className="container">

        <h1 className="text-primary">Olá mundo!</h1>

        <DataTable />

      </div>

      

      <Footer />
    </>
  );
}

export default App;
