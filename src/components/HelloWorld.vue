<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h2>{{ $store.state.data }}</h2>
    <h3>Mi name is {{ $store.getters.getFullName }}</h3>
    <h4>Mi lista de amigos</h4>
    <input type="text" v-model="friend">
    <button @click="addFriend">Agregar amigo</button>
    <ul>
      <li v-for="(friend, index) in $store.state.friends" :key="index">
          {{ friend }}
      </li>
    </ul>
    <h4>Mi lista de cursos</h4>
    <input type="text" v-model="add_course">
    <button @click="addCourse">Agregar curso</button>
    <ul>
      <li v-for="(course, index) in $store.state.courses" :key="index">
        {{ course }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      friend: '',
      add_course: ''
    }
  },
  methods: {
    addFriend() {
      this.$store.state.friend = this.friend
      this.$store.dispatch('addFriendAction')
      this.friend = ''
    },
    addCourse() {
      this.$store.state.course = this.add_course
      this.$store.dispatch('addCourseAction')
      this.add_course = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
