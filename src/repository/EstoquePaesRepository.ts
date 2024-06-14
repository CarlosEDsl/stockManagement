import { EstoquePaes } from "../model/EstoquePaes";
import { ModalidadePaes } from "../model/ModalidadePaes";

export class EstoquePaesRepository{

    estoqueLista: EstoquePaes[] = []

    createStockCount(estoqueLista:EstoquePaes){
        this.estoqueLista.push(estoqueLista);
    }

    searchById(id:number):EstoquePaes|undefined{
        return this.estoqueLista.find(estoqueLista => estoqueLista.getId() === id);
    }

    searchByModalidade(modalidade:ModalidadePaes):EstoquePaes|undefined{
        return this.estoqueLista.find(estoqueLista => estoqueLista.getModalidade() === modalidade);
    }

    allStocks():EstoquePaes[]{
        return this.estoqueLista;
    }

    updateStock(estoqueItem:EstoquePaes):EstoquePaes{
        const index = this.estoqueLista.indexOf(estoqueItem);
        if(index !== -1){
            this.estoqueLista[index] = estoqueItem;
        }
        return this.estoqueLista[index];
    }

    deleteStock(estoque:EstoquePaes){
        const index = this.estoqueLista.indexOf(estoque);
        if(index !== -1){
            this.estoqueLista.splice(index);
        }
    }
}