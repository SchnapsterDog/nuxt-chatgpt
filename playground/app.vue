<template>
  <div>
    <input v-model="inputData">
    <button
      @click="sendMessage"
      v-text="'Send'"
    />
    <div>
      <div
        v-for="chat in chatTree"
        :key="chat"
      >
        <strong>{{ chat.role }} :</strong>
        <div>{{ chat.content }} </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChatgpt } from "#imports"
import { ref } from "vue"

const { chatCompletion } = useChatgpt()

const chatTree = ref([])
const inputData = ref('')

async function sendMessage() {
  try {
    const message = {
      role: 'user',
      content: `${inputData.value}`,
    }

    chatTree.value.push(message)

    const response = await chatCompletion(chatTree.value)
    
    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content
    }
    
    chatTree.value.push(responseMessage)
  } catch(error) {
    alert(`Join the waiting list if you want to use GPT-4 models: ${error}`)
  }
}
</script>
