import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public formGroup: FormGroup;

  public filtrado = false
  public $filtro: Observable<Projects[]> | undefined;

  public projects: Projects[] = [
    {
      title: 'T-med',
      linkGithub: 'https://github.com/majutestoni/tmed-spring-angular',
      linkProject: '',
      description: 'Projeto desenvolvimento com Angulare SpringBoot',
      tecnologies: ['Angular', 'Java', 'Css'],
    },
    {
      title: 'Api em Node',
      linkGithub: 'https://github.com/majutestoni/webapi-node',
      linkProject: '',
      description: 'Rest api feita em node modelo crud',
      tecnologies: ['Express', 'TypeOrm', 'Mysql'],
    },
    {
      title: 'Web Scraping',
      linkGithub: 'https://github.com/majutestoni/web-scraping',
      linkProject: '',
      description: 'Web Scraping feito em node',
      tecnologies: ['Express', 'Puppeteer', 'Mysql'],
    },
    {
      title: 'Todolist em Angular',
      linkGithub: 'https://github.com/majutestoni/todolist-angular-two.git',
      linkProject: 'https://majutestoni.github.io/todolist-angular-two/',
      description: 'Todo list feito em Angular',
      tecnologies: ['Angular', 'Botstrap'],
    },
    {
      title: 'Respositorio da faculdade',
      linkGithub: 'https://github.com/majutestoni/Faculdade.git',
      linkProject: '',
      description: 'Respositorio de algumas materias da faculdade',
      tecnologies: ['Java', 'MariaDB'],
    },
    {
      title: 'Single page de login',
      linkGithub: 'https://github.com/majutestoni/login.git',
      linkProject: 'https://majutestoni.github.io/login/',
      description: 'Primeira single page de login em javascript',
      tecnologies: ['Javascritp', 'Localstorge'],
    },
    {
      title: 'NLW-Spacetime',
      linkGithub: 'https://github.com/majutestoni/nlw-spacetime.git',
      linkProject: '',
      description: 'Repositorio do NLW da rockesetat',
      tecnologies: ['Nextjs', 'Node', 'Fastify'],
    },
  ];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      pesquisa: [''],
    });

    this.$filtro = this.formGroup.get('pesquisa')?.valueChanges.pipe(
      debounceTime(200),
      map((value) => value.trim()),
      distinctUntilChanged(),
      map((res) => this.searchValues(res))
    );
  }

  searchValues(res: string) {
    return this.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(res.toLocaleLowerCase()) == true
    );
  }
}
export interface Projects {
  title: string;
  linkGithub: string;
  linkProject: string;
  description: string;
  tecnologies: string[];
}
