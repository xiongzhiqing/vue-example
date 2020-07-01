<template>
  <div>
    <header>
      <slot name="header">
        <nav>
          <span>{{user.name}}</span>
        </nav>
      </slot>
    </header>

    <main>
      <slot name="default">默认正文</slot>
    </main>

    <footer>
      <slot name="footer">默认尾部</slot>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: 'Li Lei',
        email: 'lilei@email.com'
      }
    }
  }
}
</script>