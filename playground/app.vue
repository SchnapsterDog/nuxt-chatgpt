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

const { chatCompletion } = useChatgpt()

const data = ref('')
const inputData = ref('')

async function sendMessage() {
  try {
    const response = await chatCompletion(inputData.value, 'gpt-3.5-turbo')
    data.value = response
  } catch(error) {
    alert(`Join the waiting list if you want to use GPT-4 models: ${error}`)
  }
}
</script>
