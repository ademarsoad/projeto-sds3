import BarChart from "compoents/BarChart";
import DataTable from "compoents/DataTable";
import DonutsBars from "compoents/DonutsBar";
import Footer from "compoents/Footer";
import NavBar from "compoents/NavBar";

const DashBoard = () => {
    return (
        <><NavBar />
            <div className="container">

                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas Vendas</h5>
                        <DonutsBars />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas </h2>

                </div>

                <DataTable />

            </div>



            <Footer />
        </>
    );
}

export default DashBoard;
