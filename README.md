
# Projeto Angular

Este projeto utiliza Angular e Node.js para criar uma aplicação com recursos avançados de rotas, módulos e componentes reutilizáveis.

## Requisitos

- Link [Angular CLI](https://github.com/angular/angular-cli) 18.2.11
- Link [Node.js](https://nodejs.org/pt/download/package-manager) 18.19.1

## Instalação

1. Clone o repositório:

   ```bash
   git clone git@git.tce.pegdsi/tce-frontend-base.git ssh
   git clone https://git.tce.pe/gdsi/tce-frontend-base.git https
   cd tce-frontend-base
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Scripts de Inicialização

- **Ambiente de Desenvolvimento**:

   ```bash
   npm run start
   ```

   Este comando inicia a aplicação em modo de desenvolvimento.

- **Ambiente de Produção**:

   ```bash
   npm run build
   npm run start:prod
   ```

   O comando `build` gera a versão otimizada para produção, e `start:prod` inicia a aplicação com a configuração de produção.

## Estrutura de Pastas

```plaintext
├── generate-env.js              = Gera variáveis de ambiente automaticamente
├── ler-diretorios.js            = Script para listar diretórios e gerar documentação
├── ngsw-config.json             = Configuração para o Service Worker no Angular
├── proxy.conf.js                = Arquivo de configuração do proxy para requisições
├── public                       = Diretório público da aplicação
│   ├── icons                    = Ícones para a aplicação
│   │   ├── icon-128x128.png     = Ícone de 128x128 pixels
│   │   ├── icon-144x144.png     = Ícone de 144x144 pixels
│   │   ├── icon-152x152.png     = Ícone de 152x152 pixels
│   │   ├── icon-192x192.png     = Ícone de 192x192 pixels
│   │   ├── icon-384x384.png     = Ícone de 384x384 pixels
│   │   ├── icon-512x512.png     = Ícone de 512x512 pixels
│   │   ├── icon-72x72.png       = Ícone de 72x72 pixels
│   │   ├── icon-96x96.png       = Ícone de 96x96 pixels
│   ├── manifest.webmanifest     = Manifesto da aplicação para dispositivos móveis
├── src                          = Código-fonte da aplicação
│   ├── app                      = Diretório principal da aplicação
│   │   ├── app-routing.module.ts = Arquivo de rotas do módulo app
│   │   ├── app.component.html   = Template do componente principal
│   │   ├── app.component.scss   = Estilos do componente principal
│   │   ├── app.component.spec.ts = Testes do componente principal
│   │   ├── app.component.ts     = Classe do componente principal
│   │   ├── app.module.ts        = Módulo principal da aplicação
│   │   ├── core                 = Diretório para recursos core
│   │   │   ├── guards           = Diretório para guardas de rotas
│   │   │   │   ├── auth.gaurd.ts = Guarda de autenticação
│   │   │   │   ├── interceptor  = Diretório para interceptadores HTTP
│   │   ├── features             = Diretório para funcionalidades principais
│   │   │   ├── crud             = Exemplo de módulo de CRUD
│   │   │   │   ├── crud-routing.module.ts = Rotas do módulo CRUD
│   │   │   │   ├── crud.component.html = Template do componente CRUD
│   │   │   │   ├── crud.component.ts = Lógica do componente CRUD
│   │   │   │   ├── crud.module.ts = Módulo CRUD
│   │   │   │   ├── product-type.ts = Tipo de dados para produtos
│   │   │   │   ├── product.service.ts = Serviço para produtos
│   │   │   ├── demo              = Módulo de exemplo
│   │   ├── shared                = Diretório para componentes, serviços e layouts compartilhados
│   │   │   ├── enums             = Enumerações
│   │   │   │   ├── platform.enum.ts = Enums de plataforma
│   │   │   ├── layout            = Diretório para layout e componentes de UI
│   │   │   │   ├── app.footer.component.html = Footer do layout
│   │   ├── pages                 = Diretório para páginas da aplicação
│   │   ├── services              = Diretório para serviços compartilhados
│   │   ├── shared.module.ts      = Módulo compartilhado
│   │   ├── types                 = Diretório para tipos compartilhados
│   │   │   ├── use.type.ts       = Tipos para uso global
│   │   ├── utils                 = Funções e utilitários gerais da aplicação
│   │   │   ├── keycloak-init.ts  = Inicialização do Keycloak para autenticação
```

## Comandos CLI Úteis

Para criar novos elementos, utilize o Angular CLI, especificando o caminho apropriado dentro da estrutura de `src/app/`:

- **Criar um novo módulo** (dentro da pasta `features`):

  ```bash
  ng generate module features/novo-modulo
  ```

- **Criar um novo pipe** (dentro da pasta `shared`):

  ```bash
  ng generate pipe shared/pipes/novo-pipe
  ```

- **Criar uma nova diretiva** (dentro da pasta `shared`):

  ```bash
  ng generate directive shared/directives/nova-diretiva
  ```

- **Criar um novo serviço** (dentro da pasta `services`):

  ```bash
  ng generate service services/novo-servico
  ```

Esses comandos ajudam a manter a organização e facilitam a reutilização de componentes, serviços, diretivas e pipes entre as funcionalidades do projeto.


## Utilizando Guardas de Rotas

O Angular oferece diferentes tipos de guardas de rotas para proteger o acesso a módulos ou componentes específicos. Dois dos guardas mais comuns são:

### 1. `canActivate`
Este guarda impede o acesso a uma rota, garantindo que o usuário atenda a determinadas condições antes de acessar o componente ou módulo. Ele é útil para restringir o acesso a páginas específicas, verificando a autenticação ou permissões.

### 2. `canLoad`
Este guarda impede que um módulo seja carregado (lazy-loaded) até que as condições especificadas sejam atendidas. `canLoad` é útil para otimizar o carregamento da aplicação, evitando que módulos protegidos sejam carregados até que a permissão seja verificada.

### Diferença entre `canActivate` e `canLoad`

- **`canActivate`**: É executado sempre que uma rota é acessada, mesmo que o módulo já tenha sido carregado. Ele protege o acesso a uma rota que já está carregada na aplicação.
- **`canLoad`**: É executado apenas na primeira vez em que o módulo é carregado por meio do carregamento preguiçoso (lazy loading). Ele impede que o módulo seja carregado se a condição de permissão não for atendida.

### Exemplo de Rotas Protegidas e Abertas

Aqui está um exemplo de configuração de rotas com `canActivate` e `canLoad`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '@shared/layout/app.layout.component';
import { NotfoundComponent } from '@shared/pages/notfound/notfound.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGuard],  // Protegido com canActivate
        canLoad: [AuthGuard]       // Protegido com canLoad
      },
      {
        path: 'crud',
        loadChildren: () => import('./features/crud/crud.module').then(m => m.CrudModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./features/calendar/calendar.module').then(m => m.CalendarModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'notfound', component: NotfoundComponent }, // Rota aberta
  { path: '**', redirectTo: '/notfound' }              // Rota aberta para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Neste exemplo:

- **Rotas protegidas**: `dashboard` está protegido tanto por `canActivate` quanto por `canLoad` com o guarda `AuthGuard`.
- **Rotas abertas**: `notfound` e a rota curinga (`**`) estão disponíveis publicamente e não têm guardas aplicados.

Essa configuração permite que apenas usuários autorizados acessem a rota `dashboard`, enquanto as demais rotas (como `crud` e `calendar`) permanecem abertas. 

Para implementar esses guardas, crie um serviço `AuthGuard` implementando a interface `CanActivate` e/ou `CanLoad`.

---


## Exemplos de Serviços no Angular

No Angular, os serviços podem usar `Promise` ou `Observable` para lidar com operações assíncronas. Aqui estão exemplos de implementação, explicações sobre a diferença entre os dois e exemplos de conversão entre `Promise` e `Observable`.

### [NÃO USE toPromise()](#por-que-topromise-foi-depreciado)
Para entender por que você não deve usar `toPromise()`, veja a seção abaixo.
### [NÃO USE toPromise()](#por-que-topromise-foi-depreciado)
Para entender por que você não deve usar `toPromise()`, veja a seção abaixo.
### [NÃO USE toPromise()](#por-que-topromise-foi-depreciado)
Para entender por que você não deve usar `toPromise()`, veja a seção abaixo.


### Diferença entre `Promise` e `Observable`

- **Promise**: Lida com uma única execução assíncrona e é resolvida apenas uma vez. Ideal para operações que ocorrem apenas uma vez, como uma chamada HTTP simples.
- **Observable**: Lida com múltiplos valores ao longo do tempo e pode ser cancelado. Ideal para fluxos de dados contínuos, como eventos de interface do usuário ou WebSocket.

### Serviço com `Promise`

Aqui está um exemplo de serviço que usa `Promise` para buscar dados de produtos:

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-type';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Promise<Product[]> {
        return this.http.get<{ data: Product[] }>('assets/data/products.json')
            .toPromise()
            .then(res => res.data);
    }
}
```

### Serviço com `Observable`

Neste exemplo, usamos `Observable` em vez de `Promise`. Isso permite que o serviço forneça fluxos de dados reativos.

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-type';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<{ data: Product[] }>('assets/data/products.json')
            .pipe(map(res => res.data));
    }
}
```

### Conversão de `Promise` para `Observable`

Se você tiver um método que retorna uma `Promise`, é possível convertê-lo em um `Observable` usando `from` do RxJS.

```typescript
import { from, Observable } from 'rxjs';

