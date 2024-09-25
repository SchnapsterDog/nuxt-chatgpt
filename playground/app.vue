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
    <!-- <div v-if="!loading && !images.length">
      <input v-model="inputData">
      <button
        @click="sendPrompt"
        v-text="'Send Prompt'"
      />
    </div>
    <div v-else-if="loading">Generating, please wait ...</div>
    <div v-if="images && !loading" >
      <img v-for="image in images" :key="image.url" :src="image.url" alt="generated-image"/>
    </div> -->
  </div>
</template>

<script setup>
import { useChatgpt } from "#imports"
import { ref } from "vue"

const { chatCompletion, generateImage } = useChatgpt()

const chatTree = ref([])
const images = ref([])
const inputData = ref('')
const loading = ref(false)

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
    alert(`Error: ${error}`)
  }
}

async function sendPrompt() {
  loading.value = true
  try {
    images.value = await generateImage(inputData.value)
  } catch (error) {
    alert(`Error: ${error}`)
  }
  loading.value = false
}
</script>
