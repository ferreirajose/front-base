import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Publicacao } from './publicacao.interface';
import { PublicacaoService } from './publicacao.service';

@Component({
  selector: 'app-gerenciar-publicacao',
  templateUrl: './gerenciar-publicacao.component.html',
  styleUrls: ['./gerenciar-publicacao.component.scss'],
  providers:[ PublicacaoService]
})
export class GerenciarPublicacaoComponent implements OnInit {

  show = false;

  filterForm!: FormGroup;
  situacaoOptions = [
    { label: 'Ativo', value: 'ativo' },
    { label: 'Inativo', value: 'inativo' }
  ];
  tipoEdicaoOptions = [
    { label: 'Normal', value: 'normal' },
    { label: 'Especial', value: 'especial' }
  ];
  atosOptions = [
    { label: 'Ato 1', value: 'ato1' },
    { label: 'Ato 2', value: 'ato2' },
    { label: 'Ato 3', value: 'ato3' }
  ];

  publicacoes: any[] = []

  constructor(private fb: FormBuilder, private publicacaoService: PublicacaoService) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      codigo: [null],
      atos: [null],
      dataPublicacao: [null],
      situacao: [null],
      usuarioOuMatricula: [''],
      dataRecebimento: [null],
      tipoEdicao: [null]
    });

    this.publicacaoService.getPublicacoes().subscribe({
      next: (data) => {
        this.publicacoes = data;
      },
      error: (error) => {
        console.error('Erro ao buscar publicações:', error);
      }
    });

  }

  onFilter(): void {
    // Implementar a lógica de filtro
    console.log(this.filterForm.value);
  }

  onClear(): void {
    this.filterForm.reset();
  }

  toggleFiltro() {
    this.show = !this.show
  }

  onVisualizar(publicacao: Publicacao) {}

  onRemover(publicacao: Publicacao) {}

  onRelogio(publicacao: Publicacao) {}
}