getProductsAsObservable(): Observable<Product[]> {
    return from(this.getProducts()); // converte Promise para Observable
}
```

### Conversão de `Observable` para `Promise`

Caso você tenha um `Observable`, pode convertê-lo para uma `Promise` usando o método `toPromise()`.

```typescript
getProductsAsPromise(): Promise<Product[]> {
    // NÃO SEU toPromise()
    return this.getProducts().toPromise(); // converte Observable para Promise 
}
```

Esses exemplos mostram como usar `Promise` e `Observable` de forma flexível em um serviço Angular para atender a diferentes cenários e necessidades.

---


### Uso do `firstValueFrom` em vez de `toPromise()`

O método `toPromise()` foi **depreciado** no RxJS 7 e versões posteriores. A abordagem recomendada agora é usar `firstValueFrom` ou `lastValueFrom`, dependendo de qual valor do `Observable` você deseja obter (primeiro ou último).

#### Exemplo com `firstValueFrom`

Aqui está um exemplo de como substituir `toPromise()` por `firstValueFrom`:

```typescript
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-type';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    async getProducts(): Promise<Product[]> {
        return firstValueFrom(
            this.http.get<{ data: Product[] }>('assets/data/products.json').pipe(
                map(res => res.data)
            )
        );
    }
}
```

#### Por que `toPromise()` foi depreciado?

A depreciação de `toPromise()` ocorreu para:

1. **Simplificar e Padronizar**: A API `firstValueFrom` e `lastValueFrom` oferece uma maneira mais clara e intencional de obter valores de `Observable`.
2. **Evitar Ambiguidades**: `toPromise()` não deixava explícito se o usuário queria o primeiro valor, o último valor ou esperar que o `Observable` completasse. Com `firstValueFrom` e `lastValueFrom`, a intenção é mais explícita, promovendo boas práticas no uso de streams reativos.

Esses métodos ajudam a criar código mais claro e gerenciável, especialmente em casos onde os `Observables` representam fluxos contínuos de dados.

---
