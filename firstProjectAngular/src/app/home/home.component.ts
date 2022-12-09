import { MatTableDataSource } from '@angular/material/table';
import { project } from './../model/project';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<project>;
  project: project[];
  i: number = 1;

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
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Prospect',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Qualcosaltro',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
      {
        id: this.projectID(),
        nome: 'Agile project figo',
        stato: 'Qualcosa',
        tipoAttivita: 'TM',
        businessUnit: 'Loremipsum',
        cliente: 'Alma Viva',
        dataInizio: new Date('2022-06-09'),
        dataFine: new Date('2022-10-25'),
      },
    ];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.project);

    console.log('project', this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  projectID(): number {
    this.i++;
    return this.i;
  }

  editProject(projectE: project) {}

  deleteProject(projectId) {
    const INDEX = this.project.findIndex((e) => {
      e.id === projectId;
    });
    this.dataSource.data.splice(INDEX, 1);
    this.dataSource.data = [...this.dataSource.data];
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: '../shared/components/dialog/dialog.component.html',
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}
