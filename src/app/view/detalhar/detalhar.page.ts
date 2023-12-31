import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato: Contato;
  indice : number;
  nome: string;
  telefone: number;

  constructor(private actRoute : ActivatedRoute,
    private contatoService: ContatoService) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]) {
        this.indice = parametros["indice"];
        this.contato = 
        this.contatoService.obterPorIndice(this.indice);
      }
    })
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;


    console.log(this.contato);
  }

}
