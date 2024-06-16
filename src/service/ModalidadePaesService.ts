import { ModalidadePaes } from './../model/ModalidadePaes';
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";

export class ModalidadePaesService{
    modalidadePaesRepository:ModalidadePaesRepository;

    constructor(){
        this.modalidadePaesRepository = ModalidadePaesRepository.getInstance();
    }

    create(nome:string, vegano:boolean=false): ModalidadePaes{
        if(!nome){
            throw new Error("Dados insuficientes");
        }
        if(this.modalidadePaesRepository.searchByName(nome)){
            throw new Error("Já existe uma modalidade com esse nome")
        }
        let modalidade = new ModalidadePaes(nome, vegano);
        this.modalidadePaesRepository.create(modalidade);
        return modalidade;
    }

    findId(id:number) {
        const modalidade = this.modalidadePaesRepository.searchById(id);
        if(!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }

    findByName(name:string) {
        const modalidade = this.modalidadePaesRepository.searchByName(name);
        if(!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }

    getAll(): ModalidadePaes[] {
        return this.modalidadePaesRepository.allModalities();
    }

    update(id:number, name?:string, vegan?:boolean) {
        const modality = this.modalidadePaesRepository.searchById(id);
        if(!modality){
            throw new Error("Essa modalidade não está cadastrada");
        }
        let newModality = modality;
        if (name !== undefined) newModality.setName(name);
        if (vegan !== undefined) newModality.setIsVegan(vegan);

        return this.modalidadePaesRepository.update(newModality);
        
    }

    delete(id:number) {
        let modalidade = this.modalidadePaesRepository.searchById(id);
        if (!modalidade)
            throw new Error("Modalidade não encontrada");
        this.modalidadePaesRepository.delete(modalidade);
    }

}