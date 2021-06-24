<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## TIL

### Validation / 2021.06.23

클라이언트로부터 전송되는 data transfer obejct(dto)를 validate한다. 보통 class-validator 라이브러리로 데코레이터를 활용해 이를 구현한다. nest에서는 pipe로 이를 활용한다.

### Caching / 2021.06.24

클라이언트로부터 요청이 전송될때 nest서버는 요청에 대한 결과를 응답해준다. Caching을 사용하면 요청에 대한 오퍼레이션을 하지 않고 저장해둔 결과를 응답해주기 때문에 성능을 끌어올릴 수가 있다. nest에서는 cache-manager 패키지를 사용한다.
