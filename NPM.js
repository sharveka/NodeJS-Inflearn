npm : node package manager : node계의 앱스토어 느낌!
설치, 삭제, 업그레이드, 의존성 관리

 -g : global : 컴퓨터 전역에서 사용하는 독립적인 소프트웨어로 설치
 g가 없는 상태로 설치 : 현재 패키지를 설치한 프로그램 안에서 부품으로 설치

npm install sample -g : 전역적으로 설치
 -g가 없으면? 현재 실행되는 프로젝트에서 부품으로 사용

--save : package.json안에 dependencies로 들어감. 다른 디렉토리에서 사용할 때도 사용가능

패키지 설치하려면 프로젝트 폴더를 npm의 package로 초기화 -> npm init
