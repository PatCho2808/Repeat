<template>
  <div id="app">
    <div class="container">
      <Info></Info>
      <Form></Form>
    </div>
  </div>
</template>

<script>
import Info from "./components/Info.vue";
import Form from "@/components/Form";

export default {
  name: 'App',
  components: {
    Form,
    Info
  }
}
</script>
