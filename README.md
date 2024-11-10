
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
 
## Type, Interface e Class no TypeScript

No TypeScript, `type`, `interface` e `class` são três formas principais de definir a estrutura de objetos, tipos personalizados e classes. Cada uma delas possui suas vantagens e limitações.

### 1. O que é `type`?

No contexto do TypeScript, `type` permite criar tipos personalizados que podem ser usados para definir a estrutura de um objeto, unir tipos (uniões) ou criar alias para tipos complexos. Ele é versátil e pode combinar tipos primitivos, objetos e tipos compostos.

**Exemplo de uso de `type`:**

```typescript
type ProductID = number | string;
type Product = {
    id: ProductID;
    name: string;
    price: number;
};
```

### 2. O que é `interface`?

`interface` é usada para definir a estrutura de um objeto. No TypeScript, interfaces permitem estender outras interfaces, criando tipos complexos com herança. Geralmente, `interface` é usada para descrever a forma de objetos que são esperados em funções, classes, ou módulos.

**Exemplo de uso de `interface`:**

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
}
```

### 3. O que é `class`?

`class` no TypeScript permite a criação de objetos com propriedades e métodos, utilizando conceitos de orientação a objetos como herança, encapsulamento e polimorfismo. Classes podem implementar interfaces e também definir modificadores de acesso como `public`, `protected` e `private`.

**Exemplo de uso de `class`:**

```typescript
class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getPriceWithTax(taxRate: number): number {
        return this.price * (1 + taxRate);
    }
}
```

**Exemplo de uso de `class`:**

```typescript
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

// Definindo a classe Product como um modelo de dados
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

// Definindo a classe ProductService que usa o método getProducts
class ProductService {
    constructor(private http: HttpClient) {}

    async getProducts(): Promise<Product[]> {
        return firstValueFrom(
            this.http.get<{ data: Product[] }>('assets/data/products.json').pipe(
                map(res => res.data.map(product => new Product(product.id, product.name, product.price)))
            )
        );
    }
}

```

**Exemplo de uso de `interface ou type`:**

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

---

### 4. Diferença entre `type`, `interface` e `class`

| Aspecto               | Type                                       | Interface                                      | Class                                           |
|-----------------------|--------------------------------------------|------------------------------------------------|-------------------------------------------------|
| **Extensibilidade**   | Permite combinação com interseção (`&`)    | Permite extensão com `extends`                 | Permite herança com `extends`                   |
| **Compatibilidade**   | Suportada para objetos e tipos primitivos  | Suportada para definir objetos                 | Usada para definir estruturas orientadas a objetos com métodos e propriedades |
| **Suporte para União**| Permite união com `|`                      | Não permite unir tipos                         | Não aplicável                                   |
| **Declaração Múltipla** | Não aceita declarações adicionais        | Aceita declarações adicionais (merging)        | Não aplicável                                   |
| **Instanciável**      | Não instanciável                           | Não instanciável                               | Instanciável com `new`                          |
| **Modificadores de Acesso** | Não aplicável                        | Não aplicável                                  | Suporta `public`, `protected`, `private`        |

---

### 5. Vantagens de Interface

- **Extensão Múltipla**: Interfaces podem ser combinadas (declaration merging), o que permite que o código seja mais modular.
- **Legibilidade**: Interfaces geralmente melhoram a clareza do código em grandes projetos.

### 6. Vantagens de Type

- **Flexibilidade**: `type` permite a criação de uniões, interseções e alias para tipos complexos.
- **Uso de Tipos Primitivos**: Pode ser utilizado para definir alias de tipos primitivos, além de objetos e tipos complexos.

### 7. Vantagens de Class

- **Orientação a Objetos**: Suporta encapsulamento, herança e polimorfismo, permitindo um design orientado a objetos mais robusto.
- **Instanciável**: Diferente de `type` e `interface`, uma `class` pode ser instanciada, possibilitando a criação de objetos concretos com estados e métodos.

### Desvantagens

- **interface**: Não permite unir tipos usando `|` (uniões), o que pode limitar sua flexibilidade em alguns casos.
- **type**: Não suporta declaration merging, tornando-o menos adaptável em sistemas de tipo onde extensibilidade modular é necessária.
- **class**: Pode adicionar complexidade desnecessária em projetos onde uma estrutura simples de dados é suficiente.

---


## 1. O que é Environment?

`Environment` (ou Ambiente) refere-se à configuração específica de uma aplicação que varia de acordo com o ambiente em que ela está sendo executada. Em desenvolvimento de software, ambientes comuns incluem:

- **Desenvolvimento (development)**: Usado para desenvolvimento e testes locais.
- **Homologação (staging)**: Um ambiente de teste controlado que simula o ambiente de produção.
- **Produção (production)**: O ambiente final onde os usuários acessam o aplicativo.

Em Angular, o sistema de `environment` permite a configuração de variáveis e endpoints diferentes para cada um desses ambientes. Isso possibilita que o código do aplicativo se adapte dinamicamente, sem a necessidade de modificações manuais em cada transição de ambiente.

---

## 2. Como o Angular utiliza Environment?

No Angular, as configurações de `environment` são definidas em arquivos específicos, como `environment.ts` para desenvolvimento e `environment.prod.ts` para produção. Esses arquivos são automaticamente selecionados durante o processo de build do Angular, permitindo que as configurações corretas sejam aplicadas para o ambiente certo.

### Exemplo de uso no Angular

```typescript
// environment.ts (Desenvolvimento)
export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8080/auth',
    realm: 'my-realm',
    clientId: 'my-client-id'
  },
  apiUrl: 'http://localhost:3000/api'
};

