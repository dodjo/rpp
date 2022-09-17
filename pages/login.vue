<template>
  <div class='login-page'>
    <div class='login-form'>
      <div class='login-form__title'>Вход</div>
      <div class='login-card'>
        <div class='login-card__header'>Авторизуйтесь, чтобы начать работу</div>
        <div class='login-card__body'>
          <div class='form-item'>
            <label>Имя пользователя</label>
            <el-input/>
          </div>
          <div class='form-item'>
          <label>Имя пользователя</label>
          <el-input/>
        </div>
          <div class='form-item'>
            <el-checkbox>Запомнить меня</el-checkbox>
          </div>
          <el-button type='success' round>Войти</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:'login',
  name: 'LoginPage'
}
</script>

<style lang='scss' scoped>
.login-page {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 360px;
  &__title {
    font-weight: 300;
    font-size: 34px;
    line-height: 1.5;
    color: $color2;
    text-align: center;
  }
}
.login-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 12px;
  background-color: $color5;
  padding: 20px 15px;
  box-shadow: 0px 0px 20px rgba(73, 69, 79, 0.2), 0px 2px 2px rgba(73, 69, 79, 0.03), 0px 2px 5px rgba(73, 69, 79, 0.1);
  &__header {
    padding: 10px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color2;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .form-item {
    label {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: $color2;
    }
  }
}
</style>
