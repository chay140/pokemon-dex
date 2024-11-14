<img src="https://capsule-render.vercel.app/api?type=waving&color=BDBDC8&height=150&section=header" />

# pokemon-dex
> React-Vite 사용한 React projecct
> Vercel을 이용한 배포 링크 : https://pokemon-dex-chay-parks-projects.vercel.app/

## 페이지 소개
포켓몬 1세대 사전도감 페이지를 SPA 형식으로 구현했습니다.
트레이너가 6마리의 포켓몬을 리스트 혹은 포켓몬 상세 페이지에서 사용할 수 있게끔 기능을 구현하였습니다.
![image](https://github.com/user-attachments/assets/d60472ff-8ca4-4c84-8e8f-2102a0598d6c)

## 페이지 구성
* Home : 시작시 홈페이지
* Dex : 포켓몬 선택을 보여주는 대시보드와 포켓몬 리스트가 보이는 포켓몬리스트로 구성
* PokemonDetails : 포켓몬 카드를 눌었을때 보여주는 상세 페이지

## 프로젝트 구성도
```
App
│
└── Router
     ├── Home
     ├── Dex
     │    ├── Dashboard
     │    └── PokemonList
     │         └── PokemonCard
     └── PokemonDetail
```

### 구성 요소 설명

1. **App**  
   - 전체 애플리케이션의 루트 컴포넌트로, `Router` 컴포넌트를 포함하여 애플리케이션의 페이지 간 이동을 관리합니다.
2. **Router**  
   - `App`의 하위 컴포넌트로, `Home`, `Dex`, `PokemonDetail` 경로를 포함한 여러 페이지를 라우팅합니다.
3. **Home**  
   - 라우팅되는 첫 번째 페이지로, 별도의 하위 컴포넌트는 없습니다.
4. **Dex**  
   - `Dashboard`와 `PokemonList`를 포함하여 포켓몬 목록과 관련된 정보를 보여주는 페이지입니다.
5. **Dashboard**  
   - `Dex`의 하위 컴포넌트로, 포켓몬의 전반적인 통계를 시각적으로 나타냅니다.
6. **PokemonList**  
   - `Dex`의 하위 컴포넌트로, 여러 포켓몬 카드를 나열하며, `PokemonCard` 컴포넌트를 사용하여 개별 포켓몬 정보를 카드 형식으로 표시합니다.
7. **PokemonCard**  
   - `PokemonList`에서 사용하는 개별 포켓몬 카드 컴포넌트로, 포켓몬의 이미지와 이름 등 주요 정보를 보여줍니다.
8. **PokemonDetail**  
   - 선택된 포켓몬에 대한 세부 정보를 표시하는 컴포넌트로, `Router`에서 직접 라우팅됩니다.

# 사용 라이브러리
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

# 기술 스택
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Readme 작성
![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

<img src="https://capsule-render.vercel.app/api?type=waving&color=BDBDC8&height=150&section=footer" />
