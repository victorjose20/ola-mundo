import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";


function App() {
  return (
    <BrowserRouter>
      <Menu/>
    
      <Routes>


        <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="Sobremim" element={<SobreMim />} />
        </Route>


        
        <Route  path="*" element={<div>Página não encontrada</div>}/>

      </Routes>

      <Rodape/>

    </BrowserRouter>
    
  );
}

export default App;
