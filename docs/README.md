# 🚇 지하철 노선도 미션

## 구현 기능 목록

- [ ] 추가 및 삭제에 localStorage 사용

### Station - 역 관련

#### Presenter

- [x] 초기화면
- [x] 역 추가 - `displayStations`
- [x] 역 삭제 - 기존 목록 삭제 후 필터링된 목록 표시로 구현

#### Container

- [x] 역 추가 - `stationAddClicked`
- [x] 역 삭제 - `stationDeleteClicked`

### Line - 노선 관련

#### Presenter

- [x] 초기화면
- [x] 노선 추가 - `displayLines`
- [x] 노선 삭제 - 기존 목록 삭제 후 필터링된 목록 표시로 구현

#### Container

- [x] 노선 추가 - `lineAddClicked`
- [x] 노선 삭제 -

### Section - 구간 관련

#### Presenter

- [x] 초기화면
- [ ] 구간 추가
- [ ] 구간 삭제

#### Container

- [ ] 구간 추가
- [ ] 구간 삭제

### validation

- [ ] 빈 입력
- [ ] station : 2글자 이상
- [ ] station : 중복되는 이름
- [ ] station : 중복되는 이름
- [ ] line : 중복되는 이름 (2호선 존재하는데 또 2호선 불가능)
- [ ] line : 상행 하행 종점이 같은경우
- [ ] line : 몇호선 인지 (e 1호선, 경의중앙선) 호선을 나타내는 `선` 단어를 포함하지 않은 경우
- [ ] section : 숫자만 입력
- [ ] section : 범위 밖 숫자 불가능
- [ ] section : 구간에 있는 역 추가 불가능
- [ ] section : 두개 이하일 경우 역을 제거할 수 없다.
- [ ] line, section : 종점 제거할 경우 다음역이 종점.
- [ ] line, section : 노선에 등록된 역은 삭제 불가능
- [ ] 각 삭제 버튼 클릭하면 확인 창 띄우기