// environment.prod.ts (Produção)
export const environment = {
  production: true,
  keycloak: {
    url: '${KEYCLOAK_URL}',
    realm: '${KEYCLOAK_REALM}',
    clientId: '${KEYCLOAK_CLIENT_ID}'
  },
  apiUrl: '${API_URL}'
};
```

No exemplo acima, o Angular seleciona automaticamente o arquivo correto de acordo com o ambiente. Em um build de produção (`ng build --prod`), o Angular usa `environment.prod.ts`. Para o ambiente de desenvolvimento, ele usa `environment.ts`.

### Uso das Variáveis de Environment no Código Angular

Para acessar as variáveis de ambiente no código Angular, você pode importar o arquivo `environment` e usar as variáveis diretamente. Isso facilita a gestão de configurações sensíveis, como URLs de APIs e autenticação.

```typescript
import { environment } from '../environments/environment';

export class AuthService {
  private authUrl = environment.keycloak.url;
  private apiUrl = environment.apiUrl;

  constructor() {
    console.log(`Usando API em: ${this.apiUrl}`);
  }
}
```

### Variáveis Dinâmicas em Produção

Em ambientes de produção, o uso de variáveis dinâmicas, como `${KEYCLOAK_URL}`, `${KEYCLOAK_REALM}`, e `${API_URL}`, permite que essas configurações sejam fornecidas em tempo de execução, em vez de estarem codificadas no aplicativo. Isso é útil em cenários de DevOps, onde as variáveis de ambiente podem ser substituídas com base no sistema de deploy.

#### Exemplo em um ambiente de contêiner ou CI/CD

As variáveis `${KEYCLOAK_URL}`, `${KEYCLOAK_REALM}`, `${KEYCLOAK_CLIENT_ID}`, e `${API_URL}` podem ser substituídas no momento de deploy para adaptar o aplicativo ao ambiente de produção. Essa abordagem é vantajosa pois separa as configurações sensíveis e específicas do ambiente do código principal da aplicação, permitindo um deploy mais seguro e flexível.

---

Em resumo, o sistema de `environment` no Angular é uma maneira eficaz de separar as configurações de ambiente e adaptar o comportamento do aplicativo sem mudanças manuais de código, suportando diferentes ambientes e integrando-se facilmente em fluxos de CI/CD.
