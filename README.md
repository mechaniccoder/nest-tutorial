<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## TIL

### Validation

클라이언트로부터 전송되는 data transfer obejct(dto)를 validate한다. 보통 class-validator 라이브러리로 데코레이터를 활용해 이를 구현한다. nest에서는 pipe로 이를 활용한다.
