<template>
  <div>
    <input v-model="inputData" />
    <button @click="sendMessage" v-text="'Send'" />
    <button @click="sendStreamedMessage" v-text="'Send Streamed'" />
    <div>
      <div
        v-for="chat in chatTree"
        :key="chat"
      >
        <strong>{{ chat.role }} :</strong>
        <div>{{ chat.content }} </div>
      </div>
    </div>
    <div v-if="!loading && !images.length">
      <input v-model="inputData" />
      <button @click="sendPrompt" v-text="'Generate Image'" />
    </div>
    <div v-else-if="loading">Generating, please wait ...</div>
    <div v-if="images && !loading">
      <img
        v-for="image in images"
        :key="image.url"
        :src="image.url"
        alt="generated-image"
      />
    </div>
  </div>
</template>

<script setup>
import { useChatgpt } from "#imports";
import { ref } from "vue";

const { chatCompletion, chatCompletionStream,generateImage } = useChatgpt();

const chatTree = ref([]);
const images = ref([]);
const inputData = ref("");
const loading = ref(false);

function b64ToBlobUrl(b64) {
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const blob = new Blob([bytes], { type: "image/png" });
  return URL.createObjectURL(blob);
}

async function sendMessage() {
  try {
    const message = {
      role: "user",
      content: `${inputData.value}`,
    };

    chatTree.value.push(message);

    const response = await chatCompletion(chatTree.value);

    const responseMessage = {
      role: response[0].message.role,
      content: response[0].message.content,
    };

    chatTree.value.push(responseMessage);
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

async function sendStreamedMessage() {
  try {
    const userMessage = {
      role: "user",
      content: `${inputData.value}`,
    };

    chatTree.value.push(userMessage);

    // Push an empty assistant message that we will append tokens to
    const assistantMessage = {
      role: "assistant",
      content: "",
    };
    chatTree.value.push(assistantMessage);

    await chatCompletionStream(
      chatTree.value,
      undefined,
      undefined,
      {
        onToken(token) {
          assistantMessage.content += token;
        },
        onDone() {
          // optional: finalize UI state
        },
        onError(err) {
          alert(`Stream error: ${typeof err === "string" ? err : err?.message || "Unknown"}`);
        },
      }
    );

    inputData.value = "";
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

async function sendPrompt() {
  loading.value = true;
  try {
    const result = await generateImage(inputData.value);
    images.value = result.map((img) => ({
      url: b64ToBlobUrl(img.b64_json),
    }));
  } catch (error) {
    alert(`Error: ${error}`);
  }
  loading.value = false;
}
</script>
