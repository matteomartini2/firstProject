import { MatTableDataSource } from '@angular/material/table';
import { project } from './../model/project';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDynamicComponent } from '../shared/components/modal-dynamic/modal-dynamic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  project: project[];
  i: number = -1;
  searchProject : string = '';

  displayedColumns: string[] = [
    'nome',
    'stato',
    'tipoAttivita',
    'businessUnit',
    'cliente',
    'dataInizio',
    'dataFine',
    'ACTION',
  ];

  constructor(public dialog: MatDialog) {
    this.project = [
      {
        id: this.returnID(),
        nome: 'numero 1',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Qualcosaltro',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Agile project figo',
        stato: 'Qualcosa',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.returnID(),
        nome: 'Proa matteo',
        stato: 'Non disponibile',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Dst',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
    ];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.project);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  returnID(): number {
    this.i++;
    return this.i;
  }

  editProject(projectE: project) {}

  deleteProject(projectId : number) {
    const INDEX = this.dataSource.data.findIndex((e) => e.id === projectId);
    if(INDEX !== -1)
      this.dataSource.data.splice(INDEX, 1);
    console.log('Indice eliminato : ', INDEX);
    this.dataSource.data = [...this.dataSource.data];
  }

  dialogDelete(element) {
    console.log('element', element);
    let dialogRef = this.dialog.open(ModalDynamicComponent, {
      data: { element, type: 'delete', mammt : "sort" }, //far passare più cose
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Sono nelle info');
        this.deleteProject(element.id);
      } else {
        console.log('Hai chiuso la modale');
      }
    });
  }

  searchInput(event) {
    this.searchProject = event;
  }

}
