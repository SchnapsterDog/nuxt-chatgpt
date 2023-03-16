<template>
  <div>
    <input v-model="inputData">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import { useChatgpt } from "#imports"
import { ref } from "vue"

const { send } = useChatgpt()

const data = ref('')
const inputData = ref('')

async function sendMessage() {
  const response = await send(inputData.value)
  data.value = response
}
</script>
